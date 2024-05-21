import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathrouter = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className=" border-b bg-white shadow-sm sticky z-50">
      <header className=" flex  justify-between items-center px-5 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/rdc-ui/logos/logo-brand.svg"
            alt="logo"
            className="h-5"
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`py-3 font-semibold cursor-pointer text-gray-400  border-b-[3px] border-b-transparent
              ${
                pathrouter("/") &&
                "font-semibold text-black  border-b-[3px] border-b-red-500 "
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={` text-gray-400 font-semibold cursor-pointer py-3 border-b-[3px] border-b-transparent 
              ${
                pathrouter("/offers") &&
                "font-semibold text-black cursor-pointer border-b-red-500"
              } `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={` text-gray-400 font-semibold cursor-pointer py-3 border-b-[3px] border-b-transparent ${
                pathrouter("/signin") &&
                "font-semibold text-black border-b-red-500"
              } `}
              onClick={() => navigate("/signin")}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
