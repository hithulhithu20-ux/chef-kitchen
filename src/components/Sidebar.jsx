


// import React from 'react'
// import logo from '../assets/logo.svg'
// import { GrHomeRounded } from "react-icons/gr";
// import { RiHeart3Line } from "react-icons/ri";
// import { IoNotificationsOutline,IoExitOutline,IoMailOutline } from "react-icons/io5";

// import { CiDiscount1 } from "react-icons/ci";

// function Sidebar() {

//   return (
//     <>
//     <div className='flex justify-center w-30 h-screen  bg-gray-900'>
//     <nav className='flex justify-between items-center flex-col w-20   text-white'>
//         <div className="flex flex-col items-center">
//             <div className="w-12 h-12 bg-amber-500/10 backdrop-blur rounded-xl flex items-center justify-center mt-8">
//               <img src={logo} alt="logo" className="w-6 h-6" />
//             </div>

//             <ul className='  flex flex-col mt-10 space-y-10 text-sm justify-between items-center'>
//               <button><GrHomeRounded className='text-[#F99147] text-2xl hover:text-white rounded-b-sm'/></button>
//               <button><CiDiscount1 className=' text-[#F99147] text-3xl hover:text-white '/></button>
//               <button><RiHeart3Line className=' text-[#F99147] text-3xl hover:text-white'/></button>
//               <button><IoMailOutline className=' text-[#F99147] text-3xl hover:text-white '/></button>
//               <button><IoNotificationsOutline className=' text-[#F99147] text-3xl hover:text-white'/></button>
//               <button><IoExitOutline className=' text-[#F99147] text-3xl hover:text-white mt-45 mb-12 rounded-xl' /></button>
//             </ul>
//           </div>

//     </nav>
//     </div>
//     </>
//   )
// }

// export default Sidebar

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
                          <div className="absolute flex items-center justify-center right-5 top-16 -translate-y-1/2 w-15 h-12 bg-[#F99147] rounded-2xl z-10" />

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



// import logo from "../assets/Logo (1).png"
// import { GoHome } from "react-icons/go";
// import { CiDiscount1, CiHeart } from "react-icons/ci";
// import { MdOutlineMail } from "react-icons/md";
// import { IoNotificationsOutline, IoLogOutOutline } from "react-icons/io5";
// import { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// function Sidebar() {
//   const [active, setActive] = useState(0);
//   const Navigate = useNavigate();

//   const icons = [
//     GoHome,
//     CiDiscount1,
//     CiHeart,
//     MdOutlineMail,
//     IoNotificationsOutline,
//   ];

//   return (
//     <>
//       <div className="hidden lg:fixed lg:flex flex-col w-25 items-center rounded-r-2xl
//                 bg-[#1F1D2B] py-8 top-0 left-0 h-screen
//                  overflow-hidden z-50">

//         <img src={logo} alt="logo" className="w-14 mb-10 relative z-10" />

//         <div className="flex flex-col  relative z-10">
//           {icons.map((Icon, index) => (
//             <button
//               key={index}
//               onClick={() => setActive(index)}
//               className="w-14 h-15 flex items-center justify-center  text-white rounded-xl cursor-pointer   mb-10"
//             >

//               {active === index && (
//                 <>
// <div className="absolute  -left-3 w-25 h-20 bg-[#2D303E] rounded-l-2xl ">
//   <div className="absolute top-0 -left-3 w-25 h-20 bg-[#2D303E] rounded-l-2xl ">
//     <div className="absolute  -left-20 w-10 h-20 bg-[#2D303E] rounded-l-xl" />

//     <div className="absolute right-1 -top-9.5 w-10 h-10  z-10">
//       <div className="relative left-4.5 top-2.5 w-7 h-7 bg-[#2D303E]">

// <div className="absolute top-0 right-0 w-7 h-7 bg-[#1F1D2B] rounded-bl-full rotate-270" />
//       </div>
//     </div>

// <div className="absolute right-1 top-17.5 w-10 h-10  z-10">
//   <div className="relative left-4.5 top-2.5 w-7 h-7 bg-[#2D303E]">

//     <div className="absolute top-0 right-0 w-7 h-7 bg-[#1F1D2B] rounded-bl-full rotate-180" />
//   </div>
// </div>

//   </div>
// </div>
//                 </>)}

//               <Icon
//                 className={` relative z-10 text-3xl transition-all duration-300
//                   ${active === index
//                     ? " text-[#fdfdfd] bg-[#F99147] rounded-lg w-13 h-13 p-2"
//                     : "text-white/50 hover:text-white"
//                   }
//                 `}
//               />
//             </button>
//           ))}
//         </div>

//         <IoLogOutOutline className="text-[#F99147] hover:text-white text-3xl cursor-pointer mt-auto relative z-10"
//                                     onClick={()=>Navigate("/")}/>
//       </div>

//       <div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-10 bg-[#1F1D2B] flex justify-around items-center border-t border-gray-700">
//         <GoHome className="text-[#F99147] text-3xl" />
//         <CiDiscount1 className="text-[#F99147] text-3xl" />
//         <CiHeart className="text-[#F99147] text-3xl" />
//         <MdOutlineMail className="text-[#F99147] text-3xl" />
//         <IoNotificationsOutline className="text-[#F99147] text-3xl" />
//       </div>
//     </>
//   );
// }

// export default Sidebar;
