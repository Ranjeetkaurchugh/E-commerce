import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import "../App.css";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-0 backdrop-blur-sm bg-blur-md bg-transparent border border-b-2 shadow-md px-9 py-7 h-9 flex text-center items-center justify-between">
      <div className="flex w-1/3 justify-center whitespace-nowrap sm:gap-6 gap-4 mx-9">
        <h1>eCommerce</h1>
        <Link to="/">products</Link>
        <Link
          to="/create"
          className="flex text-center items-center gap-2 whitespace-nowrap"
        >
          Add a product
          <IoMdAdd className=" rounded-lg font-bold  text-black" />
        </Link>
      </div>
      <Link to="/cart" className="text-center  flex gap-4 items-center">
        <h4>Add to Cart 
        </h4>
        <img
          className="w-12 h-12 rounded-full"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="img"
        />
      </Link>
    </div>
  );
};
