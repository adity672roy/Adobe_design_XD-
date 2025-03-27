import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-end h-screen bg-zinc-50">
      <div className="flex flex-col items-start justify-end w-full max-w-sm min-h-screen  bg-zinc-100  p-3 shadow-md">
      
          <h1 className="text-start text-2xl font-bold text-zinc-700 ">
            Welcome to PopX{" "}
          </h1>
          <p className="text-start text-lg leading-tight font-semibold text-zinc-400">
            Lorem ipsum dolor sit amet.
            <br /> consectetur adipisicing elit.
          </p>
        


        <div className="mt-6">
          <Link to="/signup">
            <button className="w-full px-6 py-3 text-white transition font-semibold bg-[#6c25ff] rounded-md shadow-md hover:bg-[#6f28c0] mb-3">
              Create Account
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-3 w-full text-zinc-700 transition font-semibold bg-[#cebafb] rounded-md shadow-md  hover:bg-[#a882d4]">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
