import React, { useEffect } from "react";
import Flyer from "../components/Flyer";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const API_URL = "http://localhost:3000/api/v1/flyers/";

export default function FlyerPage() {
  const { id } = useParams();
  const [flyer, setFlyer] = useState({});

  useEffect(() => {
    axios
      .get(API_URL + id)
      .then((resp) => {
        setFlyer(resp.data);
      })
      .catch((resp) => console.log(resp));
  }, []);

  return (
    <div>
      <Flyer data={flyer} />
    </div>
  );
}
