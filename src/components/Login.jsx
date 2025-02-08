// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link} from "react-router-dom";
import { login, loginfal } from "../auth/authslice";

function Login() {

    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.auth);

    const submit = (e) => {
        e.preventDefault();
        if(!email || !password){
            dispatch(loginfal("Please enter email and password"));
            return;
        }

        const saveusers = JSON.parse(localStorage.getItem("users")) || [];
        const user = saveusers.find((u) => u.email === email && u.password === password);
        if(!user){
            dispatch(loginfal("Invalid email or password"));
            return;
        }
        
        const userwithoutpassword = {
            id : user.id,
            email : user.email,
        };

        dispatch(login(userwithoutpassword));
        localStorage.setItem("user" , JSON.stringify(userwithoutpassword));
        navigate("/countertodo");
    }
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>

       
        {error && <div className="alert alert-danger text-center">{error}</div>}

        <form onSubmit={submit}>
      
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>

       
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

          <div className="text-center mt-3">
            <span>Don’t have an account? </span>
            <Link to="/signup" className="text-decoration-none">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login
