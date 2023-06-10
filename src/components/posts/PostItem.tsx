import type { Post } from "../../types";
import Link from "next/link";

type PostProps = {
  post: Post;
};

export function PostItem({ post }: PostProps) {
  const { id, title, content } = post;

  return (
    <div className="card m-4 w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p className="text-black">{content}</p>
        <div className="card-actions justify-end">
          <Link href={`post/${id}`}>
            <button className="btn-primary btn">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
