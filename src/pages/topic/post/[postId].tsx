import { useRouter } from "next/router";
import { api } from "../../../utils/api";
import { type NextPage } from "next";
import { CommentList } from "../../../components/comments/CommentList";

const SinglePostPage: NextPage = () => {
  const router = useRouter();
  const postId = router.query.postId as string;

  const { data, isLoading, isError } = api.post.getOnePost.useQuery({
    postId,
  });

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Something went wrong</div>;

  return (
    <div className="w-full  text-white">
      <div className="h-[400px hero">
        <div className="hero-content flex-col lg:flex-row ">
          <div>
            <h1 className="text-5xl font-bold ">{data?.title}</h1>
            <p className="py-6 ">{data?.content}</p>
          </div>
        </div>
      </div>
      <CommentList postId={postId} />
    </div>
  );
};

export default SinglePostPage;
