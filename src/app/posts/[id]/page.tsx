import { createClient } from "@/utils/supabase/server";

export default async function PostsPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("test").select("*");
  if (error) {
    console.error("Insert Error:", error.message);
  }
  console.log("data: ", data);

  return (
    <div>
      <div>PostsPage</div>
      <div>Dummy</div>
    </div>
  );
}
