import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupFailure } from "../redux/actionCreator";
const RegistrationForm = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const { errorMsg, errorFound } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleName = (event) => {
    setMyName(event.target.value);
  };
  const handleMobile = (event) => {
    setMobile(event.target.value);
  };
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
    const userData = {
      name: myName,
      email: email,
      password: password,
      mobile: mobile,
    };
    var allUsers = JSON.parse(localStorage.getItem("users"));
    if (allUsers) {
      let user = allUsers.filter((user) => user.email === email);
      if (user && user.length) {
        dispatch(
          signupFailure(
            "This mail is already registered ,Please change this mail address."
          )
        );
      } else {
        allUsers.push(userData);
        localStorage.setItem("users", JSON.stringify(allUsers));
        setEmail("");
        setMyName("");
        setMobile("");
        setPassword("");
      }
    } else {
      localStorage.setItem("users", JSON.stringify([userData]));
      setEmail("");
      setMyName("");
      setMobile("");
      setPassword("");
    }
    // }
  };
  return (
    <>
      <div className="container">
        <form
          className="border rounded bg-warning shadow p-5 m-5"
          onSubmit={handleSubmit}
        >
          <div className="text-center h3 mb-4">Registration Form</div>
          <div className="my-3 py-2">
            <label htmlFor="user-name">Name</label>
            <input
              id="user-name"
              type="text"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter Name"
              value={myName}
              required
              onChange={handleName}
            />
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-mobile">Mobile</label>
            <input
              id="user-mobile"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="text"
              placeholder="Enter Mobile Number"
              value={mobile}
              pattern="[6-9]{1}[0-9]{9}"
              required
              title="Phone number with 6-9 and remaing 9 digit with 0-9"
              onChange={handleMobile}
            />
          </div>
          <div className="my-3 py-2">
            <label htmlFor="user-email">Email</label>
            <input
              id="user-email"
              type="email"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              placeholder="Enter  Email Address"
              value={email}
              required
              onChange={handleEmail}
            />
            {errorEmail ? (
              <span className="text-danger small">
                Please Enter Valid Email !
              </span>
            ) : null}
            {errorFound ? (
              <span className="text-danger small">{errorMsg}</span>
            ) : null}
          </div>
          <div className=" my-3 py-2">
            <label htmlFor="user-passsword">Password</label>
            <input
              id="user-passsword"
              className="w-100 p-2 h6 mt-2 border-0 border-bottom border-dark bg-warning"
              type="password"
              placeholder="Enter Password"
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
          </div>

          <div className="text-center mt-5">
            <button type="submit" className="btn btn-success fw-bold px-5">
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default RegistrationForm;
