import { useRouter } from "next/router";
import { api } from "../../utils/api";
import { type NextPage } from "next";

const SingleTopicPage: NextPage = () => {
  const router = useRouter();
  const topicId = router.query.topicId as string;

  const { data, isLoading, isError } = api.topic.getOneTopic.useQuery({
    topicId,
  });

  return <div>Single Page {data?.name}</div>;
};

export default SingleTopicPage;
