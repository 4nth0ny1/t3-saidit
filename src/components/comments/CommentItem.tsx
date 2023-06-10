import type { Comment } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type CommentProps = {
  comment: Comment;
};

dayjs.extend(relativeTime);

export function CommentItem({ comment }: CommentProps) {
  const { message, createdAt } = comment;

  return (
    <div className="flex flex-col border-b p-4">
      <div className="flex flex-row justify-between ">
        <p className="text-xl">{message}</p>

        <span className="font-thin italic">{` Posted ${dayjs(
          createdAt
        ).fromNow()}`}</span>
      </div>
    </div>
  );
}
