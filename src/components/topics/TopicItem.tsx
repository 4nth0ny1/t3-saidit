import type { Topic } from "../../types";
import Link from "next/link";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { id, name } = topic;

  return (
    <Link href={`/topic/${id}`}>
      <div className="flex flex-row justify-center p-4">
        <button className="btn text-black">{name}</button>
      </div>
    </Link>
  );
}
