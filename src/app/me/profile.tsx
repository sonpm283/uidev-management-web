"use client";

import { sendRequest } from "@/utils/api";
import { useAppContext } from "../AppProvider";
import envConfig from "@/config/env.config";
import useSWR from "swr";

interface Response {
  data: { id: number; name: string; email: string };
  message: string;
}

export default function Profile() {
  // const { sessionToken } = useAppContext();

  const fetcher = (url: string) =>
    sendRequest<Response>({
      url: `${envConfig.NEXT_PUBLIC_API_ENDPOINT}${url}`,
      method: "GET",
      useCredentials: true,
    });

  const { data: userData, error, isLoading } = useSWR("/user/me", fetcher);

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-3 border">
      <p>Name: {userData?.data.email.split('@')[0]}</p>
      <p>Email: {userData?.data.email}</p>
    </div>
  );
}
