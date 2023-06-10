import type { Topic } from "../../types";
import Link from "next/link";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { id, name } = topic;

  return (
    <div className="card m-4 w-96 bg-base-100 shadow-xl">
      <Link href={`/topic/${id}`}>
        <div className="card-body">
          <button className="btn text-black">{name}</button>
        </div>
      </Link>
    </div>
  );
}
