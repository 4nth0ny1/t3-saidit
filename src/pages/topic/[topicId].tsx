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
    <div className="w-full  text-white">
      <div className="h-[400px hero">
        <div className="hero-content flex-col lg:flex-row ">
          <div>
            <h1 className="text-5xl font-bold ">{data?.name}</h1>
            <p className="py-6 ">{data?.description}</p>
          </div>
        </div>
      </div>
      <PostList topicId={topicId} />
    </div>
  );
};

export default SingleTopicPage;
