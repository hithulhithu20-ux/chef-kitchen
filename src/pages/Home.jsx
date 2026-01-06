import React, { useContext } from "react";
import Order from "../components/Order";
import Sidebar from "../components/Sidebar";
import Receipt from "../components/Receipt";
import { today } from "../constants/index";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { OrderContext } from "../context/OrderContext";


function Home() {
   const {
    showOrder,
    setShowOrder,
    showReceipt,
    setShowReceipt,
    isCompleted,
    setIsCompleted,
    orderItems,
    handleDelete,
    clearOrder,
    orderType,
    setOrderType,

    
  } = useContext(OrderContext)
  // const [items, setAddedItems] = useState([]);
  // const [active, setActive] = useState("today");
  // const [orderItems, setOrderItems] = useState([]);
  // const [showOrder, setShowOrder] = useState(false);
  // const [search, setSearch] = useState("");
  // const [orderType, setOrderType] = useState("Dine In");
  // const [showType, setShowType] = useState(false);
  // const [selectedSizes, setSelectedSizes] = useState({});
  // const [showReceipt, setShowReceipt] = useState(false);
  // const [isCompleted, setIsCompleted] = useState(false);

  // const clearOrder = () => {
  //   setOrderItems([]);
  //   setSelectedSizes([]);
  // };

  // const handleAdd = (dish) => {
  //   const size = selectedSizes[dish.name] || "S";
  //   const multiplier = SIZE_MULTIPLIER[size];
  //   const finalPrice = dish.priceValue * multiplier;
  //   setOrderItems((prev) => {
  //     const existing = prev.find(
  //       (item) => item.name === dish.name && item.size === size
  //     );

  //     if (existing) {
  //       return prev.map(item =>
  //         item.name === dish.name && item.size === size
  //           ? {
  //             ...item,
  //             qty: item.qty + 1,
  //             total: (item.qty + 1) * item.unitPrice,
  //           }
  //           : item
  //       );
  //     }

  //     return [
  //       ...prev,
  //       {
  //         img: dish.img,
  //         name: dish.name,
  //         size: size,
  //         unitPrice: finalPrice,
  //         qty: 1,
  //         total: finalPrice,
  //       },
  //     ];
  //   });
  //   setAddedItems((prev) =>
  //     prev.includes(dish.name) ? prev : [...prev, dish.name]
  //   );
  // };

  // const getCalculatedPrice = (dish) => {
  //   const size = selectedSizes[dish.name] || "S";
  //   const multiplier = SIZE_MULTIPLIER[size];
  //   return (dish.priceValue * multiplier).toFixed(2);
  // };

  // const filteredDishes = dishes.filter((item) => {
  //   const matchesSearch = item.name
  //     .toLowerCase()
  //     .includes(search.trim().toLowerCase());

  //   const matchesTab =
  //   active === "all" || 
  //   item.special.includes(
  //     tabs.find((tab) => tab.id === active)?.label
  //   );

  // const matchesOrderType = item.available.includes(orderType);

  // return matchesSearch && matchesTab && matchesOrderType;
  // });

  // const handleDelete = (name, size) => {
  //   setOrderItems((prev) =>
  //     prev
  //       .map((item) => {
  //         if (item.name === name && item.size === size) {

  //           const newQty = item.qty - 1;

  //           if (newQty <= 0) return null;

  //           return {
  //             ...item,
  //             qty: newQty,
  //             total: newQty * item.unitPrice,
  //           };
  //         }
  //         return item;
  //       })
  //       .filter(Boolean) // removes null items
  //   );
  // };

  // const handleSizeSelect = (dishName, size) => {
  //   setSelectedSizes((prev) => ({
  //     ...prev,
  //     [dishName]: size,
  //   }));
  // };

  // const cartCount = orderItems.reduce(
  //   (total, item) => total + item.qty,
  //   0
  // );

  // const isSizeAdded = (dishName) => {
  //   const size = selectedSizes[dishName] || "S";
  //   return orderItems.some(
  //     (item) => item.name === dishName && item.size === size
  //   );
  // };
  return (
    <div className="w-full h-screen bg-gray-800 text-white p pb-20 lg:pb-0 ">


      <div className="flex flex-col lg:flex-row bg-gray-800">
        <div >
          <Sidebar />
        </div>

        <div className={`px-6 transition-all duration-300 ${showOrder ? "w-full lg:w-[65%]" : "w-full"}`}>
          <div>
            <Header/>
          </div>
          <div>
            <Menu />
          </div>

        </div>
        {showOrder && (
          <div className="w-full lg:w-[35%]  ">
            <Order/>
            {showReceipt && (
              <Receipt/>

            )}

          </div>
        )}

      </div>
    </div>
  );
}

export default Home;