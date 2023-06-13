import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { type NextPage } from "next";
import { PostList } from "../../components/posts/PostList";
import Link from "next/link";
import { CreatePost } from "../../components/posts/CreatePost";

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
      <Link href="/">
        <p className="px-8 py-2 text-right text-xl italic text-accent">
          back to topics
        </p>
      </Link>
      <div className="hero h-[400px]">
        <div className="hero-content flex flex-col">
          <div className="flex w-full flex-row justify-between">
            <div>
              <h2 className="text-5xl font-bold ">{data?.name}</h2>
              <p className="py-6 ">{data?.description}</p>
            </div>
            <button className="btn-warning btn">delete</button>
          </div>
          <CreatePost />
        </div>
      </div>
      <PostList topicId={topicId} />
    </div>
  );
};

export default SingleTopicPage;
