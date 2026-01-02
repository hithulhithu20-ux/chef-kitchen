
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Order from "./Order";
import Sidebar from "./Sidebar";
import Receipt from "./Receipt";
import { ShoppingCart } from 'lucide-react';


const tabs = [
  { id: "all", label: "All" },
  { id: "today", label: "Today Special" },
  { id: "our", label: "Our Special" },
  { id: "south", label: "South Indian Special" },

];

const dishes = [
  {
    img: "/img/food1.png",
    name: "Healthy noodle with spinach Leaf",
    oldPrice: "3.29",
    newPrice: "3.29 ",
    priceValue: 3.29,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
  },
  {
    img: "/img/food2.png",
    name: "Hot spicy fried rice with omelette",
    oldPrice: "3.29",
    newPrice: "3.29",
    priceValue: 3.29,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
  },
  {
    img: "/img/food3.png",
    name: "Spicy noodle with special omelette",
    oldPrice: "3.29",
    newPrice: "3.29",
    priceValue: 3.29,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
  },
  {
    img: "/img/food4.png",
    name: "Healthy noodle with spinach leaf",
    price: "25.00",
    priceValue: 25.00,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special", "South Indian Special"],
  },
  {
    img: "/img/food5.png",
    name: "Hot spicy fried rice with omelet",
    price: "25.00",
    priceValue: 25.00,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special"],
  },
  {
    img: "/img/food6.png",
    name: "Spicy noodle with special omelet",
    price: "25.00",
    priceValue: 25.00,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "South Indian Special"],
  },
  {
    img: "/img/food1.png",
    name: "Spicy noodle with spinach Leaf",
    Price: "28.00 ",
    priceValue: 28.00,
    bowls: "20 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "South Indian Special"],
  },
  {
    img: "/img/food2.png",
    name: "Hot spicy fried rice with omelette",
    Price: "28.00",
    priceValue: 28.00,
    bowls: "18 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special", "South Indian Special"],
  },
  {
    img: "/img/food5.png",
    name: "Creamy fried rice with omelet",
    price: "30.00",
    priceValue: 30.00,
    bowls: "21 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special"],
  },
];
const SIZE_MULTIPLIER = {
  S: 1,
  M: 2,
  L: 3,
};

function Home() {
  const [items, setAddedItems] = useState([]);
  const [active, setActive] = useState("today");
  const [orderItems, setOrderItems] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [showType, setShowType] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [showReceipt, setShowReceipt] = useState(false);


  const clearOrder = () => {
    setOrderItems([]);   // clears the order list
  };



  const getCalculatedPrice = (dish) => {
    const size = selectedSizes[dish.name] || "S";
    const multiplier = SIZE_MULTIPLIER[size];
    return (dish.priceValue * multiplier).toFixed(2);
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });


  const filteredDishes = dishes.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesTab =
      active === "all" ||
      item.special.includes(
        tabs.find((tab) => tab.id === active)?.label
      );

    return matchesSearch && matchesTab;
  });




  const handleDelete = (name, size) => {
    setOrderItems((prev) =>
      prev.filter((item) => !(item.name === name && item.size === size))
    );


  };


  const handleAdd = (dish) => {
    const size = selectedSizes[dish.name] || "S";
    const multiplier = SIZE_MULTIPLIER[size];
    const finalPrice = dish.priceValue * multiplier;
    setOrderItems((prev) => {
      const existing = prev.find(
        (item) => item.name === dish.name && item.size === size
      );

      if (existing) {
        return prev.map(item =>
          item.name === dish.name && item.size === size
            ? {
              ...item,
              qty: item.qty + 1,
              total: (item.qty + 1) * item.unitPrice,
            }
            : item
        );
      }

      return [

        ...prev,
        {
          img: dish.img,
          name: dish.name,
          size: size,
          unitPrice: finalPrice,
          qty: 1,
          total: finalPrice,
        },
      ];
    });
    setAddedItems((prev) =>
      prev.includes(dish.name) ? prev : [...prev, dish.name]
    );
  };

  const handleSizeSelect = (dishName, size) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [dishName]: size,
    }));
  };

  const cartCount = orderItems.reduce(
    (total, item) => total + item.qty,
    0
  );


  const isSizeAdded = (dishName) => {
    const size = selectedSizes[dishName] || "S";
    return orderItems.some(
      (item) => item.name === dishName && item.size === size
    );
  };





  return (
    <div className="w-full h-screen bg-gray-800 text-white p pb-20 lg:pb-0 ">


      <div className="flex flex-col lg:flex-row bg-gray-800">
        <div >
          <Sidebar />
        </div>

        <div className={`px-6 transition-all duration-300 ${showOrder ? "w-full lg:w-[65%]" : "w-full"}`}>
          <div className="flex flex-1 flex-col gap-4 mt-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h1 className="text-4xl head">Chef Kitchen</h1>
              <p>{today}</p>
            </div>

            <div className="relative w-full sm:w-full lg:w-60">

              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search food..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 pl-10 pr-4 w-full rounded-xl bg-gray-800 border border-gray-600 outline-none"

              />
            </div>
          </div>

          <div className="flex gap-6 mt-4 px-2 border-b border-gray-600">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`relative pb-3 transition-all
        ${active === tab.id
                    ? "text-orange-400"
                    : "text-white"
                  }`}
              >
                {tab.label}

                {/* underline */}
                {active === tab.id && (
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-[3px] bg-orange-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>




          <div className=" overflow-y-auto h-145 pb-12 hide-scrollbar">
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl head">Choose Dishes</h1>
                <div className="flex justify-center gap-5">
                  <div className="relative">
                    {/* Selected button */}
                    <button
                      onClick={() => setShowType(!showType)}
                      className="flex items-center gap-1 bg-gray-900 px-4 py-2 rounded-lg"
                    >
                      {orderType}
                      <ChevronDown
                        className={`transition-transform ${showType ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Dropdown options */}
                    {showType && (
                      <div className="absolute right-0 mt-2 w-40 bg-gray-900 rounded-lg shadow-lg overflow-hidden z-10">
                        {["Dine In", "Take Away", "Delivery"].map((type) => (
                          <button
                            key={type}
                            onClick={() => {
                              setOrderType(type);
                              setShowType(false);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-amber-500 hover:text-white"
                          >
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

              <div className="grid grid-cols-2 md:grid-cols-2 py-10 lg:grid-cols-3 gap-12 pb-10">
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
                      <button onClick={() => { handleAdd(item) }}
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

        </div>
        {showOrder && (
          <div className="w-full lg:w-[35%]  ">
            <Order items={orderItems}
              orderType={orderType}
              onDelete={handleDelete}
              setOrderType={setOrderType}
              onRemove={() => setShowOrder(false)}
              onOrder={() => setShowReceipt(true)} />
            {showReceipt && (
              <Receipt
                items={orderItems}
                orderType={orderType}
                today={today}
                onClose={() => setShowReceipt(false)}
                onClearOrder={clearOrder}
              />

            )}



          </div>
        )}

      </div>
    </div>
  );
}

export default Home;