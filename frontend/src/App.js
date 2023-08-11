import "./App.css";
import Navbar from "./components/Navbar";
import Wall from "./pages/Wall";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import FlyerFormPage from "./pages/FlyerFormPage";
import FlyerPage from "./pages/FlyerPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // make axios call to find out if user is logged in
  // put in useEffect
  // {
  //   "id": 1,
  //   "email": "test@email.com",
  //   "name": "Testy McTesterson",
  //   "created_at": "2023-07-27T23:56:18.751Z"
  // }
  // if yes: handleLogin(response) setState isLoggedIn: true, user: user.data
  // else handleLogout() setState isLoggedIn: false, user: {}
  const API_URL = "http://localhost:3000/api/v1/";

  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + "current_user") // add JWT to header
      .then((resp) => {
        console.log(resp); // handleLogin(response) setState isLoggedIn: true, user: user.data
      })
      .catch((resp) => {
        console.log("error: " + resp);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/wall" element={<Wall />} />
            <Route path="/account" element={<Account />} />
            <Route path="/flyers/:id" element={<FlyerPage />} />
            <Route path="/flyer-form" element={<FlyerFormPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
