import type { NextPage } from "next";
import Wave from "../components/Wave";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="">Header</div>
      <div className="flex-grow">
        <h1 className="text-4xl">NextJS + TailwindCSS Starter </h1>
      </div>
      <div>
        <div className="relative">
          <Wave color={"#3E54AC"} animationDuration="8s" opacity={"0.8"} />
          <Wave
            color={"#3E54AC"}
            animationDuration="12s"
            opacity={"0.5"}
            animationDirection="reverse"
          />
          <Wave color={"#3E54AC"} animationDuration="16s" opacity={"0.2"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
