import type { Topic } from "../../types";
import Link from "next/link";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { id, name } = topic;

  return (
    <div className="flex flex-row justify-center p-4">
      <Link href={`/topic/${id}`}>
        <button className="btn text-black">{name}</button>{" "}
      </Link>
    </div>
  );
}
