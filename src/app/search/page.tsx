"use client";

import axios from "axios";

export default function SearchPage() {
  return (
    <div>
      <div>SearchPage</div>
      <button
        onClick={async () => {
          try {
            const res = await axios("/api/openai", {});
            const result = await res.data;
            return "getNoteList rendered";
          } catch (e) {
            console.error("Error Loading page:", e);
          }
        }}>
        OpenAi
      </button>
    </div>
  );
}
