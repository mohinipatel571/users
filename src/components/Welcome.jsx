import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actionCreator";
import Navbar from "./Navbar";

const Welcome = () => {
  const user = JSON.parse(localStorage.getItem("loginUser"));
  const { userData } = useSelector((state) => state);
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())    
  };
  return (
    <>
      <div className="text-center m-5">
        <Navbar />
        <h1 className="my-5">Welcome {userData.name}</h1>
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export default Welcome;
