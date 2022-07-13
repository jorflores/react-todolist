import React,{useContext} from "react";
import { Link } from "react-router-dom";
import AuthContext from '../store/auth-context'

function NavBar() {

  const authCtx = useContext(AuthContext);

const Logout = () =>{
  authCtx.logout()
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item  ">
              <a className="nav-link " onClick={Logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
