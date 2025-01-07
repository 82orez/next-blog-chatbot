"use client";

import type { MarkdownPreviewProps } from "@uiw/react-markdown-preview";
import type { MDEditorProps } from "@uiw/react-md-editor";
import dynamic from "next/dynamic";

import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const MDViewer = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

export const MarkdownEditor = ({ ...rest }: MDEditorProps) => (
  // Dark 모드 적용 여부
  <div data-color-mode="light">
    <MDEditor {...rest} />
  </div>
);

export const MarkdownViewer = ({ ...rest }: MarkdownPreviewProps) => (
  // Dark 모드 적용 여부
  <div data-color-mode="light">
    <MDViewer {...rest} />
  </div>
);
