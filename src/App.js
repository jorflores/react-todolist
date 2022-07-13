import { useContext } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import { useLocation, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import AuthContext from "./store/auth-context";
import RequireAuth from "./components/RequireAuth";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" exact element={<TodoApp />}></Route>
      </Route>

      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
