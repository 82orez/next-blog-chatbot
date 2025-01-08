"use client";

import axios from "axios";
import { useState } from "react";

export default function SearchPage() {
  const [content, setContent] = useState("");
  const [isOpenAiLoading, setIsOpenAiLoading] = useState(false);

  return (
    <div className={""}>
      {isOpenAiLoading ? (
        <div className={"animate-pulse text-8xl"}>답변 생성 중...</div>
      ) : (
        <>
          <div className={""}>SearchPage</div>
          <button
            className={""}
            onClick={async () => {
              try {
                setIsOpenAiLoading(true);

                const res = await axios("/api/openai", {});
                const result = await res.data;

                setIsOpenAiLoading(false);
                setContent(result.content);

                return result;
              } catch (e) {
                console.error("Error Loading page:", e);
              }
            }}>
            OpenAi
          </button>
          <div>{content}</div>
        </>
      )}
    </div>
  );
}
