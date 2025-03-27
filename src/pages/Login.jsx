import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email) {
      dispatch(login(storedUser));
      alert("Login successful!");
      navigate("/account");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-50">
      <div className="flex flex-col w-full max-w-sm min-h-screen bg-zinc-100 p-3 shadow-md">
        <h1 className="text-start text-2xl font-bold text-zinc-700">
          Sign in to your
          <br /> PopX account
        </h1>
        <p className="mt-3 text-start text-lg leading-tight font-semibold text-zinc-400">
          Lorem ipsum dolor sit amet.
          <br /> consectetur adipisicing elit.
        </p>
        <form onSubmit={handleLogin} className="space-y-4 mt-5">
          <div className="relative">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block px-3 pb-2 pt-3 w-full text-sm text-gray-900 bg-transparent border-2 border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder="eg: john@gmail.com"
            />
            <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3  peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
              Email Address
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent border-2 border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder="*****"
            />
            <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
              {" "}
              Password
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-[#6c25ff] rounded-md hover:bg-[#6f28c0]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
