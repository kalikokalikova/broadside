import "./App.css";
import Navbar from "./components/Navbar";
import Wall from "./pages/Wall";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/wall" element={<Wall />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;