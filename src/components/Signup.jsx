// import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate , Link } from "react-router-dom";
import { signup, signupfal } from "../auth/authslice";

function Signup() {

    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[confirmpassword,setconfirmpassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {error} = useSelector((state) => state.auth);

    const submit = async (e) => {
        e.preventDefault();
        if(!email || !password || !confirmpassword){
            dispatch(signupfal("Please enter email and password"));
            return;
        }

        if(password !== confirmpassword){
            dispatch(signupfal("Passwords do not match"));
            return;
        }

        const saveusers = JSON.parse(localStorage.getItem("users")) || [];
        const user = saveusers.find((u) => u.email === email);
        if(user){
            dispatch(signupfal("Email already exists"));
            return;
        }

        const newuser = { id : Date.now(), email, password };
        const updateusers =[...saveusers, newuser];
        localStorage.setItem("users", JSON.stringify(updateusers));

        const userwithoutpassword ={id : newuser.id, email : newuser.email};
        dispatch(signup(userwithoutpassword));
        localStorage.setItem("user",JSON.stringify(userwithoutpassword));
        navigate("/countertodo");
    };
  return (
    <>

<div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

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

          
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="form-control"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
              placeholder="Confirm your password"
            />
          </div>

        
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

        
          <div className="text-center mt-3">
            <span>Already have an account? </span>
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
      
    </>
  )
}

export default Signup


