import { NavLink } from "react-router-dom";
import { logo } from "../assets";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  return (
    <div className="flex items-center justify-between container">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-16 rounded-full" />
        <h1 className="text-xl">Parshallnagar Youth club</h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
