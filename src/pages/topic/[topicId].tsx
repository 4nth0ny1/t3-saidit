import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { type NextPage } from "next";
import { PostList } from "../../components/posts/PostList";
import Link from "next/link";
import { CreatePost } from "../../components/posts/CreatePost";
import { Hero } from "../../components/Hero";

const SingleTopicPage: NextPage = () => {
  const router = useRouter();
  const topicId = router.query.topicId as string;

  const {
    data: topic,
    isLoading,
    isError,
  } = api.topic.getOneTopic.useQuery({
    topicId,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="w-full  text-white">
      <Link href="/">
        <p className="px-8 py-2 text-right text-xl italic text-accent">
          back to all topics
        </p>
      </Link>
      <Hero topic={topic} />
      <div className="mb-10 flex w-full flex-row justify-center">
        <CreatePost />
      </div>
      <PostList topicId={topicId} />
    </div>
  );
};

export default SingleTopicPage;
