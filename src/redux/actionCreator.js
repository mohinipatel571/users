import axios from "axios";
import { useDispatch } from "react-redux";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS,
} from "./actions";

export const signupSuccess = (payload) => {
  return { type: SIGNUP_SUCCESS, payload: payload };
};
export const signupFailure = (payload) => {
  return { type: SIGNUP_FAILURE, payload: payload };
};
export const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload: payload };
};
export const loginFailure = (payload) => {
  return { type: LOGIN_FAILURE, payload: payload };
};
export const userFailure = (payload) => {
  return { type: USER_FETCH_FAILURE, payload: payload };
};
export const userSuccess = (payload) => {
  return { type: USER_FETCH_SUCCESS, payload: payload };
};
export const logout = () => {
  return { type: LOGOUT };
};
export const fetchUser = ()=>{
  const USER_API = "https://reqres.in/api/users?page=1";
  return (dispatch)=>{
    axios
    .get(USER_API)
    .then((response) => {
      dispatch(userSuccess(response.data.data))
    })
    .catch((error) => 
      dispatch(userSuccess(error.message))
    )
  }
}