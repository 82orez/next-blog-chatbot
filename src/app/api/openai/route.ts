import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey:
    "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",
});

export async function GET(request: Request) {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
        role: "user",
        content: "순두부찌개 만드는 법 알려줘.",
      },
    ],
  });

  console.log(completion.choices[0].message);

  return NextResponse.json(completion);
}
