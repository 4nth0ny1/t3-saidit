import type { Topic } from "../../types";
import Link from "next/link";
import { AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { api } from "../../utils/api";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { id, name } = topic;
  const [hover, setHover] = useState(false);

  const ctx = api.useContext();

  const { mutate: deleteTopic } = api.topic.deleteTopic.useMutation({
    onSettled: async () => {
      await ctx.topic.getAllTopics.invalidate();
    },
  });

  return (
    <div
      className="flex flex-row justify-center p-4"
      onMouseEnter={() => setHover(!hover)}
      onMouseLeave={() => setHover(!hover)}
    >
      <Link href={`/topic/${id}`}>
        <button className="btn text-black">{name}</button>
      </Link>
      {hover && (
        <button onClick={() => deleteTopic(id)} className="pl-1 text-red-500">
          <AiFillDelete />
        </button>
      )}
    </div>
  );
}
