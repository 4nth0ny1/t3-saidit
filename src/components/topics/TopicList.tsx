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
      <h2 className="pb-4 text-center text-3xl">Topics</h2>
      <div className="flex flex-row flex-wrap">
        {topics?.map((topic) => {
          return <TopicItem key={topic.id} topic={topic} />;
        })}
      </div>
    </div>
  );
}
