import { HomeLayout } from "../features/home/home-layout";
import { useAppSelector } from "../store";

const Home = () => {
  const { ...data } = useAppSelector((state) => state.auth.user);
  return (
    <div className="h-full w-full bg-primary justify-center flex py-8">
      <HomeLayout id={data.id} />
    </div>
  );
};

export default Home;
