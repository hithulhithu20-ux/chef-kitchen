import { createContext, useState, useContext, useEffect } from "react";
import { DashBoardContext } from "./DashBoardContext";

export const OrderContext = createContext();

export function OrderProvider({ children }) {

    const { products, categories } = useContext(DashBoardContext); // 🔥 REAL PRODUCTS

    const [active, setActive] = useState("");
    const [orders, setOrders] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [showOrder, setShowOrder] = useState(false);
    const [search, setSearch] = useState("");
    const [orderType, setOrderType] = useState("Dine In");
    const [showType, setShowType] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [login, setLogin] = useState(false);
    const [customerName, setCustomerName] = useState("");





    useEffect(() => {
        const storedOrders = localStorage.getItem("orders");
        if (storedOrders) {
            setOrders(JSON.parse(storedOrders));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);


    useEffect(() => {
        if (!active && categories.length > 0) {
            setActive(categories[0].name);
        }
    }, [categories]);


    const clearOrder = () => {
        setOrderItems([]);
        setSelectedSizes([]);
        setShowOrder(false);
    };

    const onOrder = () => {
        if (orderItems.length === 0) return;

        const newOrder = {
            id: Date.now(),
            customerName,
            orderType,
            paymentMethod,
            createdAt: new Date().toLocaleString(),
            subTotal: orderItems.reduce((sum, i) => sum + i.total, 0),
            items: orderItems,
        };

        setOrders(prev => [...prev, newOrder]);
    };




    const onRemove = () => {
        setShowOrder(false)

    }
    const onClose = () => {
        setShowReceipt(false);
        setShowPayment(false);
        setIsCompleted(false);
        setPaymentMethod(""); // ✅ reset
        clearOrder();
    };





    const handleAdd = (product) => {
        const selectedSize =
            selectedSizes[product.name] || product.sizes[0].size;

        const sizeObj = product.sizes.find(
            (s) => s.size === selectedSize
        );

        const price = Number(sizeObj.price); // ✅ FORCE NUMBER


        setOrderItems((prev) => {
            const existing = prev.find(
                (item) =>
                    item.name === product.name &&
                    item.size === selectedSize
            );

            if (existing) {
                return prev.map((item) =>
                    item.name === product.name && item.size === selectedSize
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
                    img: product.image,
                    name: product.name,
                    size: selectedSize,
                    unitPrice: price,        // ✅ number
                    qty: 1,
                    total: price,
                    orderType,            // ✅ number
                },
            ];

        });
    };


    const getCalculatedPrice = (product) => {
        const selectedSize =
            selectedSizes[product.name] || product.sizes[0].size;

        const sizeObj = product.sizes.find(
            (s) => s.size === selectedSize
        );

        return sizeObj ? sizeObj.price : 0;
    };


    const filteredDishes = products.filter((product) => {
        const matchesSearch = product.name
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesOrderType =
            product.orderType?.includes(orderType);

        const matchesCategory =
            !active || product.category === active;

        return matchesSearch && matchesOrderType && matchesCategory;
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

    const isSizeAdded = (productName) => {
        const size =
            selectedSizes[productName] ||
            orderItems.find((i) => i.name === productName)?.size;

        return orderItems.some(
            (item) =>
                item.name === productName && item.size === size
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
                orders,
                showPayment, setShowPayment,
                paymentMethod,
                setPaymentMethod,
                login, setLogin,
                customerName, setCustomerName,

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
