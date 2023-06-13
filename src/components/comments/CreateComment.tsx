import { api } from "../../utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

type TopicIdProps = {
  topicId: string;
};

export function CreateComment({ topicId }: TopicIdProps) {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const postId = router.query.postId as string;

  const ctx = api.useContext();

  const { mutate } = api.comment.createComment.useMutation({
    onSettled: async () => {
      await ctx.comment.getAllComments.invalidate();
      setMessage("");
    },
  });

  return (
    <form
      className="m-4 flex min-w-[400px] flex-row gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ message, postId, topicId });
      }}
    >
      <input
        type="text"
        placeholder="Title"
        className="input-bordered input mb-4 w-full max-w-xs text-black"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="btn-accent btn max-w-[100px]">Create Message</button>
    </form>
  );
}
