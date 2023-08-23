import "./App.css";
import Navbar from "./components/Navbar";
import Wall from "./pages/Wall";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Account from "./pages/Account";
import FlyerFormPage from "./pages/FlyerFormPage";
import FlyerPage from "./pages/FlyerPage";
import { UserProvider } from "./contexts/userContext";

const App = () => (
  <UserProvider>
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
  </UserProvider>
);

export default App;
