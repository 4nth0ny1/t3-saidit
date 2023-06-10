import { api } from "../../utils/api";
import { TopicItem } from "./TopicItem";

export function TopicList() {
  const {
    data: topics,
    isLoading,
    isError,
  } = api.topic.getAllTopics.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;
  return (
    <div>
      {topics?.map((topic) => {
        return <TopicItem key={topic.id} topic={topic} />;
      })}
    </div>
  );
}
