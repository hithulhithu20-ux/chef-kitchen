import React from "react";
import { Trash } from "lucide-react";
import { Minimize2 } from 'lucide-react';
import { mode } from "../constants/index";
import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";

function Order() {

  const {
    onOrder,
    onRemove,
    orderItems,
    orderType,
    setOrderType,
    handleDelete,
  } = useContext(OrderContext);

  const subTotal = orderItems.reduce((sum, item) => {
    const qty = item.qty || 1;
    const price = item.unitPrice || 0;
    return sum + qty * price;
  }, 0);
  const discountRate = 0.05; // 5%
  const discountAmount = subTotal * discountRate;
  const finalTotal = subTotal - discountAmount;

  return (
    <div className="bg-gray-900 w-full h-screen p-6 text-white flex flex-col lg:pb-0 pb-25">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold mb-4">Orders #34562</h2>
        <button onClick={onRemove} className="mb-4 text-3xl"><Minimize2 /></button>
      </div>
      <div className="flex  text-white mt-2 space-x-5 ">
        {mode.map((m) => (
          <button
            key={m.id}
            onClick={() => setOrderType(m.name)}
            className={`px-6 p-2 rounded-xl border  border-gray-600 cursor-pointer transition-all duration-200 ${orderType === m.name ? "text-white bg-orange-400" : "text-orange-400 "}`}>
            {m.name}
          </button>
        ))}
      </div>

      <div className="flex justify-between font-bold mb-2 mt-3 pr-2">
        <p>Item</p>
        <div className="flex gap-13">
          <p>Qty</p>
          <p>Price</p>
        </div>
      </div>

      <div className="border-b border-gray-700 mb-4"></div>

      <div className="flex-1 overflow-y-auto hide-scrollbar  ">
        {Array.isArray(orderItems) && orderItems.length === 0 && (
          <div className="flex justify-center items-center w-full h-full">
            <p className="text-gray-400 text-center">
              No items added
            </p>
          </div>
        )}
        {orderItems.map((item, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3 min-w-0">
                <img
                  src={item.img}
                  className="w-10 h-10 rounded-full shrink-0"
                />
                <div className="flex flex-col min-w-0 max-w-[140px] sm:max-w-[200px]">
                  <p
                    className="font-semibold truncate"
                    title={item.name}
                  >
                    {item.name}
                  </p>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>{item.unitPrice.toFixed(2)} AED</span>
                    <span className="text-xs bg-gray-700 px-2 py-0.5 rounded">
                      {item.size}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gray-700 min-w-9 text-center px-2 py-1 rounded-lg">
                  {item.qty}
                </span>

                <p className="text-right font-medium tabular-nums min-w-[72px]">
                  {item.total.toFixed(2)} AED
                </p>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <input
                type="text"
                placeholder="Order Note..."
                className="flex-1 bg-gray-800 px-3 py-3 rounded-lg text-sm outline-none" />
              <button
                onClick={() => handleDelete(item.name, item.size)}
                className="border border-amber-600 p-2 rounded-lg">
                <Trash className="text-amber-500 w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="justify-end border-t border-gray-700 pt-4 mt-auto ">
        <div className="flex justify-between text-white/90 mb-4">
          <span>Discount (5%)</span>
          <span>-{discountAmount.toFixed(2)} AED</span>
        </div>

        <div className="flex justify-between mb-4">
          <p className="text-gray-300">Sub total</p>
          <p className="font-semibold"> {finalTotal.toFixed(2)} AED</p>
        </div>
        <button
          disabled={Array.isArray(orderItems) && orderItems.length === 0}
          onClick={onOrder}
          className={`w-full py-3 rounded-xl text-lg font-semibold 
  ${orderItems.length === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-orange-500"}`}>
          Order now
        </button>
      </div>
    </div >
  );
}

export default Order;

