import React,{useContext} from "react";
import "../components/Login.css";
import logo from "../img/bootstrap-logo.svg";
import { NavLink,Link,useNavigate,useLocation } from "react-router-dom";
import AuthContext from '../store/auth-context'


function Login() {


  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"
 // authCtx.

const handleSubmitLogin = (e) => {
  e.preventDefault()
  authCtx.login()
  navigate(from,{replace:true})
}


  return (
    <div className="login-body">
      <main className="form-signin w-50">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please sign in -</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmitLogin}>
            Sign in
          </button>

          <div>
            <NavLink to="/Register" className="nav_link">
              Register new Account
            </NavLink>
          </div>

          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Login;
