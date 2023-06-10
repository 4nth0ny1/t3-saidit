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
    <div className="flex w-full flex-row text-white">
      <div className="h-[100vh] w-[15%] border-r-2 p-10">
        <h2 className="text-3xl">{data?.name}</h2>
        <p>{data?.description}</p>
      </div>
      <div className="w-[85%] py-10">
        <PostList topicId={topicId} />
      </div>
    </div>
  );
};

export default SingleTopicPage;
