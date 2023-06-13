import type { Comment } from "../../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { api } from "../../utils/api";

type CommentProps = {
  comment: Comment;
};

dayjs.extend(relativeTime);

export function CommentItem({ comment }: CommentProps) {
  const { id, message, createdAt } = comment;

  const ctx = api.useContext();

  const { mutate: deleteMutation } = api.comment.deleteComment.useMutation({
    onSettled: async () => {
      await ctx.comment.getAllComments.invalidate();
    },
  });

  return (
    <div className="flex flex-col border-b p-4">
      <div className="flex flex-row justify-between ">
        <p className="text-xl">{message}</p>

        <span className="font-thin italic">{` Commented ${dayjs(
          createdAt
        ).fromNow()}`}</span>
        <button
          onClick={() => deleteMutation(id)}
          className="btn-warning btn-sm btn w-[100px]"
        >
          delete
        </button>
      </div>
    </div>
  );
}
