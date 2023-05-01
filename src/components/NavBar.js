import React from "react";
import { UilSearch, UilAlignJustify, UilBell } from "@iconscout/react-unicons";

const NavBar = ({ search, setSearch }) => {
  return (
    <div className="flex items-center justify-evenly  gap-[1rem] bg-white p-[1rem]">
      <div className="flex items-center gap-[2rem]">
        <img className="w-20" src="/logo.webp" alt="logo" />
        <div className="border-solid border-2 border-[#A9A9A9] w-[12rem] rounded">
          <div className="flex items-center  px-[0.2rem] py-[0.2rem]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="outline-none w-[10rem]"
            />
            <UilSearch size="15" color="#6F6F6F" />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <UilAlignJustify />
        <h1>Categories</h1>
        <div className="flex gap-[1.5rem] items-center">
          <UilBell className="ml-[1.5rem]" />
          <img
            src="https://cdn.vox-cdn.com/thumbor/37vATMlbuUE_d8wh5b8j5kCfm2Q=/0x0:1914x1079/1200x800/filters:focal(804x387:1110x693)/cdn.vox-cdn.com/uploads/chorus_image/image/70972539/image_2022_06_13_170932655.0.png"
            className="rounded-full w-[2rem] h-[2rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
