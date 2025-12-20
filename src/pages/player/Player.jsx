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
  const [open, setOpen] = useState(false);

  const handleDarkModeChange = (event) => {
    setDarkMode(event.target.checked);
  };

  const handleNotificationsChange = (event) => {
    setNotifications(event.target.checked);
  };

  return (
    <section
      className="w-full min-h-screen transition-colors duration-300 pb-10 overflow-x-hidden"
      style={{ backgroundColor: DarkMode ? "#171717" : "#ffffff" }}
    >
      <div className="flex justify-center pt-20 px-4">
        <div className="w-full max-w-md bg-gradient-to-br from-orange-400 via-orange-500 to-orange-400 rounded-4xl">
          <div className="flex items-end justify-center relative -top-14">
            <div className="w-28 h-28 border-4 border-white rounded-full bg-white/60 backdrop-blur-md flex items-center justify-center text-[24px] font-bold text-orange-500">
              X
            </div>
          </div>

          <div className="name text-center text-white text-[26px] font-bold relative -top-10">
            XASANBAYEV BEXRUZ
          </div>

          <div className="grid grid-cols-3 gap-2 px-4 pb-4 relative -top-5">
            {[
              ["Age", "-"],
              ["Position", "Mid"],
              ["Nationality", "-"],
              ["Games", "0"],
              ["Won", "0"],
              ["Lost", "0"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-amber-300/30 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-white text-[13px] h-14"
              >
                <p>{label}</p>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto space-y-5 mt-4">
        <div className="px-4">
          <span
            className={`text-lg ${DarkMode ? "text-white" : "text-gray-800"}`}
          >
            Account
          </span>
          <div
            onClick={() => setOpen(true)}
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg cursor-pointer ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <LuUser size={18} />
            <span>Profile Info</span>
          </div>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <IoSettingsOutline size={18} />
            <span>Settings</span>
          </div>
        </div>
        <div className="px-4">
          <span
            className={`text-lg ${DarkMode ? "text-white" : "text-gray-800"}`}
          >
            Preferences
          </span>

          <div
            className={`mt-3 h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="flex gap-4 items-center">
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
            className={`mt-3 h-14 flex justify-between items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <div className="flex gap-4 items-center">
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
        <div className="px-4">
          <span
            className={`text-lg ${DarkMode ? "text-white" : "text-gray-800"}`}
          >
            More
          </span>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <FaRegComment size={18} />
            <span>Live Support</span>
          </div>

          <div
            className={`mt-3 h-11 flex gap-4 items-center border-2 border-orange-500 px-3 rounded-lg ${
              DarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            <BsQuestionCircle size={18} />
            <span>About</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 text-red-500 text-lg mt-8">
        <LuLogOut /> <span>Log Out</span>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-[90%] max-w-md rounded-2xl p-6 animate-scale ${
              DarkMode ? "bg-neutral-900 text-white" : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Profile Information</h2>

            <div className="space-y-2 text-sm">
              <p>
                <b>Username:</b> Xasanbayev Bexruz
              </p>
              <p>
                <b>Age:</b> -
              </p>
              <p>
                <b>Number:</b> +998
              </p>
              <p>
                <b>Extra number:</b> +998
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 w-full py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600"
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Player;
