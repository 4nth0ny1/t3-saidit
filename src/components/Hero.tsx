import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { Post, Topic } from "../types";

dayjs.extend(relativeTime);

type HeroProps = {
  post: Post;
  topic: Topic;
};

export function Hero({ post, topic }: HeroProps) {
  return (
    <div className="hero h-[400px]">
      <div className="hero-content flex-col lg:flex-row ">
        <div>
          {post?.title && (
            <h2 className="text-5xl font-bold ">{post?.title}</h2>
          )}
          {topic?.name && (
            <h2 className="text-5xl font-bold ">{topic?.name}</h2>
          )}
          {post?.content && <p className="py-6 ">{post?.content}</p>}
          {topic?.description && <p className="py-6 ">{topic?.description}</p>}
          {post?.createdAt && (
            <span className="font-thin italic">{` Created ${dayjs(
              post?.createdAt
            ).fromNow()}`}</span>
          )}
          {topic?.createdAt && (
            <span className="font-thin italic">{` Created ${dayjs(
              topic?.createdAt
            ).fromNow()}`}</span>
          )}
        </div>
      </div>
    </div>
  );
}
