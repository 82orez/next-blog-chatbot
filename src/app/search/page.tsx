"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, isLoading, handleInputChange, handleSubmit } = useChat({ api: "/api/openai" });
  return (
    <div className="flex h-full w-full flex-col items-center justify-between">
      <div className="h-full w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <div className="flex h-full flex-col justify-between">
          <div className="overflow-y-auto">
            {messages.map((m) => (
              <div key={m.id} className="whitespace-pre-wrap">
                {m.role === "user" ? "User: " : "AI: "}
                {m.content}
              </div>
            ))}
          </div>
          <div className="overflow-y-auto"></div>

          <form className="mt-4 flex w-full" onSubmit={handleSubmit}>
            <input
              className="w-full rounded-l-lg border border-gray-300 p-3 focus:border-blue-300 focus:outline-none focus:ring"
              placeholder="제주도 오늘의 날씨는 어때?"
              onChange={handleInputChange}
              disabled={isLoading}
              value={input}
            />
            {isLoading ? (
              <button className="rounded-r-lg bg-red-500 px-1 text-sm text-white" onClick={stop} type="button">
                중지
              </button>
            ) : (
              <button className="rounded-r-lg bg-blue-500 px-1 text-sm text-white" type="submit" disabled={!input.trim()}>
                전송
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
