import type { Post } from "../../types";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type PostProps = {
  post: Post;
};

dayjs.extend(relativeTime);

export function PostItem({ post }: PostProps) {
  const { id, title, content, createdAt } = post;

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
    </div>
  );
}
