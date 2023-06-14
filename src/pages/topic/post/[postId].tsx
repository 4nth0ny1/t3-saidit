import { useRouter } from "next/router";
import { api } from "../../../utils/api";
import { type NextPage } from "next";
import { CommentList } from "../../../components/comments/CommentList";
import { CreateComment } from "../../../components/comments/CreateComment";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Hero } from "../../../components/Hero";

dayjs.extend(relativeTime);

const SinglePostPage: NextPage = () => {
  const router = useRouter();
  const postId = router.query.postId as string;

  const {
    data: post,
    isLoading,
    isError,
  } = api.post.getOnePost.useQuery({ postId });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="flex w-full flex-col text-white">
      <Link href={`/topic/${post?.topicId as string}`}>
        <p className="px-8 py-2 text-right text-xl italic text-accent">back</p>
      </Link>
      <div className="flex flex-row justify-end">
        <Hero post={post} />
        <div className="mb-10 flex w-full flex-col justify-center">
          <CreateComment topicId={post?.topicId as string} />
        </div>
      </div>
      <CommentList postId={postId} />
    </div>
  );
};

export default SinglePostPage;
