import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";

export default function Orders() {
  const { orders } = useContext(OrderContext);

  return (
    <div className="flex flex-col gap-4  min-h-screen lobster-two-bold">
      <h1 className="text-3xl font-bold  ">Orders</h1>

      {orders.length === 0 && (
        <p className="px-6 py-10 text-center text-gray-500">No orders placed yet</p>
      )}

      {orders.map(order => (
        <div
          key={order.id}
          className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-3 bg-gray-200 font-semibold flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>Customer:</span>
              <span className="font-bold text-gray-900">
                {order.customerName}
              </span>
            </div>

            <span className="text-sm">
              {order.createdAt}
            </span>
          </div>


          {order.items.map((item, i) => (
            <>
              <div
                key={i}
                className="hidden md:grid grid-cols-[60px_1.5fr_1fr_1fr_1fr_80px_1fr]
                              px-4 py-4 border-b text-center items-center">
                <img
                  src={item.img}
                  className="w-10 h-10 rounded-full mx-auto" />
                <span>{item.name}</span>
                <span>{item.size}</span>
                <span>{item.orderType}</span>
                <span className="capitalize">{order.paymentMethod}</span>
                <span>{item.qty}</span>
                <span>{item.total.toFixed(2)} AED</span>
              </div>

              {/* mobile view */}

              <div className="md:hidden flex gap-3 px-3 py-4 border-b">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full shrink-0"
                />

                <div className="flex flex-col flex-1 text-sm">
                  <span className="font-semibold">{item.name}</span>
                  <span className="text-gray-500">
                    Size: {item.size}
                  </span>

                  <div className="flex justify-between items-center mt-1">
                    <span className="px-2 py-0.5 rounded bg-gray-200 text-xs font-medium">
                      {item.orderType}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-xs font-semibold">
                      {order.paymentMethod}
                    </span>

                    <span>Qty: {item.qty}</span>
                  </div>

                  <span className="font-semibold mt-1">
                    {item.total.toFixed(2)} AED
                  </span>
                </div>
              </div>
            </>
          ))}

          <div className="px-6 py-3 font-semibold text-right">
            Total: {order.subTotal.toFixed(2)} AED
          </div>
        </div>

      ))}
    </div>
  );
}


// import React, { useContext } from "react";
// import { OrderContext } from "../context/OrderContext";

// export default function Orders() {
//   const { orders } = useContext(OrderContext);

//   return (
//     <div className="flex flex-col gap-4 min-h-screen lobster-two-bold">
//       <h1 className="text-3xl font-bold">Orders</h1>

//       {orders.length === 0 && (
//         <p className="py-10 text-center text-gray-500">
//           No orders placed yet
//         </p>
//       )}

// {orders.map((order) => (
//   <div
//     key={order.id}
//     className="bg-white rounded-lg shadow overflow-hidden"
//   >
//     {/* Order Header */}
//     <div className="px-4 py-3 bg-gray-200 font-semibold flex justify-between text-sm">
//       <span>Order #{order.orderNo}</span>
//       <span>{order.createdAt}</span>
//     </div>

//     {/* ===== DESKTOP HEADER ===== */}
//     <div className="hidden md:grid grid-cols-[60px_1.5fr_1fr_1fr_80px_1fr]
//                     px-4 py-3 bg-gray-300 text-sm font-semibold text-center">
//       <span>Image</span>
//       <span>Name</span>
//       <span>Size</span>
//       <span>Order Type</span>
//       <span>Qty</span>
//       <span>Total</span>
//     </div>

//           {/* ===== ORDER ITEMS ===== */}
//           {order.items.map((item, i) => (
//             <React.Fragment key={i}>
//               {/* ===== DESKTOP ROW ===== */}
//               <div className="hidden md:grid grid-cols-[60px_1.5fr_1fr_1fr_80px_1fr]
//                               px-4 py-4 border-b text-center items-center">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-10 h-10 rounded-full mx-auto"
//                 />
//                 <span>{item.name}</span>
//                 <span>{item.size}</span>
//                 <span className="font-medium">{item.orderType}</span>
//                 <span>{item.qty}</span>
//                 <span>{item.total.toFixed(2)} AED</span>
//               </div>

//               {/* ===== MOBILE CARD ===== */}
//               <div className="md:hidden flex gap-3 px-3 py-4 border-b">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full shrink-0"
//                 />

//                 <div className="flex flex-col flex-1 text-sm">
//                   <span className="font-semibold">{item.name}</span>
//                   <span className="text-gray-500">
//                     Size: {item.size}
//                   </span>

//                   <div className="flex justify-between items-center mt-1">
//                     <span className="px-2 py-0.5 rounded bg-gray-200 text-xs font-medium">
//                       {item.orderType}
//                     </span>
//                     <span>Qty: {item.qty}</span>
//                   </div>

//                   <span className="font-semibold mt-1">
//                     {item.total.toFixed(2)} AED
//                   </span>
//                 </div>
//               </div>
//             </React.Fragment>
//           ))}

//           {/* Order Total */}
//           <div className="px-4 py-3 font-semibold text-right bg-gray-50">
//             Total: {order.subTotal.toFixed(2)} AED
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
