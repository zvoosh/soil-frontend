// Header.tsx
import { useState } from "react";
import { NavLink } from "react-router-dom";
const navItems = [
  { to: "/home", label: "Home" },
  { to: "/info", label: "Soil Info" },
  { to: "/soil", label: "Soil Details" },
  { to: "/distributer", label: "Distributer Details" },
];

const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-row gap-5">
        {navItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `px-3 py-2 ${isActive ? "underline underline-offset-4" : ""}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to={"/"} className={() => `!px-3 !py-2`}>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-screen p-5 flex flex-row justify-between">
      <div className="flex flex-row gap-10">
        <h1 className="text-2xl">User</h1>
        <span className="inline w-[2px] h-[24px] bg-black"></span>
        <h2 className="text-xl">Dusan</h2>
      </div>
      <div className="block lg:hidden">
        <div
          className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1"
          onClick={handleMenuClick}
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </div>
      </div>
      <div
        className={`
            fixed flex flex-col items-start top-0 right-0 h-full bg-white
            z-40 shadow-md overflow-y-auto
            transition-all duration-300 ease-in-out
           ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            sm:w-40 lg:w-44 2xl:w-66 flex-shrink-0 gap-5 p-5
          `}
      >
        <div className="self-end">
          <div
            className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer space-y-1"
            onClick={handleMenuClick}
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </div>
        </div>
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `px-3 py-2 ${isActive ? "underline underline-offset-4" : ""}`
            }
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className="hidden lg:block">
        <Navbar />
      </div>
    </div>
  );
};

export { Header };
