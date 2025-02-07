import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">Job Search</Link>
      <div>
        <Link to="/jobs" className="px-3">Jobs</Link>
        <Link to="/companies" className="px-3">Companies</Link>
        {user ? (
          <>
            <Link to="/profile" className="px-3">{user.name}</Link>
            <button onClick={logout} className="px-3 bg-red-500 rounded">Logout</button>
          </>
        ) : (
          <Link to="/login" className="px-3">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
