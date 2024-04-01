import React, { useState,useContext } from "react";
import DropdownButton from "./DropdownButton";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router';
import logo from '../assets/logo.png'; // Adjust the path as necessary based on your project structure


import { LoginContext } from "../contexts/LoginContext";

import Button from "./Button";

const NavBar = () => {

  const { loginStatus } = useContext(LoginContext);

  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "#about" },
    { name: "DISEASE DETECTION", link: "/detect" },
    { name: "SHARE", link: "/share" },
    {name:"SELL" ,link:"/sell"},
    {name:"LEARN" ,link:"/learn"}
  ];

  let [open, setOpen] = useState(false);

  const navigate = useNavigate();

  function navigateLogin() {
      navigate("/login");
  };

  function navigateProfile() {
    navigate("/profile");
  }


  return (
    <>
    <div className="shadow-md w-full top-0 sticky bg-gradient-to-l from-teal-100 via-violet-100 to-lime-200 ">
      <div className="md:flex items-center justify-between bg-opacity-75 py-4 md:px-10 px-7 select-none">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
      text-gray-800"
        >
          {/*  <span className="text-3xl text-green-800 mr-1 pt-2">
            <ion-icon name="leaf-sharp"></ion-icon>
          </span>  */}

          <span className="text-3xl text-green-800 mr-1 pt-2">
              <img src={logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
            </span>


          AgriAI
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-white" : "top-[-490px]"
          } overflow-y-auto`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="block py-2 pl-3 pr-4 text-gray-700 rounded border-0 hover:text-green-400 md:p-0 md:mx-2 font-bold"
            >
              <a
                href={link.link}
                className="block py-2 pl-3 pr-4 text-gray-700 rounded border-0 hover:text-cyan-400 md:p-0 md:mx-2 font-sans"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-8 text-xl md:my-0 my-7">
            {
              !loginStatus ? (
                <Button func={navigateLogin}>Login</Button>
              ) :
              (
                <DropdownButton />
              )
            }
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default NavBar;
