// 'use client '

import Post from "./components/post/post";
import { sendRequest } from "./utils/api";
import useSWR, { SWRConfig } from "swr";
interface IPost {
  userId: string;
  id: string;
  title: string;
  body: string;
}

// for example
interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// const fetcher = (url: string) => fetch(url).then((r) => r.json());
export default async function HomePage() {
  // const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

  const posts = await sendRequest<IPost[]>({
    // url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/posts`,
    url: `https://jsonplaceholder.typicode.com/posts`,
    method: "GET",
    // queryParams: { _page: 2 },
  });

  const users = await sendRequest<IUser[]>({
    // url: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/v1/posts`,
    url: `https://jsonplaceholder.typicode.com/users`,
    method: "GET",
    // body: {name: 'Bret', email: 'Sincere@april.biz}
  });

  const convertUserData = users.reduce(
    (acc: { listData: Record<string, IUser> }, user: IUser) => {
      acc.listData[user.id] = user;
      return acc;
    },
    { listData: {} }
  );

  const postsData = posts.map((post: IPost) => {
    const user = convertUserData.listData[post.userId];

    return {
      userName: user.name,
      title: post.title,
      content: post.body,
    };
  });

  return (
    <main className="min-h-screen p-10">
      <h1>Home Page</h1>

      <ul className="flex gap-5 flex-wrap mt-5">
        {postsData.map((post) => (
          <li key={post.title} className="md:w-[calc(33.33%-13.33px)] lg:w-[calc(25%-15px)]">
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
