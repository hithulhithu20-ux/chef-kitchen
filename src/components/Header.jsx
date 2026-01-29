import React from "react";
import { today,  } from "../constants/index";
import { Search } from "lucide-react";
import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";
import { DashBoardContext } from "../context/DashBoardContext";


export default function Header() {
  const {
    setSearch,
    search,
    active,
    setActive,
  } = useContext(OrderContext);

    const { categories } = useContext(DashBoardContext);

  return (
    <div>
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

       <div className="flex gap-6 mt-4 px-2 border-b border-gray-600 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActive(cat.name)}
            className={`relative pb-3 whitespace-nowrap ${
              active === cat.name
                ? "text-orange-400"
                : "text-white"
            }`}
          >
            {cat.name}

            {active === cat.name && (
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-6 h-[3px] bg-orange-400 rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
