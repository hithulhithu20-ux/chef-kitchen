import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { GrHomeRounded } from "react-icons/gr";
import { RiHeart3Line } from "react-icons/ri";
import { IoNotificationsOutline,IoExitOutline,IoMailOutline } from "react-icons/io5";

import { CiDiscount1 } from "react-icons/ci";

function Sidebar() {
  const navigate = useNavigate();
  const [active, setActive] = useState("home");

  const menu = [
  { id: "home", icon: <GrHomeRounded /> },
  { id: "discount", icon: <CiDiscount1 /> },
  { id: "fav", icon: <RiHeart3Line /> },
  { id: "mail", icon: <IoMailOutline /> },
  { id: "notify", icon: <IoNotificationsOutline /> },
];
const btnClass = (id) =>
  `w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300
   ${
     active === id
       ? "bg-orange-500 text-white shadow-lg  scale-100"
       : "text-[#F99147] hover:bg-white/10 hover:scale-130"
   }`;


  return (
    <>
    <div className='flex justify-center w-30 h-screen   bg-gray-900'>
    <nav className='flex justify-between items-center flex-col w-20   text-white'>
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-amber-500/10 backdrop-blur rounded-xl flex items-center justify-center mt-8">
              <img src={logo} alt="logo" className="w-6 h-6" />
            </div>

            <ul className="flex flex-col items-center space-y-12 mt-10">
  {menu.map((item) => (
    <button
      key={item.id}
      onClick={() => setActive(item.id)}
      className={btnClass(item.id)}
    >
      {React.cloneElement(item.icon, { className: "text-2xl" })}
    </button>
  ))}
  <button onClick={()=>navigate("/")} className="w-14 h-14 rounded-2xl flex items-center justify-center
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
