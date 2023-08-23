import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Login";

export default function Landing() {
  return (
    <>
      <div>Welcome to Broadside</div>
      <div>
        <Login />
      </div>
      <div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
