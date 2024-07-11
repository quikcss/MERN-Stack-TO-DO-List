import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-between items-center px-20 py-5 w-full fixed top-0 left-0">
      <Link to="/">
        <h1 className="tracking-tight text-2xl font-semibold">TODO-List</h1>
      </Link>
      <div className="flex flex-row items-center gap-7">
        {isLogin ? (
          <>
            <h3 className="tracking-tight text-lg font-semibold">
              Welcome{" "}
              <span className="uppercase text-violet-500">username</span>
            </h3>
            <Button className="tracking-tight text-[15px] bg-black text-white hover:bg-violet-500">
              Logout
            </Button>
          </>
        ) : (
          <Button
            onClick={() => navigate("/auth")}
            className="tracking-tight text-[15px] bg-black text-white hover:bg-violet-500"
          >
            Login
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
