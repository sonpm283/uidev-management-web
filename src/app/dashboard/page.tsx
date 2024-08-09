import PostDetail from "@/components/post-detail";

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-10">
      <h1>Dashboard Page</h1>
      <PostDetail postId="1" />
    </main>
  );
}
