import React, { useContext } from "react";
import Order from "../components/Order";
import Sidebar from "../components/Sidebar";
import Receipt from "../components/Receipt";
import { today } from "../constants/index";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { OrderContext } from "../context/OrderContext";


function Home() {
   const {
    showOrder,
    setShowOrder,
    showReceipt,
    setShowReceipt,
    isCompleted,
    setIsCompleted,
    orderItems,
    handleDelete,
    clearOrder,
    orderType,
    setOrderType,

    
  } = useContext(OrderContext)
  
  return (
    <div className="w-full h-screen bg-gray-800 text-white p pb-20 lg:pb-0 ">


      <div className="flex flex-col lg:flex-row bg-gray-800">
        <div >
          <Sidebar />
        </div>

        <div className={`px-6 transition-all duration-300 ${showOrder ? "w-full lg:w-[65%]" : "w-full"}`}>
          <div>
            <Header/>
          </div>
          <div>
            <Menu />
          </div>

        </div>
        {showOrder && (
          <div className="w-full lg:w-[35%]  ">
            <Order/>
            {showReceipt && (
              <Receipt/>

            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Home;