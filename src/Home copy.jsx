import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Home = () => {
  const [formToggler, setFormToggler] = useState(true);
  const handleForm = () => {
    setFormToggler(!formToggler);
  };
  return (
    <>
        <div className="text-center m-5">
          <button className="btn btn-primary" onClick={handleForm}>
            {formToggler ? "Signup" : "Login"}
          </button>
        </div>
        {formToggler ? <LoginForm /> : <RegistrationForm />}
    </>
  );
};
export default Home;
