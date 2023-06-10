import type { Topic } from "../../types";
import Link from "next/link";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { id, name, description } = topic;

  return (
    <div className="card m-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/topic/${id}`}>
            <button className="btn-primary btn">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
