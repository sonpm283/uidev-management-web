interface Post {
  userName: string;
  title: string;
  content: string;
}

interface IPostProps {
  post: Post;
}

export default function Post(props: IPostProps) {
  const { post } = props;
  return (
    <div className="p-3 rounded-lg border h-full flex flex-col">
      <h2 className="font-bold text-ellipsis text-lg uppercase">{post.title}</h2>
      <div className="mt-3 flex-1 flex flex-col gap-2">
        <p className="text-ellipsis">{post.content}</p>
        <p className="text-sm text-slate-500 mt-auto">
          <span className="font-bold">Author</span>: {post.userName}
        </p>
      </div>
    </div>
  );
}
