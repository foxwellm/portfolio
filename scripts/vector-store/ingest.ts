import { OpenAIEmbeddings } from "@langchain/openai";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";
import fs from "fs";
import path from "path";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_PRIVATE_SERVICE_ROLE_KEY!
);

const embeddingModel = new OpenAIEmbeddings();

function getFileHash(content: string): string {
  return crypto.createHash("sha256").update(content).digest("hex");
}

async function run() {
  const dataDir = path.join(
    process.cwd(),
    "scripts",
    "vector-store",
    "documents"
  );
  const filenames = fs.readdirSync(dataDir);

  for (const filename of filenames) {
    try {
      const filePath = path.join(dataDir, filename);
      const content = fs.readFileSync(filePath, "utf-8");
      const hash = getFileHash(content);

      // Check if already ingested
      const { data: existingDocs, error } = await supabase
        .from("documents")
        .select("metadata")
        .eq("metadata->>filename", filename);

      if (error) throw error;

      const alreadyIndexed = existingDocs?.some(
        (doc) => doc.metadata.hash === hash
      );

      if (alreadyIndexed) {
        console.log(`✅ Skipped ${filename} — no changes`);
        continue;
      }

      // Delete existing filename before re ingesting
      await supabase
        .from("documents")
        .delete()
        .eq("metadata->>filename", filename);

      const metadata = {
        filename,
        hash,
      };

      const [embedding] = await embeddingModel.embedDocuments([content]);

      const { error: insertError } = await supabase.from("documents").insert({
        content,
        metadata,
        embedding,
      });

      if (insertError) throw insertError;

      console.log(`✅ Ingested ${filename}`);
    } catch (err) {
      console.error(`❌ Error processing ${filename}:`, err);
    }
  }
}

run();
