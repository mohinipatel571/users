import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/actionCreator";
import Navbar from "./Navbar";
import UserTable from "./UserTable";
const User = () => {
  const USER_API = "https://reqres.in/api/users?page=1";
  const { users, loading,errorMsg,errorFound } = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [user, setUser] = useState([]);
  // const getUser = () => {
  //   axios
  //     .get(USER_API)
  //     .then((response) => {
  //       setUser(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  useEffect(() => {
    dispatch(fetchUser())
  }, []);
  return (
    <>
      {console.log(users)}
      <div className="my-5">
        <Navbar />
        {/* <div className="text-center">{JSON.stringify(user)}</div> */}
        {/* <UserTable user={user}/> */}
        
        {/* <div className="text-center">{JSON.stringify(user)}</div> */}
        {errorFound?<div>{errorMsg}</div>:null}
        {loading ? <div className="text-center my-5"><h1>Loading.........</h1></div> : <UserTable user={users} />}

     
      </div>
    </>
  );
};
export default User;
