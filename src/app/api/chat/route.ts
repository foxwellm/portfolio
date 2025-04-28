import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { getFileText, getVectorStore } from "./lib";

const client = new OpenAI();

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const vectorStore = await getVectorStore();
    const relevantDocs = await vectorStore.similaritySearch(message, 5);
    const context = relevantDocs.map((doc) => doc.pageContent).join("\n");

    const prompt = `Use the following resume data to answer the question:\n\n${context}\n\nQ: ${message}\nA:`;
    const instructions = getFileText("prompt-instructions.txt");

    const response = await client.responses.create({
      model: "gpt-4.1",
      instructions,
      input: prompt,
    });

    return NextResponse.json({ reply: response.output_text });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch from OpenAI" },
      { status: 500 }
    );
  }
}
