import { GoogleGenerativeAI } from "@google/generative-ai";
import { getContext } from "@/lib/context";
import { db } from "@/lib/db";
import { chats, messages as _messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const runtime = "edge";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages, chatId } = await req.json();
    const _chats = await db.select().from(chats).where(eq(chats.id, chatId));

    if (_chats.length !== 1) {
      return NextResponse.json({ error: "Chat not found" }, { status: 404 });
    }

    const fileKey = _chats[0].fileKey;
    const lastMessage = messages[messages.length - 1];
    const context = await getContext(lastMessage.content, fileKey);

    const systemPrompt = `AI assistant is a powerful, human-like artificial intelligence.
      AI is knowledgeable, helpful, and articulate.
      AI provides clear, factual, and well-reasoned responses.
      START CONTEXT BLOCK
      ${context}
      END OF CONTEXT BLOCK
      AI assistant will only use the provided context.
      If the answer is not in the context, AI will respond with: "I'm sorry, but I don't know the answer to that question."
    `;

    // Get the AI model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Stream AI response
    const resultStream = await model.generateContent({
      contents: [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...messages.map((msg: any) => ({
          role: msg.role,
          parts: [{ text: msg.content }],
        })),
      ],
    });

    // Save user message to DB
    await db.insert(_messages).values({
      chatId,
      content: lastMessage.content,
      role: "user",
    });

    // Stream response
    let completion = "";
    for await (const chunk of resultStream.stream) {
      completion += chunk.text(); // Append streamed text
    }

    // Save AI response to DB
    await db.insert(_messages).values({
      chatId,
      content: completion,
      role: "system",
    });

    return new Response(completion, {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error) {
    console.error("Error processing chat:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
