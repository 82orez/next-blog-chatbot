"use client";

import axios from "axios";
import { useState } from "react";

export default function SearchPage() {
  const [content, setContent] = useState("");

  return (
    <div>
      <div>SearchPage</div>
      <button
        onClick={async () => {
          try {
            const res = await axios("/api/openai", {});
            const result = await res.data;
            setContent(result.content);
            return result;
          } catch (e) {
            console.error("Error Loading page:", e);
          }
        }}>
        OpenAi
      </button>
      <div>{content}</div>
    </div>
  );
}
