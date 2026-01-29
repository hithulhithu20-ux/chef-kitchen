import React from "react";
import { Shapes, ShoppingCart, StretchHorizontal, LogOut, ArrowLeftFromLine } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function MenuBar({ close }) {
  return (
    <div className="relative flex w-60 h-screen bg-gray-300 text-black flex-col space-y-8 lobster-two-bold ">
      <button
        onClick={close}
        className="absolute top-7  right-4 md:hidden">

        <ArrowLeftFromLine />
      </button>
      <h2 className="flex justify-between items-center text-4xl lobster-two-bold px-3 py-6">Chef Kitchen </h2>
      <div className="flex w-full flex-col text-xl">

        <NavLink end={true} to='/admin'
        onClick={close} className={({ isActive }) => `flex h-12 w-full px-3 gap-2 items-center hover:bg-gray-400 cursor-pointer ${isActive && "bg-gray-400 border-r-4 border-primary"}`}>
          <Shapes />
          <p>Category</p>
        </NavLink>

        <NavLink to='/admin/products'
        onClick={close} className={({ isActive }) => `flex h-12 w-full px-3 gap-2 items-center hover:bg-gray-400 cursor-pointer ${isActive && "bg-gray-400 border-r-4 border-primary"}`}>
          <StretchHorizontal />
          <p>Products</p>
        </NavLink>

        <NavLink to='/admin/orders'
        onClick={close} className={({ isActive }) => `flex h-12 w-full px-3 gap-2 items-center hover:bg-gray-400 cursor-pointer ${isActive && "bg-gray-400 border-r-4 border-primary"}`}>
          <ShoppingCart />
          <p>Orders</p>
        </NavLink>

        <div className=" flex absolute bottom-5 px-4 gap-3 items-center">
          <LogOut /> Log out
        </div>
      </div>

    </div>
  );
}
