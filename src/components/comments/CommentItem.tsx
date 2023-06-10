import type { Comment } from "../../types";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type CommentProps = {
  comment: Comment;
};

dayjs.extend(relativeTime);

export function CommentItem({ comment }: CommentProps) {
  const { id, message, createdAt } = comment;

  return (
    <div className="flex flex-col border-b p-4">
      <div className="flex flex-row justify-between ">
        <Link href={`/topic/post/${id}`}>
          <h2 className="text-xl">{message}</h2>
        </Link>
        <span className="font-thin italic">{` Posted ${dayjs(
          createdAt
        ).fromNow()}`}</span>
      </div>
    </div>
  );
}
