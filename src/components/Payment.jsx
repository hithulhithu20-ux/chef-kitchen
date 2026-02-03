// import React, { useContext, useState } from 'react'
// import { OrderContext } from '../context/OrderContext';
// import { X, CircleCheckBig, CreditCard, Wallet } from "lucide-react";


// export default function Payment() {

//     const { isCompleted, setIsCompleted, clearOrder, setShowPayment, paymentMethod,
//         setPaymentMethod, onOrder,setShowReceipt } = useContext(OrderContext)

//     return (
//         <div className="fixed inset-0 z-60 flex items-center justify-center">
//             <div className="absolute inset-0 bg-black/70"></div>

//             <div className="relative  rounded-2xl shadow-xl w-full max-w-[380px] mx-4">
//                 {isCompleted ? (

//                     <div className="flex flex-col items-center justify-center h-full text-center p-6">
//                         <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
//                         <h2 className="text-2xl font-bold mb-2">Order Completed</h2>
//                         <p className="text-white mb-6">
//                             Your order has been placed successfully
//                         </p>

//                         <button
//                             onClick={() => {
//                                 setIsCompleted(false);
//                                 setShowPayment(false);
//                                 setShowReceipt(false);
//                                 setPaymentMethod("");
//                                 clearOrder();        // ✅ reset cart
//                             }}
//                             className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
//                         >
//                             Close
//                         </button>

//                     </div>
//                 ) : (
//                     <>
//                         <div className="bg-[#1F1D2B] text-white w-full lg:w-96 rounded-t-2xl lg:rounded-2xl p-6 relative">

//                             <button
//                                 onClick={() => setShowPayment(false)}
//                                 className="absolute right-4 top-4 text-gray-400 hover:text-white"
//                             >
//                                 ✕
//                             </button>

//                             <h2 className="text-xl mb-6">Payment Methods</h2>

//                             <div className="grid grid-cols-3 gap-3">
//                                 {[
//                                     { id: "card", label: "Card", icon: CreditCard },
//                                     { id: "paypal", label: "Paypal", icon: Wallet },
//                                     { id: "cash", label: "Cash", icon: Wallet },
//                                 ].map(({ id, label, icon: Icon }) => {
//                                     const active = paymentMethod === id;

//                                     return (
//                                         <label
//                                             key={id}
//                                             className={`relative cursor-pointer rounded-xl border p-4 flex flex-col items-center gap-2 transition
//                     ${active
//                                                     ? "border-orange-400 bg-[#2A2D3E]"
//                                                     : "border-gray-600 hover:border-gray-400"
//                                                 }`}
//                                         >
//                                             <input
//                                                 type="radio"
//                                                 name="payment"
//                                                 className="sr-only"
//                                                 checked={active}
//                                                 onChange={() => setPaymentMethod(id)}
//                                             />

//                                             {active && (
//                                                 <span className="absolute top-2 right-2 w-5 h-5 bg-orange-400 rounded-full text-xs flex items-center justify-center">
//                                                     ✓
//                                                 </span>
//                                             )}

//                                             <Icon className="w-6 h-6 text-gray-300" />
//                                             <span className="text-sm">{label}</span>
//                                         </label>
//                                     );
//                                 })}
//                             </div>

//                             <button
//                                 disabled={!paymentMethod}
//                                 className="mt-6 w-full bg-[#F99147] py-3 rounded-md font-semibold"
//                                 onClick={() => {
//                                     onOrder();           // ✅ save order
//                                     setIsCompleted(true); // ✅ show completed screen
//                                 }}
//                             >
//                                 Confirm Payment
//                             </button>

//                         </div>

//                     </>

//                 )}
//             </div>
//         </div>
//     )
// }
import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext';
import { CircleCheckBig, CreditCard, Wallet } from "lucide-react";

export default function Payment() {

  const {
    isCompleted,
    setIsCompleted,
    clearOrder,
    setShowPayment,
    paymentMethod,
    setPaymentMethod,
    customerName,
    setCustomerName,
    onOrder,
    setShowReceipt
  } = useContext(OrderContext)

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative rounded-2xl shadow-xl w-full max-w-[380px] mx-4">

        {isCompleted ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-6">
            <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Order Completed</h2>
            <p className="text-white mb-6">
              Your order has been placed successfully
            </p>

            <button
              onClick={() => {
                setIsCompleted(false);
                setShowPayment(false);
                setShowReceipt(false);
                setPaymentMethod("");
                setCustomerName("");
                clearOrder();
              }}
              className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="bg-[#1F1D2B] text-white w-full lg:w-96 rounded-t-2xl lg:rounded-2xl p-6 relative">

            <button
              onClick={() => setShowPayment(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl mb-6">Payment Methods</h2>

            {/* Payment Options */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "card", label: "Card", icon: CreditCard },
                { id: "paypal", label: "Paypal", icon: Wallet },
                { id: "cash", label: "Cash", icon: Wallet },
              ].map(({ id, label, icon: Icon }) => {
                const active = paymentMethod === id;

                return (
                  <label
                    key={id}
                    className={`relative cursor-pointer rounded-xl border p-4 flex flex-col items-center gap-2 transition
                      ${active
                        ? "border-orange-400 bg-[#2A2D3E]"
                        : "border-gray-600 hover:border-gray-400"
                      }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      className="sr-only"
                      checked={active}
                      onChange={() => setPaymentMethod(id)}
                    />

                    {active && (
                      <span className="absolute top-2 right-2 w-5 h-5 bg-orange-400 rounded-full text-xs flex items-center justify-center">
                        ✓
                      </span>
                    )}

                    <Icon className="w-6 h-6 text-gray-300" />
                    <span className="text-sm">{label}</span>
                  </label>
                );
              })}
            </div>

            {/* ✅ Customer Name Input (ONLY ADDITION) */}
            <div className="mt-5">
              <label className="block text-sm mb-1 text-gray-300">
                Customer Name
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter customer name"
                className="w-full px-3 py-2 rounded-md bg-[#2A2D3E] border border-gray-600
                           focus:outline-none focus:border-orange-400"
              />
            </div>

            <button
              disabled={!paymentMethod || !customerName}
              className="mt-6 w-full bg-[#F99147] py-3 rounded-md font-semibold disabled:opacity-50"
              onClick={() => {
                onOrder();
                setIsCompleted(true);
              }}
            >
              Confirm Payment
            </button>

          </div>
        )}
      </div>
    </div>
  )
}
