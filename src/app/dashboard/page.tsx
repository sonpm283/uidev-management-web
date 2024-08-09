import PostDetail from "@/components/post-detail";
import { sendRequest } from "@/utils/api";

export default async function DashboardPage() {
  const user = await sendRequest({
    url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/user`,
    method: "GET",
  });


  console.log('user', user);
  

  return (
    <main className="min-h-screen p-10">
      <h1>Dashboard Page</h1>
      <PostDetail postId="1" />
    </main>
  );
}
