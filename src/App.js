import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { loginSuccess } from "./redux/actionCreator";
import AuthRoute from "./Routes/AuthRoute";
import UnAuthRoute from "./Routes/UnAuthRoute";

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const loginUser = localStorage.getItem("loginUser");
    if (loginUser) {
      dispatch(loginSuccess(loginUser))
    }
  }, []);

  const { isLogin } = useSelector((state) => state);
  return <>{isLogin ? <AuthRoute /> : <UnAuthRoute />}</>;
}

export default App;