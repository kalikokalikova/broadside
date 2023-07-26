import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Flyers from "../components/Flyers";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:3000/api/v1/flyers";

export default function Wall() {
  const [flyers, setFlyers] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((resp) => {
        setFlyers(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, [flyers.length]);

  return (
    <div>
      THE WALL
      <Link to="/flyer-form">
        <button>New Flyer</button>
      </Link>
      <Flyers flyers={flyers} />
    </div>
  );
}
