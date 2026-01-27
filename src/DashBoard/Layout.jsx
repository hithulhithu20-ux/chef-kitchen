import React, { useContext, useState } from "react";
import MenuBar from "./MenuBar";
import DashHead from "./DashHead";
import { Outlet } from "react-router-dom";
import { DashBoardContext } from "../context/DashBoardContext";

export default function Layout() {
  const {open,setOpen} =useContext(DashBoardContext);
  

  return (
    <div className="w-full h-screen flex  overflow-hidden">

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-40
          w-64 
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0`}>
        <MenuBar close={() => setOpen(false)} />
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <DashHead />
        

        {/* Page Content */}
        <main className="flex-1 flex justify-center items-start overflow-y-auto  p-5 hide-scrollbar">
          <div className="w-full max-w-7xl ">
            <Outlet />
          </div>
        </main>

      </div>
    </div>
  );
}

