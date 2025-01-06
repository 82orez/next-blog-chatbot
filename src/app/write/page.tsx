export default function WritePage() {
  return (
    <div className="flex flex-col px-1 pb-20 pt-12 lg:px-3">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>

      <form className={"border-4 border-amber-500 bg-emerald-100 pt-4"}>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="제목" className={"rounded-md border-2 p-2"} />
          <input type="file" accept="image/*" />
        </div>
        <button type="submit" className="mt-4 w-full rounded-md bg-gray-600 py-2 text-white transition-all hover:bg-gray-900">
          작성하기
        </button>
      </form>
    </div>
  );
}
