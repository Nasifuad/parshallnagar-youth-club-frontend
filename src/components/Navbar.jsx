/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { logo } from "../assets";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Youth Club" },
  { to: "/members", label: "Members" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
            />
            <h1 className="text-2xl font-bold text-gray-800 font-montserrat">
              Parshallnagar{" "}
              <span className="font-normal text-gray-600">Youth Club</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-base font-medium font-open-sans transition-all duration-300
                  ${
                    isActive
                      ? "text-teal-600"
                      : "text-gray-700 hover:text-teal-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <motion.span
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="block"
                    >
                      {link.label}
                    </motion.span>
                    {isActive && (
                      <motion.div
                        layoutId="navHighlight"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 transition-all font-open-sans text-sm"
            >
              Join Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-0 top-0 w-3/4 max-w-xs h-full bg-white shadow-lg p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-gray-800 font-montserrat">
                Menu
              </h2>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="space-y-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-base font-medium font-open-sans rounded-md transition-colors
                    ${
                      isActive
                        ? "text-teal-600 bg-teal-50"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-md shadow-sm hover:bg-teal-700 transition-all font-open-sans text-sm"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Subtle Bottom Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-500/50 to-teal-500/10 origin-left"
      />
    </motion.nav>
  );
}
