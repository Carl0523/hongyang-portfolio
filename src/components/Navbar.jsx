import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* 1. The logo plus the website name */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-16 h-16 object-contain" />
          <p className="sm:flex text-white text-[18px] font-bold cursor-pointer hidden">
            Hong Yang &nbsp;|&nbsp; Portfolio
          </p>
        </Link>

        {/* 2. Navigation sections */}
        <ul className="list-none hidden sm:flex gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-primaryFont" : "text-white"
              } hover:text-primaryFont text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* 3. Menu section for mobile device ==> smaller devices */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* a. The image of menu or close */}
          <img
            src={isMenuOpen ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />

          {/* b. List of navigations in a graident container*/}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } p-6 bg-tertiary absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl border border-indigo-500`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-primaryFont" : "text-white"
                  } font-poppins font-medium text-[16px] hover:text-primaryFont`}
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
