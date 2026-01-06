import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { GrHomeRounded } from "react-icons/gr";
import { RiHeart3Line } from "react-icons/ri";
import { IoNotificationsOutline, IoExitOutline, IoMailOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const menu = [
    { id: "home", icon: <GrHomeRounded />, path: "/home" },
    { id: "discount", icon: <CiDiscount1 /> },
    { id: "fav", icon: <RiHeart3Line /> },
    { id: "mail", icon: <IoMailOutline /> },
    { id: "notify", icon: <IoNotificationsOutline /> },
  ];
  const btnClass = (id) =>
    `relative w-14 h-14 flex  items-center justify-center z-10
   transition-all duration-300 
   ${active === id
      ? "bg-[#F99147] text-white rounded-2xl "
      : "text-[#F99147] hover:bg-white/10 rounded-2xl"
    }`;

  return (
    <>
      <div className="fixed bottom-0 left-0 z-50 w-full h-20 bg-gray-900 flex items-center justify-center lg:static lg:w-25 lg:h-screen lg:flex-col lg:py-6">
        <nav className="flex items-center justify-around w-full text-white lg:flex-col lg:w-full lg:justify-between">
          <div className="flex flex-col items-center">
            <div className="hidden lg:flex w-12 h-12 bg-amber-500/10 backdrop-blur rounded-xl items-center justify-center mt-5">
              <img src={logo} alt="logo" className="w-6 h-6" />
            </div>
            <ul className="flex items-center gap-1 lg:flex-col lg:space-y-12 lg:gap-0 lg:mt-10">
              {menu.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActive(item.id);
                    navigate(item.path);
                  }}
                  className={btnClass(item.id)}>
                  {active === item.id && (
                    <div className="hidden lg:flex absolute  inset-0 -z-10  items-center">
                      <div className="absolute -left-3 w-22.5 h-18  bg-gray-800 rounded-l-2xl">
                        <div className='absolute -top-7 left-15.5  w-7 h-7 bg-gray-800'>
                          <div className="absolute top-0 right-0 w-7 h-7 bg-gray-900 rounded-bl-full rotate-270" />
                          <div className="absolute flex items-center justify-center right-5.5 top-16 -translate-y-1/2 w-14 h-14 bg-[#F99147] rounded-2xl z-10" />

                        </div>
                      </div>
                      <div className="absolute right-1  w-10 h-10  z-10">
                        <div className="relative left-9.5 top-14 w-8 h-7 bg-gray-800">

                          <div className="absolute top-0 left- w-7 h-7 bg-gray-900 rounded-bl-full rotate-180" />
                        </div>
                      </div>

                    </div>
                  )}

                  <span className="relative z-10">
                    {React.cloneElement(item.icon, { className: "text-2xl" })}
                  </span>
                </button>

              ))}
              <button onClick={() => navigate("/")} className="w-14 h-14 rounded-2xl flex items-center justify-center
                   text-[#F99147] hover:bg-white/10">
                <IoExitOutline className="text-2xl" />
              </button>
            </ul>
            <div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
