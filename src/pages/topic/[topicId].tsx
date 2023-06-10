import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { type NextPage } from "next";
import { PostList } from "../../components/posts/PostList";

const SingleTopicPage: NextPage = () => {
  const router = useRouter();
  const topicId = router.query.topicId as string;

  const { data, isLoading, isError } = api.topic.getOneTopic.useQuery({
    topicId,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="p-10">
      <h2>{data?.name}</h2>
      <p>{data?.description}</p>
      <div className="border-4-black w-full border-b"></div>
      <PostList topicId={topicId} />
    </div>
  );
};

export default SingleTopicPage;
