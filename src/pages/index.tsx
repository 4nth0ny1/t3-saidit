import { type NextPage } from "next";
import { TopicList } from "~/components/topics/TopicList";

const Home: NextPage = () => {
  return (
    <div className="p-4 text-2xl text-white">
      <TopicList />
    </div>
  );
};

export default Home;
