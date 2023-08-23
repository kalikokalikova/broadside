import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const API_URL = "http://localhost:3000/";

function Login() {
  const [user, setUser] = useContext(UserContext);
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log(userForm);
    e.preventDefault();
    // make a POST login call
    axios
      .post(API_URL + "login", { user: userForm })
      .then((resp) => {
        // save jwt in localstorage (for now)
        console.log("log in response: ", resp);
        localStorage.setItem("authorization", resp.headers.authorization);
        setUser(resp.data.data);
        navigate("/wall");
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="text"
          name="email"
          value={userForm["email"]}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={userForm["password"]}
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
}

export default Login;
