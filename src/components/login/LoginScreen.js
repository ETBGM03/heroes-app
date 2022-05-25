import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const last_pathname = localStorage.getItem("last_pathname") || "/marvel";
  const handleLogin = () => {
    dispatch({
      type: types.login,
      payload: {
        name: "Esteban Gómez F",
      },
    });
    navigate(last_pathname, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
