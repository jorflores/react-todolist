import React,{useState} from "react";
import "../components/Login.css";
import logo from "../img/bootstrap-logo.svg";
import { NavLink,useNavigate,useLocation } from "react-router-dom";
import axios from "axios"


function Register() {

  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const [email,setEmail] = useState("flores.jorgeluis@gmail.com")
  const [password,setPassword] = useState("1234")
  const [errors,setErrors] = useState(false)
  const [errMessage,setErrMessage] = useState("")

  const registerUser = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/addUser",{
      email: email,
      password: password
    })
    .then(response => {
      console.log(` Response: ${response}`)
      if (response.data.err){
        setErrors(true)
        setErrMessage(response.data.message)
      }
      else {
        console.log("navigate")
            navigate(from,{replace:true})
      }

    })
    .catch(error => {
      console.log(error)
    })

   // authCtx.login()
   // navigate(from,{replace:true})
  }

  return (
    <div className="login-body">
      <main className="form-signin w-50">
        <form>
          <img className="mb-4" src={logo} alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Register a new account</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-warning" type="submit" onClick={registerUser}>
            Register new account
          </button>

          <div>
            <NavLink to="/Login" className="nav_link">Back to Login</NavLink>
          </div>
          {errors? (<h4 className="errMsg">{errMessage}</h4>) : (<p></p>)

          }

          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </main>
    </div>
  );
}

export default Register;
