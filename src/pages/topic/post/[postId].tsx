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
    <div className="p-10 text-white">
      <h2>{data?.title}</h2>
      <p>{data?.content}</p>
      <div className="border-4-black w-full border-b"></div>
      <CommentList postId={postId} />
    </div>
  );
};

export default SinglePostPage;
