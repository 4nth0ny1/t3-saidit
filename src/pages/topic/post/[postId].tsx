import { useRouter } from "next/router";
import { api } from "../../../utils/api";
import { type NextPage } from "next";
import { CommentList } from "../../../components/comments/CommentList";
import { CreateComment } from "../../../components/comments/CreateComment";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const SinglePostPage: NextPage = () => {
  const router = useRouter();
  const postId = router.query.postId as string;

  const { data, isLoading, isError } = api.post.getOnePost.useQuery({
    postId,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="w-full text-white">
      <Link href={`/topic/${data?.topicId as string}`}>
        <p className="px-8 py-2 text-right text-xl italic text-accent">
          back to previous topic
        </p>
      </Link>
      <div className="hero h-[400px]">
        <div className="hero-content flex-col lg:flex-row ">
          <div>
            <h1 className="text-5xl font-bold ">{data?.title}</h1>
            <p className="py-6 ">{data?.content}</p>
            <span className="font-thin italic">{` Posted ${dayjs(
              data?.createdAt
            ).fromNow()}`}</span>
            <CreateComment topicId={data?.topicId} />
          </div>
        </div>
      </div>
      <CommentList postId={postId} />
    </div>
  );
};

export default SinglePostPage;
