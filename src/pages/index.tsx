import { type NextPage } from "next";
import { TopicList } from "~/components/topics/TopicList";

const Home: NextPage = () => {
  return (
    <div className="p-4 text-2xl text-white">
      <div className="form-control mb-10 ">
        <input
          type="text"
          placeholder="Search"
          className="input-bordered input w-24 md:w-auto"
        />
      </div>
      <TopicList />
    </div>
  );
};

export default Home;
