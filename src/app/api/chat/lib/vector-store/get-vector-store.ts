import { OpenAIEmbeddings } from "@langchain/openai";
import type { Document } from "langchain/document";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

import { getTextChunks } from "./get-text-chunks";

let vectorStoreInstance: MemoryVectorStore | null = null;

export async function getVectorStore(): Promise<MemoryVectorStore> {
  if (vectorStoreInstance) return vectorStoreInstance;

  const allDocs: Document[] = [];
  try {
    const resumeChunks = await getTextChunks(
      "MatthewFoxwellResume.txt",
      "resume"
    );
    allDocs.push(...resumeChunks);

    const portfolioChunks = await getTextChunks("portfolio.md", "portfolio");
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
