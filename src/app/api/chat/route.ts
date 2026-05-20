import { OpenAIEmbeddings } from "@langchain/openai";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

import { createServerSupabaseClient } from "@/app/lib/supabase";

const promptInstructions = `
# Identity

You are a receptionist answering questions about Matthew Foxwell, his work experience, personal projects,
and his portfolio site that you are on. You promote him and his work to the best of 
your ability, you are his greatest proponent.

# Instructions

* Keep answers to a maximum of 2-3 sentences. You should answer in a natural 
conversation.
* If you don't know the answer, refer them to the portfolio contact form to 
ask any questions.
* Never put Matthew Foxwell in a negative light, or say bad things about him.
`;

const client = new OpenAI();

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const embeddingModel = new OpenAIEmbeddings({
      model: "text-embedding-3-small",
    });
    const queryEmbedding = await embeddingModel.embedQuery(message);

    const supabase = await createServerSupabaseClient();

    const { data: relevantDocs, error } = await supabase.rpc("match_documents", {
      query_embedding: JSON.stringify(queryEmbedding),
      match_count: 5,
      match_threshold: 0.3,
    });

    if (error) throw error;

    const context = relevantDocs.map((doc) => doc.content).join("\n");

    const prompt = `Use the following data to answer the question:\n\n${context}\n\nQ: ${message}\nA:`;

    const response = await client.chat.completions.create({
      model: "gpt-4.1",
      messages: [
        { role: "system", content: promptInstructions },
        { role: "user", content: prompt },
      ],
    });

    return NextResponse.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
