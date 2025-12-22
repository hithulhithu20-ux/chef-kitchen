import React from "react";
import { X } from "lucide-react";

function Receipt({ items, orderType, onClose, today }) {
  const subTotal = items.reduce((sum, item) => {
    const qty = item.qty || 1;
    const price = item.unitPrice || 0;
    return sum + qty * price;
  }, 0);

  const discountRate = 0.05; // 5%
  const discountAmount = subTotal * discountRate;
  const deliveryCharge = orderType === "Delivery" ? 10 : 0;
  const finalTotal = subTotal - discountAmount + deliveryCharge;



  return (
    <>


      <div className="fixed inset-0 z-50 flex items-center justify-center p">
        <div className="absolute inset-0 bg-black/70" onClick={onClose}></div>

        <div className="
  relative bg-gray-800 rounded-2xl shadow-xl flex flex-col
  w-full max-w-[380px]
  h-[90vh] max-h-[600px]
">


          <div className="p-6">
  <button
    onClick={onClose}
    className="absolute top-3 right-3 text-white"
  >
    <X />
  </button>

  <h1 className="text-2xl font-bold text-center mb-1">
    Chef Kitchen
  </h1>
  <p className="text-center text-sm text-white mb-2">
    {orderType} • Order #34562
  </p>
  <p className="text-center text-sm text-white mb-4">
    {today}
  </p>

  <div className="border-t border-dashed"></div>
</div>


          <div className="flex-1 overflow-y-auto px-6 space-y-4">
  
    {items.map((item, i) => {
      const qty = item.qty || 1;
      const price = item.unitPrice || 0;

      return (
        <div key={i} className="flex justify-between text-sm">
          <div>
            <p className="font-medium">
              {item.name}
              <span className="ml-2 text-xs text-white">
                ({item.size})
              </span>
            </p>
            <p className="text-white">
              {qty} × {price} AED
            </p>
          </div>
          <p className="font-medium">
            {(qty * price).toFixed(2)} AED
          </p>
        </div>
      );
    })
}
</div>

          <div className="p-6 border-t border-dashed">
  <div className="space-y-2 text-sm">
    <div className="flex justify-between">
      <span>Sub total</span>
      <span>{subTotal.toFixed(2)} AED</span>
    </div>

    <div className="flex justify-between text-white/90">
      <span>Discount (5%)</span>
      <span>-{discountAmount.toFixed(2)} AED</span>
    </div>

    {orderType === "Delivery" && (
      <div className="flex justify-between text-white/90">
        <span>Delivery charge</span>
        <span>+{deliveryCharge.toFixed(2)} AED</span>
      </div>
    )}

    <div className="flex justify-between font-bold text-lg mt-2">
      <span>Total</span>
      <span>{finalTotal.toFixed(2)} AED</span>
    </div>
  </div>

  <button className="w-full bg-amber-500 text-white py-2 rounded-lg font-bold mt-4">
    Confirm Order
  </button>

  <p className="text-center text-xs text-white mt-4">
    Thank you for your order
  </p>
</div>
        </div>
      </div>
    </>
  );
}

export default Receipt;


// import React from "react";
// import { X } from "lucide-react";

// function Receipt({ items, orderType, onClose, }) {
//   const subTotal = items.reduce(
//   (sum, item) => sum + item.qty * item.unitPrice,
//   0
// );


//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className="absolute inset-0 bg-black/70"
//         onClick={onClose}
//       ></div>

//       {/* Receipt Card */}
//       <div className="relative bg-white w-[380px] rounded-2xl p-6 shadow-xl">
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500"
//         >
//           <X />
//         </button>

//         <h1 className="text-2xl font-bold text-center mb-1">
//           Chef Kitchen
//         </h1>
//         <p className="text-center text-sm text-gray-500 mb-4">
//           {orderType} • Order #34562
//         </p>

//         <div className="border-t border-dashed my-3"></div>

//         {/* EMPTY ORDER */}
//         {items.length === 0 ? (
//           <p className="text-center text-gray-500 py-10">
//             No items in the order
//           </p>
//         ) : (
//           <>
//             {/* Items */}
//             <div className="space-y-3 max-h-60 overflow-y-auto">
//               {items.map((item, i) => (
//                 <div key={i} className="flex justify-between text-sm">
//                   <div>
//                     <p className="font-medium">
//                       {item.name}
//                       <span className="ml-2 text-xs text-gray-500">
//                         ({item.size})
//                       </span>
//                     </p>
//                     <p className="text-gray-400">
//                       {item.qty} × {item.unitPrice} AED
//                     </p>
//                   </div>
//                   <p>{(item.qty * item.unitPrice).toFixed(2)} AED</p>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-dashed my-4"></div>

//             {/* Total */}
//             <div className="flex justify-between font-bold text-lg">
//               <span>Total</span>
//               <span>{subTotal.toFixed(2)} AED</span>
//             </div>
//           </>
//         )}

//         <p className="text-center text-xs text-gray-400 mt-6">
//           Thank you for your order ❤️
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Receipt;
