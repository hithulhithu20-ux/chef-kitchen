// import React from "react";
// import { Trash } from "lucide-react";

// function Order() {
//   return (
//     <div className=" bg-gray-900 w-full p-6 text-white flex flex-col ">
//       <h2 className="text-2xl font-semibold mb-4">
//         Orders #34562
//       </h2>
// <div className="flex flex-wrap gap-3 mb-4">
//   <button className="bg-[#EA7C69] px-4 py-2 rounded-lg">
//     Dine In
//   </button>
//   <button className="text-amber-500 px-4 py-2 rounded-lg border border-amber-500">
//     Take away
//   </button>
//   <button className="text-amber-500 px-4 py-2 rounded-lg border border-amber-500">
//     Delivery
//   </button>
// </div>
//       <div className="flex justify-between font-bold mb-2">
//         <p>Item</p>
//         <div className="flex gap-8">
//           <p>Qty</p>
//           <p>Price</p>
//         </div>
//       </div>

//       <div className="border-b border-gray-700 mb-4"></div>
//       {[
//         { img: "/img/order1.png", name: "Spicy seasoned sea...", price: "$ 2.29", qty: 2 },
//         { img: "/img/order2.png", name: "Salted pasta with mu...", price: "$ 2.69", qty: 1 },
//         { img: "/img/order3.png", name: "Spicy instant noodle...", price: "$ 3.49", qty: 3 },
//         { img: "/img/order4.png", name: "Healthy noodle with...", price: "$ 3.29", qty: 1 },
//       ].map((item, i) => (
//         <div key={i} className="mb-4">

//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <img src={item.img}  className="w-12 h-12 rounded-full" />
//               <div>
//                 <p className="font-semibold">{item.name}</p>
//                 <p className="text-gray-400 text-sm">{item.price}</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-6">
//               <span className="bg-gray-700 px-3 py-1 rounded-lg">
//                 {item.qty}
//               </span>
//               <p>25.00</p>
//             </div>
//           </div>
//           <div className="flex gap-3 mt-4">
//             <input type="text"  placeholder="Order Note..." className="flex-1 bg-gray-800 px-3 py-4 rounded-lg text-sm outline-none"/>
//             <button className="border border-amber-600 p-2 rounded-lg">
//               <Trash className="text-amber-500 w-5 h-5" />
//             </button>
//           </div>

//         </div>
//       ))}

//       <div className="border-t border-gray-700 pt-4 mt-auto">
//         <div className="flex justify-between text-gray-400 mb-5">
//           <p>Discount</p>
//           <p>5%</p>
//         </div>

//         <div className="flex justify-between mb-4">
//           <p className="text-gray-300">Sub total</p>
//           <p className="font-semibold">25.00 AED</p>
//         </div>

//         <button className="w-full bg-orange-500 py-3 rounded-xl text-lg font-semibold">
//           Order now
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Order;


import React from "react";
import { Trash } from "lucide-react";
import { Minimize2 } from 'lucide-react';

const mode = [
  { id: 1, name: "Dine In" },
  { id: 2, name: "Take Away" },
  { id: 3, name: "Delivery" },
]

function Order({ items, orderType, setOrderType, onDelete, onRemove, onOrder, }) {

  const subTotal = items.reduce((sum, item) => {
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

      <div className="grid grid-cols-[1fr_52px_90px] sm:grid-cols-[1fr_70px_120px] 
                font-bold mb-2 mt-3 pr-2">
  <p>Item</p>
  <p className="text-center">Qty</p>
  <p className="text-right">Price</p>
</div>



      <div className="border-b border-gray-700 mb-4"></div>

      <div className="flex-1 overflow-y-auto hide-scrollbar  ">

        {items.length === 0 && (
          <div className="flex  justify-center items-center w-full h-full">
            <p className="text-gray-400 text-center ">
              No items added
            </p>
          </div>
        )}

        {items.map((item, i) => (
          <div key={i} className="mb-4">
            <div className="grid grid-cols-[1fr_52px_90px] sm:grid-cols-[1fr_70px_120px] 
                items-start gap-3 sm:gap-4">

              {/* ITEM COLUMN */}
              <div className="flex items-start gap-3">
                <img src={item.img} className="w-12 h-12 rounded-full shrink-0" />

                <div className="flex flex-col max-w-40">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold truncate" title={item.name}>
                      {item.name}
                    </p>

                    <span className="text-xs bg-gray-700 px-2 py-1 rounded shrink-0">
                      {item.size}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">
                    {item.unitPrice.toFixed(2)} AED
                  </p>
                </div>
              </div>

              {/* QTY COLUMN (FIXED WIDTH) */}
              <div className="flex justify-center">
                <span className="bg-gray-700 min-w-10 sm:min-w-11 
                 text-center px-2 sm:px-3 py-1 rounded-lg">
  {item.qty}
</span>

              </div>

              {/* PRICE COLUMN (FIXED WIDTH) */}
              <div className="text-right font-medium tabular-nums">
                {item.total.toFixed(2)} AED
              </div>
            </div>


            <div className="flex gap-3 mt-4">
              <input
                type="text"
                placeholder="Order Note..."
                className="flex-1 bg-gray-800 px-3 py-3 rounded-lg text-sm outline-none" />
              <button
                onClick={() => onDelete(item.name, item.size)}
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
          disabled={items.length === 0}
          onClick={onOrder}
          className={`w-full py-3 rounded-xl text-lg font-semibold 
  ${items.length === 0
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-orange-500"}`}
        >
          Order now
        </button>

      </div>
    </div >
  );
}

export default Order;

