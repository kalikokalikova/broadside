import React, { useState } from "react";
import FlyerForm from "../components/FlyerForm";
import axios from "axios";

const API_URL = "http://localhost:3000/api/v1/flyers/";

function FlyerFormPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [loaded, setLoaded] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_URL, { flyer: form })
      .then((resp) => {
        console.log("do something");
      })
      .catch((resp) => console.log(resp));
  };

  return (
    <div>
      <FlyerForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        form={form}
      />
    </div>
  );
}

export default FlyerFormPage;
