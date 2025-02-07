import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import Companies from "../pages/Companies";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;
