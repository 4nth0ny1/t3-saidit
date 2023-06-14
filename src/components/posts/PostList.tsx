import { api } from "../../utils/api";
import { PostItem } from "./PostItem";
import { useState } from "react";

type TopicIdProps = {
  topicId: string;
};

export function PostList({ topicId }: TopicIdProps) {
  const {
    data: posts,
    isLoading,
    isError,
  } = api.post.getAllPosts.useQuery({ topicId });

  const [term, setTerm] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(term.toLowerCase());
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
        {filteredPosts?.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
