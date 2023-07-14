import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Flyers from "../components/Flyers";

const API_URL = "http://localhost:3000/api/v1/flyers";

function getApiData() {
  return axios.get(API_URL).then((response) => response.data);
}

export default function Wall() {
  const [flyers, setFlyers] = useState([]);

  useEffect(() => {
    let mounted = true;
    getApiData().then((flyers) => {
      if (mounted) {
        setFlyers(flyers);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      Wall
      <Flyers flyers={flyers} />
    </div>
  );
}
