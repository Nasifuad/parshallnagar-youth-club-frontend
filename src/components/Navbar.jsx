import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-700";

  return (
    <nav className="bg-white shadow px-4 py-3 flex gap-4">
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>
      <NavLink to="/dashboard" className={linkClass}>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Navbar;
