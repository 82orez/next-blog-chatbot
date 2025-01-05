"use client";

import useSidebarStateStore from "@/stores/sidebarStore";
import clsx from "clsx";
import { AiFillGithub, AiFillInstagram, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export default function Sidebar() {
  const { isOpen, toggle } = useSidebarStateStore();
  return (
    <div
      className={clsx("min-h-screen flex-col gap-6 border-r bg-white p-10 pr-6 text-base", {
        hidden: !isOpen,
        flex: isOpen,
      })}>
      <Link href={"/"} className="w-48 font-medium text-gray-600 hover:underline">
        Home
      </Link>
      <Link href="/" className="w-48 font-medium text-gray-600 hover:underline">
        태그
      </Link>
      <Link href={"/"}>카테고리</Link>

      {/*<div className="mt-10 flex items-center gap-4">*/}
      {/*  <IconButton Icon={AiFillInstagram} component={Link} label="instagramLink" href="https://www.instagram.com/dhoonjang" target="_blank" />*/}
      {/*  <IconButton Icon={AiFillGithub} component={Link} label="githubLink" href="https://www.github.com/dhoonjang" target="_blank" />*/}
      {/*</div>*/}
    </div>
  );
}
