import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-cyan-100 px-4 lg:h-20 lg:px-10">
      <button className={"text-3xl lg:text-4xl"}>
        <AiOutlineMenu />
      </button>
      <Link href="/">
        <h1 className="text-3xl font-medium text-slate-600 lg:text-4xl">BLOG</h1>
      </Link>
      <Link href={"/"}>Chatbot</Link>
    </header>
  );
}
