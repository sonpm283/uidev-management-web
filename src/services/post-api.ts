import { IPostDetail } from "@/types/posts.type";
import axiosClient from "./axios-client";

export const postApi = {
  getPostById: function (id: string) {
    return axiosClient.get<IPostDetail>(`posts/${id}`);
  },
  createPost: (post: Omit<IPostDetail, "id">) =>
    axiosClient.post<IPostDetail>("/posts", post),
};
