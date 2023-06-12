import { api } from "../../utils/api";
import { useState } from "react";
import { useRouter } from "next/router";

export function CreatePost() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const topicId = router.query.topicId as string;

  const ctx = api.useContext();

  const { mutate } = api.post.createPost.useMutation({
    onSettled: async () => {
      await ctx.post.getAllPosts.invalidate();
      setTitle("");
      setContent("");
    },
  });

  return (
    <form
      className="m-4 flex min-w-[400px] flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        mutate({ title, content, topicId });
      }}
    >
      <input
        type="text"
        placeholder="Title"
        className="input-bordered input mb-4 w-full max-w-xs text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content"
        className="input-bordered input mb-4 w-full max-w-xs text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="btn-accent btn max-w-[100px]">Create Post</button>
    </form>
  );
}
