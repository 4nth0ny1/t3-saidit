import { api } from "../../utils/api";
import { CommentItem } from "./CommentItem";
import { useState } from "react";

type PostIdProps = {
  postId: string;
};

export function CommentList({ postId }: PostIdProps) {
  const {
    data: comments,
    isLoading,
    isError,
  } = api.comment.getAllComments.useQuery({ postId });

  const [term, setTerm] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const filteredComments = comments.filter((comment) => {
    return comment.message.toLowerCase().includes(term.toLowerCase());
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="form-control my-10 flex flex-row justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input w-24 w-[400px] text-black"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="w-1/2 items-center">
        {filteredComments?.map((comment) => {
          return <CommentItem key={comment.id} comment={comment} />;
        })}
      </div>
    </div>
  );
}
