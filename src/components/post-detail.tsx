"use client";

import { postApi } from "@/services";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { IPostDetail } from "@/types/posts.type";
import useSWR from "swr";
import axiosClient from "@/services/axios-client";

interface IPostDetailProps {
  postId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;
const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);

export default function PostDetail({ postId }: IPostDetailProps) {
  const { data, isLoading, error, mutate } = useSWR<IPostDetail>(
    `/posts/${postId}`,
    fetcher,
    {
      revalidateOnFocus: true,
      // dedupingInterval: 1000,
    }
  );

  const handleMutateClick = () => {
    mutate({ ...data, title: "SonPM" } as IPostDetail, false);
  };

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
