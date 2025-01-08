import WritePage from "@/components/WritePage";

export default function Page() {
  return (
    <div className="flex flex-col px-1 pt-6 lg:px-3">
      <h1 className="mb-4 text-2xl font-medium">새로운 글</h1>

      <WritePage />
    </div>
  );
}
