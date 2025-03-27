import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePic } from "../utils/userSlice";

const Account = () => {
   const user = useSelector((state) => state.user?.user);
   const dispatch = useDispatch();

   const [selectedImage, setSelectedImage] = useState(user?.profilePic || "");

   const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
         const reader = new FileReader();
         reader.onloadend = () => {
            setSelectedImage(reader.result);
            dispatch(updateProfilePic(reader.result));
         };
         reader.readAsDataURL(file);
      }
   };
   

  return (
    <div className="flex flex-col items-center h-screen bg-zinc-50">
      <div className="flex flex-col w-full max-w-sm min-h-screen bg-zinc-100 shadow-md">
        <h1 className="p-4 mb-4 text-xl font-semibold text-left bg-zinc-50  text-zinc-800 shadow-sm">
          Account Settings
        </h1>


        <div className="p-4 flex gap-5 flex-col border-b-[2px] border-dotted border-gray-300">
        <div className="flex items-start gap-4">
          <div className="relative">
            <label htmlFor="upload" className="cursor-pointer">
              <img
                src={selectedImage || "https://via.placeholder.com/100"}
                alt="User Avatar"
                className="object-cover w-[4.5rem] h-[4.5rem] border-2 border-gray-300 rounded-full"
              />

              <span className="absolute bottom-0 -right-1 p-2 text-white bg-blue-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="0 -960 960 960"
                  width="14px"
                  fill="#fff"
                >
                  <path d="M440-440ZM120-120q-33 0-56.5-23.5T40-200v-480q0-33 23.5-56.5T120-760h126l74-80h240v80H355l-73 80H120v480h640v-360h80v360q0 33-23.5 56.5T760-120H120Zm640-560v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM440-260q75 0 127.5-52.5T620-440q0-75-52.5-127.5T440-620q-75 0-127.5 52.5T260-440q0 75 52.5 127.5T440-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Z" />
                </svg>
              </span>
            </label>
            <input
              type="file"
              id="upload"
              className="hidden"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <div className="flex flex-col text-left">
            <h3 className=" font-semibold">{user?.fullName || "No Name"}</h3>
            <p className="text-sm font-semibold text-gray-500">{user?.email || "No Email"}</p>
          </div>
        </div>

      
          <p className="text-gray-600 font-semibold text-md">
            Lorem ipsum dolor sit amet adipisicing elit. Quod
            doloribus vitae vel minus neque impedit ad soluta
            quibusdam vitae vel min.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Account;
