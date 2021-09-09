import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginSuccess } from "../redux/actionCreator";
const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { errorMsg, errorFound } = useSelector((state) => state);
  const handleEmail = (event) => {
    setEmail(event.target.value);
    var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(emailRegex)) {
      setErrorEmail(false);
    } else {
      setErrorEmail(true);
    }
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    // var passwordRegex =
    //   /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    // if (password.match(passwordRegex)) {
    //   setErrorPassword(false);
    // } else {
    //   setErrorPassword(true);
    // }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // if (errorEmail === false && errorPassword === false) {
    var allUsers = JSON.parse(localStorage.getItem("users"));
    if (allUsers) {
      var result = allUsers.filter((value) => {
        return value.email === email && value.password === password;
      });
    }
    if (result && result.length) {
      const userData = result[0];
      dispatch(loginSuccess(userData));
      localStorage.setItem('loginUser',JSON.stringify(userData))
    } else {
      dispatch(loginFailure("User credential not valid !"));
    }
    // }else{
    //   alert("Please field valid details !")
    // }
  };
  return (
    <>
      <div className="container">
        <form
          className="border rounded bg-info shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="text-center h3 mb-4">Login Form</div>
          <div className="my-3 py-2">
            <label>Email</label>
            <input
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              onChange={handleEmail}
            />
            {errorEmail ? (
              <span className="text-danger small">
                Please Enter Valid Email !
              </span>
            ) : null}
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-password">Password</label>
            <input
              id="user-password"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="password"
              placeholder="Enter password"
              value={password}
              required
              onChange={handlePassword}
            />
            {errorPassword ? (
              <span className="text-danger small">
                Password must contain atleast 8-15 digits long, 1 uppercase
                letter, 1 lowercase and 1 numeric digit in it
              </span>
            ) : null}
            {errorFound? <span className="text-danger small">{errorMsg}</span>:null}
          </div>
          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success fw-bold px-5">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LoginForm;
