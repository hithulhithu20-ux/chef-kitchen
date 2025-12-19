
import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";
import Order from "./Order";
import Sidebar from "./Sidebar";
import { ShoppingCart } from 'lucide-react';

const tabs = [
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
  },
  {
    img: "/img/food2.png",
    name: "Hot spicy fried rice with omelette",
    oldPrice: "3.29",
    newPrice: "3.29",
    priceValue: 3.29,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
  },
  {
    img: "/img/food3.png",
    name: "Spicy noodle with special omelette",
    oldPrice: "3.29",
    newPrice: "3.29",
    priceValue: 3.29,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
  },
  {
    img: "/img/food4.png",
    name: "Healthy noodle with spinach leaf",
    price: "25.00",
    priceValue: 25.00,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
  },
  {
    img: "/img/food5.png",
    name: "Hot spicy fried rice with omelet",
    price: "25.00",
    priceValue: 25.00,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
  },
  {
    img: "/img/food6.png",
    name: "Spicy noodle with special omelet",
    price: "25.00",
    priceValue: 25.00,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
  },
];
const SIZE_MULTIPLIER = {
  S: 1,
  M: 2,
  L: 3,
};
 
function Home() {
  const [active, setActive] = useState("today");
  const [orderItems, setOrderItems] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [addedItems, setAddedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [orderType, setOrderType] = useState("Dine In");
  const [showType, setShowType] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});

  const getCalculatedPrice = (dish) => {
  const size = selectedSizes[dish.name] || "S"; // default S
  const multiplier = SIZE_MULTIPLIER[size];
  return (dish.priceValue * multiplier).toFixed(2);
};





  const filteredDishes = dishes.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );



  const handleDelete = (name) => {
    setOrderItems(prev =>
      prev.filter(item => item.name !== name)
    );
    setAddedItems((prev) =>
      prev.filter((itemName) => itemName !== name)
    );
  };

  const handleAdd = (dish) => {
    const size = selectedSizes[dish.name] || "S";
    const multiplier = SIZE_MULTIPLIER[size];
    const finalPrice = dish.priceValue * multiplier;
    setOrderItems((prev) => {
      const existing = prev.find(item => item.name === dish.name);

      if (existing) {
        return prev.map(item =>
          item.name === dish.name
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




  return (
    <div className="w-full h-screen bg-gray-800 text-white p">

      <div className="flex flex-col lg:flex-row bg-gray-800">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className={`px-6 transition-all duration-300 ${showOrder ? "w-full lg:w-[65%]" : "w-full"}`}>
          <div className="flex flex-1 flex-col gap-4 mt-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h1 className="text-4xl head">Chef Kitchen</h1>
              <p>Tuesday, 2 March 2024</p>
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

          <div className="flex text-white mt-4 space-x-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`pb-1 transition-all ${active === tab.id ? "text-orange-400" : "text-white cursor-pointer"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full mt-3">
            <div className="w-full border-b-2 border-gray-600"></div>

            <div className="absolute top-0 border-b-5 border-orange-400 rounded-full transition-all"
              style={{
                width: "90px",
                left:
                  active === "today"
                    ? "0px"
                    : active === "our"
                      ? "130px"
                      : "250px",
              }}
            ></div>
          </div>

          <div className=" overflow-y-auto h-145 hide-scrollbar">
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

                  <button onClick={() => setShowOrder(true)} className="bg-amber-500 border border-gray-700 px-6 py-1 rounded-lg text-white">
                    <ShoppingCart />
                  </button>
                </div>

              </div>

              {filteredDishes.length === 0 && (
                <p className="text-gray-400 text-center mt-10">
                  No food found
                </p>
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
                        {getCalculatedPrice(item)}

                      </span>
                    </div>
                  ) : (
                    <p className="text-sm mt-1">{getCalculatedPrice(item)}
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
                    <button onClick={() => { handleAdd(item); setShowOrder(true); }}
                      className={`justify-center text-lg rounded-xl px-10 py-1 transition-all ${addedItems.includes(item.name)
                        ? "bg-green-500 text-white"
                        : "bg-amber-500 text-white hover:bg-amber-600"}`}>
                      {addedItems.includes(item.name) ? "Added" : "Add"}
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
            <Order items={orderItems} onDelete={handleDelete} onRemove={() => setShowOrder(false)} />
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;