
export const dishes = [
  {
    img: "/img/food1.png",
    name: "Healthy noodle with spinach Leaf",
    oldPrice: "3.29",
    priceValue: 3.29,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
    available: ["Dine In", "Delivery"],
  },
  {
    img: "/img/food2.png",
    name: "Hot spicy fried rice with omelette",
    oldPrice: "3.29",
    priceValue: 3.29,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
    available: ["Dine In", "Take Away",],
  },
  {
    img: "/img/food3.png",
    name: "Spicy noodle with special omelet",
    oldPrice: "3.29",
    priceValue: 3.29,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special"],
    available: ["Dine In", "Delivery"],
  },
  {
    img: "/img/food4.png",
    name: "Healthy noodle with spinach leaf",
    priceValue: 25.00,
    bowls: "22 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Today Special", "Our Special", "South Indian Special"],
    available: ["Dine In", "Take Away",],
  },
  {
    img: "/img/food5.png",
    name: "Hot spicy fried rice with omeletee",
    priceValue: 25.00,
    bowls: "13 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special"],
    available: ["Dine In", "Take Away", "Delivery"],
  },
  {
    img: "/img/food6.png",
    name: "Spicy noodle with special omelete",
    priceValue: 25.00,
    bowls: "17 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "South Indian Special"],
    available: ["Dine In", "Take Away",],
  },
  {
    img: "/img/food1.png",
    name: "Spicy noodle with  spinach Leaf",
    priceValue: 28.00,
    bowls: "20 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "South Indian Special"],
    available: ["Dine In", "Take Away", "Delivery"],
  },
  {
    img: "/img/food2.png",
    name: "Hot spicy fried rice with omelette",
    priceValue: 28.00,
    bowls: "18 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special", "South Indian Special"],
    available: ["Dine In", "Take Away",],
  },
  {
    img: "/img/food5.png",
    name: "Creamy hot fried rice with omelette",
    priceValue: 30.00,
    bowls: "21 Bowls available",
    sizes: ["S", "M", "L"],
    special: ["All", "Our Special"],
    available: ["Dine In", "Take Away", "Delivery"],
  },
];

export const tabs = [
  { id: "all", label: "All" },
  { id: "today", label: "Today Special" },
  { id: "our", label: "Our Special" },
  { id: "south", label: "South Indian Special" },

];

export const SIZE_MULTIPLIER = {
  S: 1,
  M: 2,
  L: 3,
};

export const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

export const mode = [
  { id: 1, name: "Dine In" },
  { id: 2, name: "Take Away" },
  { id: 3, name: "Delivery" },
]
  

 
