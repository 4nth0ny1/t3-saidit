import { api } from "../../utils/api";
import { TopicItem } from "./TopicItem";
import { CreateTopic } from "./CreateTopic";
import { useState } from "react";

export function TopicList() {
  const {
    data: topics,
    isLoading,
    isError,
  } = api.topic.getAllTopics.useQuery();
  const [term, setTerm] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Something went wrong</div>;

  const filteredTopics = topics.filter((topic) => {
    return topic.name.toLowerCase().includes(term.toLowerCase());
  });

  return (
    <div>
      <h2 className="pb-4 text-center text-3xl">Topics</h2>
      <CreateTopic />
      <div className="form-control my-10 flex flex-row justify-center">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input w-24 w-[400px] text-black"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-row flex-wrap">
        {filteredTopics?.map((topic) => {
          return <TopicItem key={topic.id} topic={topic} />;
        })}
      </div>
    </div>
  );
}
