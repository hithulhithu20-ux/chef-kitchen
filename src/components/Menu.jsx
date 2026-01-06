import React from 'react'
import { ChevronDown } from "lucide-react";
import { ShoppingCart } from 'lucide-react';
import { OrderContext } from '../context/OrderContext';
import { useContext } from 'react';

export default function Menu() {
    const {
        filteredDishes,
        handleAdd,
        handleSizeSelect,
        isSizeAdded,
        getCalculatedPrice,
        cartCount,
        setShowOrder,
        orderType,
        showType,
        showOrder,
        selectedSizes,
        setShowType,
        setOrderType,
    } = useContext(OrderContext);

    return (
        <div>
            <div className=" overflow-y-auto h-145 pb-12 hide-scrollbar">
                <div className="flex sticky top-0 justify-between items-center mb-4 bg-gray-800 py-4">
                    <h1 className="text-xl head">Choose Dishes</h1>
                    <div className="flex justify-center gap-5">
                        <div className="relative">
                            <button
                                onClick={() => setShowType(!showType)}
                                className="flex items-center gap-1 bg-gray-900 px-4 py-2 rounded-lg">
                                {orderType}
                                <ChevronDown
                                    className={`transition-transform ${showType ? "rotate-180" : ""}`} />
                            </button>
                            {showType && (
                                <div className="absolute right-0 mt-2 w-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
                                    {["Dine In", "Take Away", "Delivery"].map((type) => (
                                        <button
                                            key={type}
                                            onClick={() => {
                                                setOrderType(type);
                                                setShowType(false);
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-amber-500 hover:text-white">
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button onClick={() => setShowOrder(true)} className="relative bg-amber-500 border border-gray-700 px-6 py-1 rounded-2xl text-white">
                            <ShoppingCart />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -left-2 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {filteredDishes.length === 0 && (
                    <div className="flex  justify-center items-center w-full h-150 ">
                        <p className="text-gray-400 text-center">
                            No food found
                        </p>
                    </div>
                )}
                <div
                    className={`grid grid-cols-2 md:grid-cols-2 py-10 gap-12 pb-10 p ${showOrder ? "lg:grid-cols-3" : "lg:grid-cols-5"}`} >
                    {filteredDishes.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-900 rounded-3xl p-4 flex flex-col items-center">
                            <img src={item.img} className="w-28 h-28 rounded-full object-cover -mt-12 mb-4" />

                            <p className="text-sm text-center font-semibold">
                                {item.name}
                            </p>

                            {item.oldPrice ? (
                                <div className="flex gap-2 text-xs mt-1">
                                    <span className="line-through text-red-400">
                                        {item.oldPrice}
                                    </span>
                                    <span className="text-green-400">
                                        {getCalculatedPrice(item)} AED

                                    </span>
                                </div>
                            ) : (
                                <p className="text-sm text-green-400 mt-1">{getCalculatedPrice(item)} AED
                                </p>
                            )}

                            <p className="text-xs text-gray-400 mt-1">
                                {item.bowls}
                            </p>
                            <div className="flex justify-center gap-2 mt-2">
                                {item.sizes.map((s, index) => {
                                    const isSelected = selectedSizes[item.name] === s;

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleSizeSelect(item.name, s)}
                                            className={`text-sm px-3 py-1 rounded-md border transition-all
                            ${isSelected
                                                    ? "bg-amber-500 text-white border-amber-500"
                                                    : "border-gray-400 text-white hover:bg-gray-700"}`}>
                                            {s}
                                        </button>
                                    );
                                })}
                            </div>
                            <div className="flex justify-center mt-4">
                                <button onClick={() => handleAdd(item)}
                                    className={`justify-center text-lg rounded-xl px-10 py-1 transition-all ${isSizeAdded(item.name)
                                        ? "bg-green-500 text-white"
                                        : "bg-amber-500 text-white hover:bg-amber-600"}`}>
                                    {isSizeAdded(item.name) ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}





