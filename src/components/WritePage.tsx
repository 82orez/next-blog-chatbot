"use client";

import CreatableSelect from "react-select/creatable";
import { MarkdownEditor } from "@/components/Markdown";
import { useState } from "react";

const fruitOptions = [
  { value: "apple", label: "사과" },
  { value: "pear", label: "배" },
  { value: "grape", label: "포도" },
];

export default function WritePage() {
  const [content, setContent] = useState("");

  return (
    <form className="border-4 border-amber-500 bg-emerald-100 pt-4">
      <div className="flex flex-col gap-3">
        <input type="text" placeholder="제목" className="rounded-md border-2 p-2" />
        <input type="file" accept="image/*" />
        <CreatableSelect isMulti={false} isClearable options={fruitOptions} placeholder={"카테고리"} />
        <CreatableSelect isMulti={true} isClearable options={fruitOptions} placeholder={"태그"} />

        <MarkdownEditor height={400} value={content} onChange={(s) => setContent(s ?? "")} />
      </div>

      <button type="submit" className="mt-4 w-full rounded-md bg-gray-600 py-2 text-white transition-all hover:bg-gray-900">
        작성하기
      </button>
    </form>
  );
}
