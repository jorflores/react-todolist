import React from "react";
import "../components/Login.css";
import logo from "../img/bootstrap-logo.svg";
import { NavLink } from "react-router-dom";

//"form-signin w-100 m-auto"

function Register() {
  return (
    <div className="login-body">
      <main className="form-signin w-50">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 class="h3 mb-3 fw-normal">Register a new account</h1>

          <div class="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <button class="w-100 btn btn-lg btn-warning" type="submit">
            Register new account
          </button>

          <div>
            <NavLink to="/Login" className="nav_link">Back to Login</NavLink>
          </div>



          <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Register;
