
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
  

 
