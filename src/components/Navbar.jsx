import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white shadow-lg z-10"
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <span className="text-2xl font-bold text-blue-600">Youth Club</span>
        <div className="space-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-500"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
