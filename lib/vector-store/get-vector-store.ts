import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { getTextChunks } from "./get-text-chunks";
import type { Document } from "langchain/document";

let vectorStoreInstance: MemoryVectorStore | null = null;

export default async function getVectorStore(): Promise<MemoryVectorStore> {
  if (vectorStoreInstance) return vectorStoreInstance;

  const allDocs: Document[] = [];
  try {
    const resumeChunks = await getTextChunks(
      "lib/vector-store/sources/MatthewFoxwellResume.txt",
      "resume"
    );
    allDocs.push(...resumeChunks);

    const portfolioChunks = await getTextChunks(
      "lib/vector-store/sources/portfolio.md",
      "portfolio"
    );
    allDocs.push(...portfolioChunks);

    const embeddings = new OpenAIEmbeddings();
    vectorStoreInstance = await MemoryVectorStore.fromDocuments(
      allDocs,
      embeddings
    );

    return vectorStoreInstance;
  } catch (error) {
    console.error("Error building vector store:", error);
    throw new Error("Failed to create vector store");
  }
}
