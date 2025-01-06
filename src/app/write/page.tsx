export default function WritePage() {
  return (
    <div className="flex flex-col pb-20 pt-12">
      <h1 className="mb-8 text-2xl font-medium">새로운 글</h1>
      <form className={"border-4 border-amber-500 bg-emerald-100 pt-4"}>
        <div className="flex flex-col gap-3">
          <input type="text" placeholder="제목" />
          <input type="file" accept="image/*" />
        </div>
        <button type="submit" className="mt-4 w-full rounded-md bg-gray-500 py-2 text-white transition-all hover:bg-gray-900">
          작성하기
        </button>
      </form>
    </div>
  );
}
