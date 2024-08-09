"use client";

import { postApi } from "@/services";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { IPostDetail } from "@/types/posts.type";
import useSWR from "swr";

interface IPostDetailProps {
  postId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export default function PostDetail({ postId }: IPostDetailProps) {
  const { data, isLoading, error, mutate } = useSWR<IPostDetail>(
    `/posts/${postId}`,
    () => postApi.getPostById(postId).then((res) => res.data),
    {
      revalidateOnFocus: false,
      // dedupingInterval: MILLISECOND_PER_HOUR,
    }
  );

  const handleMutateClick = () => {
    mutate({ ...data, title: "SonPM" } as IPostDetail, true);
  };

  console.log("data", data);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="p-3 border">
      <h2 className="font-bold text-ellipsis text-lg">{data?.title}</h2>
      <p>{data?.body}</p>
      <Button
        variant={"destructive"}
        onClick={handleMutateClick}
        className={cn("mt-3")}
      >
        Mutate
      </Button>
    </div>
  );
}
