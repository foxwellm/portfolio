import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

import { getFileText } from "./get-file-text";

export async function getTextChunks(filePath: string, documentType: string) {
  const fileText = getFileText(filePath);

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });

  return await splitter.createDocuments([fileText], [{ type: documentType }]);
}
