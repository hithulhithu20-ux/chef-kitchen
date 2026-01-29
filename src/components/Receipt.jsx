import React from "react";
import { X, CircleCheckBig } from "lucide-react";
import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";

function Receipt() {
  const {
    orderItems,
    orderType,
    onClose,
    today,
    clearOrder,
    isCompleted,
    setIsCompleted,

  } = useContext(OrderContext);

  const subTotal = orderItems.reduce((sum, item) => {
    const qty = item.qty || 1;
    const price = item.unitPrice || 0;
    return sum + qty * price;
  }, 0);

  const discountRate = 0.05;
  const discountAmount = subTotal * discountRate;
  const deliveryCharge = orderType === "Delivery" ? 10 : 0;
  const finalTotal = subTotal - discountAmount + deliveryCharge;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative rounded-2xl shadow-xl flex flex-col w-full max-w-[380px] h-[90vh] max-h-[600px]">

          {isCompleted ? (

            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <CircleCheckBig className="w-20 h-20 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Order Completed</h2>
              <p className="text-white mb-6">
                Your order has been placed successfully
              </p>

              <button
                onClick={() => {
                  onClose();
                  clearOrder();;
                }}
                className="bg-amber-500 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="relative bg-gray-800 rounded-2xl shadow-xl flex flex-col w-full max-w-[380px] h-[90vh] max-h-[600px]">
                <div className=" p-6">
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
                <div className="flex-1 overflow-y-auto hide-scrollbar px-6 space-y-4 mb-4">

                  {orderItems.map((item, i) => {
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

                  <button
                    onClick={() => setIsCompleted(true)}
                    className="w-full bg-amber-500 text-white py-2 rounded-lg font-bold mt-4">
                    Confirm Order
                  </button>

                  <p className="text-center text-xs text-white mt-4">
                    Thank you for your order
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Receipt;
