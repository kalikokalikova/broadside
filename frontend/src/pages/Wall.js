import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Flyers from "../components/Flyers";

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
      Wall
      <Flyers flyers={flyers} />
    </div>
  );
}
