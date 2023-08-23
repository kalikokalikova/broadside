import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/userContext";
import Logout from "./Logout";

const Navbar = () => {
  const [user] = useContext(UserContext);
  console.log("navbar user : ", user);

  return (
    <>
      <Link to="/wall">logo</Link>
      {user ? (
        <div>
          Welcome <Link to="/account">{user.name}</Link>
          <Logout />
        </div>
      ) : (
        <div>
          <Link to="/">sign in</Link>
          <Link to="/signup">sign up</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
