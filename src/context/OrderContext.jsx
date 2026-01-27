import { createContext, useState } from "react";
import { dishes, tabs, SIZE_MULTIPLIER } from "../constants";

export const OrderContext = createContext();

export function OrderProvider({ children }) {

    const [active, setActive] = useState("today");
    const [orderItems, setOrderItems] = useState([]);
    const [showOrder, setShowOrder] = useState(false);
    const [search, setSearch] = useState("");
    const [orderType, setOrderType] = useState("Dine In");
    const [showType, setShowType] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const clearOrder = () => {
        setOrderItems([]);
        setSelectedSizes([]);
        setShowOrder(false);
    };

    const onOrder = () => {
        setIsCompleted(false)
        setShowReceipt(true)
    }

    const onRemove = () => {
        setShowOrder(false)

    }
    const onClose = () => {
        setShowReceipt(false)
    }


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

    };

    const getCalculatedPrice = (dish) => {
        const size = selectedSizes[dish.name] || "S";
        const multiplier = SIZE_MULTIPLIER[size];
        return (dish.priceValue * multiplier).toFixed(2);
    };

    const filteredDishes = dishes.filter((item) => {
        const matchesSearch = item.name
            .toLowerCase()
            .includes(search.trim().toLowerCase());

        const matchesTab =
            active === "all" ||
            item.special.includes(
                tabs.find((tab) => tab.id === active)?.label
            );

        const matchesOrderType = item.available.includes(orderType);

        return matchesSearch && matchesTab && matchesOrderType;
    });

    const handleDelete = (name, size) => {
        setOrderItems((prev) =>
            prev
                .map((item) => {
                    if (item.name === name && item.size === size) {

                        const newQty = item.qty - 1;

                        if (newQty <= 0) return null;

                        return {
                            ...item,
                            qty: newQty,
                            total: newQty * item.unitPrice,
                        };
                    }
                    return item;
                })
                .filter(Boolean)
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
        <OrderContext.Provider
            value={{
                active,
                setActive,
                search,
                setSearch,
                orderType,
                setOrderType,
                selectedSizes,
                setSelectedSizes,
                showOrder,
                setShowOrder,
                showType,
                setShowType,
                showReceipt,
                setShowReceipt,
                isCompleted,
                setIsCompleted,

                orderItems,
                setOrderItems,
                cartCount,
                onOrder,
                onClose,
                onRemove,

                handleAdd,
                handleDelete,
                handleSizeSelect,
                clearOrder,

                getCalculatedPrice,
                isSizeAdded,
                filteredDishes,

            }}
        >
            {children}
        </OrderContext.Provider>

    )
}
