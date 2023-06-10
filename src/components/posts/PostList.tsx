import { api } from "../../utils/api";
import { PostItem } from "./PostItem";

type TopicIdProps = {
  topicId: string;
};

export function PostList({ topicId }: TopicIdProps) {
  const {
    data: posts,
    isLoading,
    isError,
  } = api.post.getAllPosts.useQuery({ topicId });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-1/2 items-center">
        {posts?.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
}
