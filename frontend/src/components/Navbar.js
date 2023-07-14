import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div>
        <Link to="/wall">logo</Link>
      </div>
      <div>
        Welcome <Link to="/account">user's name</Link>
      </div>
      <div>Sign out</div>
    </div>
  );
}
