"use client";

import PostDetail from "@/components/post-detail";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendRequest } from "@/utils/api";
import { useEffect, useState } from "react";
export default function HomePage() {
  useEffect(() => {
    (async () => {
      const user = await sendRequest({
        url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/account/me`,
        method: "GET",
      });

      console.log('user:', user);
      
    })();
  }, []);
  // using fetch
  // const posts = await sendRequest<IPost[]>({
  //   url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/posts`,
  //   url: `https://jsonplaceholder.typicode.com/posts`,
  //   method: "GET",
  //   queryParams: { _page: 2 },
  // });

  const [detailPost, setDetailPost] = useState<number[]>([1, 2, 3]);

  function handleAddClick() {
    setDetailPost((prev) => [...prev, 1]);
  }

  return (
    <main className="min-h-screen p-10">
      <h1>Home Page SWR Test</h1>
      <Button onClick={handleAddClick} className={cn("mt-3")}>
        Add Post
      </Button>
      <ul className="flex gap-5 flex-wrap mt-5">
        <PostDetail postId="1" />
        {/* {detailPost.map((x, index) => (
          <li key={index}>
          </li>
        ))} */}
      </ul>
    </main>
  );
}
