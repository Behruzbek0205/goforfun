import { Switch } from "@mui/material";
import React, { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuLogOut, LuUser } from "react-icons/lu";
import { RiSettings3Line } from "react-icons/ri";

const Player = () => {
  const [DarkMode, setDarkMode] = useState(true);
  const [Notifications, setNotifications] = useState(false);

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <section
      className={`w-full min-h-screen transition-colors duration-300 pb-10 overflow-x-hidden`}
      style={{ backgroundColor: DarkMode ? "#171717" : "#ffffff" }}
    >
      <div className="all flex justify-center pt-20 px-4">
        <div className="information w-full max-w-md bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 rounded-4xl">
          <div className="top flex items-end justify-center gap-4 relative -top-14">
            <div className="roundedd w-28 h-28 border-4 border-white rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[24px] font-bold text-orange-500">
              X
            </div>
            {/* <div className="roundedd w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-[23px] text-white">
              <IoSettingsOutline />
            </div> */}
          </div>
          <div className="center text-center text-white text-[22px] sm:text-[30px] font-bold relative -top-10 px-2">
            <p>XASANBAYEV BEXRUZ</p>
          </div>
          <div className="bottom grid grid-cols-3 gap-2 justify-items-center relative -top-5 px-4 pb-4">
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Age</p>
              <span>-</span>
            </div>
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Position</p>
              <span>Mid</span>
            </div>
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Nationality</p>
              <span>-</span>
            </div>
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Games</p>
              <span>0</span>
            </div>
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Won</p>
              <span>0</span>
            </div>
            <div className="side w-full h-13 bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[12px] sm:text-[14px]">
              <p>Lost</p>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="main-container max-w-md mx-auto space-y-4 mt-4">
        <div className="account flex flex-col px-4">
          <span
            className={`text-[18px] ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Account
          </span>
          <div
            className={`input mt-3 w-full h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <LuUser size={18} />
            <span>Profile Info</span>
          </div>
          <div
            className={`input mt-3 w-full h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <IoSettingsOutline size={18} />
            <span>Settings</span>
          </div>
        </div>

        <div className="preferences flex flex-col px-4">
          <span
            className={`text-[18px] ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Preferences
          </span>
          <div
            className={`input mt-3 w-full h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="text flex gap-4 items-center">
              <RiSettings3Line size={20} />
              <span>Dark Mode</span>
            </div>
            <Switch
              checked={DarkMode}
              onChange={handleDarkModeChange}
              color="warning"
              size="small"
            />
          </div>
          <div
            className={`input mt-3 w-full h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="text flex gap-4 items-center">
              <IoIosNotificationsOutline size={24} />
              <span>Notifications</span>
            </div>
            <Switch
              checked={Notifications}
              onChange={handleNotificationsChange}
              color="warning"
              size="small"
            />
          </div>
        </div>

        <div className="more flex flex-col px-4">
          <span
            className={`text-[18px] ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            More
          </span>
          <div
            className={`input mt-3 w-full h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <FaRegComment size={18} />
            <span>Live Support</span>
          </div>
          <div
            className={`input mt-3 w-full h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <BsQuestionCircle size={18} />
            <span>About</span>
          </div>
        </div>
      </div>

      <div className="logOut flex items-center justify-center gap-4 text-[18px] text-[red] mt-8 ">
        <LuLogOut /> <span>Log Out</span>
      </div>
    </section>
  );
};

export default Player;
