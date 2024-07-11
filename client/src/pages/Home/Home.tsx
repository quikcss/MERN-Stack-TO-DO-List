import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex px-20">
      <div className="w-1/2 flex justify-start items-center">
        <img src="/assets/home_logo.svg" alt="logo" width={435} />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-7">
        <h1 className="tracking-tight text-4xl font-semibold">
          Welcome to the TODO-List App
        </h1>
        <h3 className="tracking-tight text-lg">
          Seamlessly create, update, and manage your daily chores with ease!
        </h3>
        <Button
          onClick={() => {
            isLogin ? navigate("/todos") : navigate("/auth");
          }}
          className="tracking-tight text-lg hover:text-violet-500"
          variant="link"
        >
          Get Started Today &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Home;
