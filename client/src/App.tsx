import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Authentication/Auth";
import Todo from "./pages/TODOS/Todo";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
