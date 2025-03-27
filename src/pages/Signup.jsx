import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../utils/userSlice";

const Signup = () => {
  const [data, setData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    company: "",
    isAgency: "no",
  });
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(data));
    alert("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col items-center  h-screen bg-zinc-50">
      <div className="flex flex-col  w-full max-w-sm min-h-screen  bg-zinc-100  p-3 shadow-md">
        <h1 className="mb-5 text-zinc-800 text-3xl font-bold text-left">
          Create your <br /> PopX account
        </h1>

        <form onSubmit={handleSubmit} className="h-full">
          <div className="flex h-full justify-between flex-col">
            <div className="flex  gap-5 flex-col">
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  value={data.fullName}
                  onChange={handleChange}
                  required
                  className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent  border-[2px]  border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder="eg: john doe "
                />
                <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
                  Full Name<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={data.phoneNumber}
                  onChange={handleChange}
                  required
                  className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent  border-[2px]  border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder="eg: 9876543212"
                />
                <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
                  Phone Number<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent  border-[2px]  border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder="eg: john@gmail.com "
                />
                <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
                  Email Address<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                  className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent  border-[2px]  border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder="********** "
                />
                <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
                  Password<span className="text-red-500">*</span>
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  name="company"
                  value={data.company}
                  onChange={handleChange}
                  required
                  className="block px-3 py-2 w-full text-sm text-gray-900 bg-transparent  border-[2px]  border-zinc-400 rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder="eg: educase "
                />
                <label className="absolute px-1 text-sm text-purple-600 font-semibold duration-300 transform   -translate-y-4 bg-zinc-100 top-2 left-3   peer-placeholder-shown:translate-y-1/2 peer-placeholder-shown:-top-5 ">
                  Company Name
                </label>
              </div>

              <div>
                <p className="text-start text-zinc-600 font-semibold text-sm">
                  Are you an Agency? <span className="text-red-500">*</span>
                </p>
                <div className="flex space-x-4 mt-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="isAgency"
                      value="yes"
                      checked={data.isAgency === "yes"}
                      onChange={handleChange}
                      className="text-blue-500"
                    />
                    <p className="text-start text-zinc-600 font-semibold text-sm">
                      Yes
                    </p>
                  </label>

                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="isAgency"
                      value="no"
                      checked={data.isAgency === "no"}
                      onChange={handleChange}
                      className="text-blue-500"
                    />
                    <p className="text-start text-zinc-600 font-semibold text-sm">
                      No
                    </p>
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 font-semibold text-center text-white ease-linear transition bg-[#6c25ff] rounded-md hover:bg-purple-700"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
