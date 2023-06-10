import type { Topic } from "../../types";

type TopicProps = {
  topic: Topic;
};

export function TopicItem({ topic }: TopicProps) {
  const { name, description } = topic;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black">{name}</h2>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">View</button>
        </div>
      </div>
    </div>
  );
}
