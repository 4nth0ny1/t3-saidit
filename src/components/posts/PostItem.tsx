import type { Post } from "../../types";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { api } from "../../utils/api";

type PostProps = {
  post: Post;
};

dayjs.extend(relativeTime);

export function PostItem({ post }: PostProps) {
  const { id, title, content, createdAt } = post;

  const ctx = api.useContext();

  const { mutate: deleteMutation } = api.post.deletePost.useMutation({
    onSettled: async () => {
      await ctx.post.getAllPosts.invalidate();
    },
  });

  return (
    <div className="flex flex-col border-b p-4">
      <div className="flex flex-row justify-between ">
        <Link href={`/topic/post/${id}`}>
          <h2 className="text-xl">{title}</h2>
        </Link>
        <span className="font-thin italic">{` Posted ${dayjs(
          createdAt
        ).fromNow()}`}</span>
      </div>
      <p>{content}</p>
      <button
        onClick={() => deleteMutation(id)}
        className="btn-warning btn-sm btn w-[100px]"
      >
        delete
      </button>
    </div>
  );
}
