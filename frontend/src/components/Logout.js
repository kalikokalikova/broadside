import axios from "axios";
import React from "react";
import { useContext } from "react";
import UserContext from "../contexts/userContext";

const API_URL = "http://localhost:3000/";

const Logout = () => {
  const token = localStorage.getItem("authorization");
  const [user, setUser] = useContext(UserContext);

  const handleLogout = (e) => {
    axios
      .delete(API_URL + "logout", { headers: { Authorization: token } })
      .then((resp) => {
        console.log("log out response: ", resp);
        setUser(null);
        // destroy token in localstorage?
      })
      .catch((resp) => {
        console.log("something went terribly wrong, err: ", resp);
      });
    console.log("log out clicked");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
