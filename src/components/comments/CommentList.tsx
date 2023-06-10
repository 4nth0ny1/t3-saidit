import { api } from "../../utils/api";
import { CommentItem } from "./CommentItem";

type PostIdProps = {
  postId: string;
};

export function CommentList({ postId }: PostIdProps) {
  const {
    data: comments,
    isLoading,
    isError,
  } = api.comment.getAllComments.useQuery({ postId });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 items-center">
        {comments?.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}
