import React, { useContext, useEffect, useState } from "react"
import { DashBoardContext } from "../context/DashBoardContext";

export default function AddProducts() {
    const { image, setImage, name, setName, category, setCategory,
        stock, setStock, sizes, setSizes, orderType, setOrderType,
        storecategories, setStoreCategories, onAdd, onClose, initialData, isEdit } = useContext(DashBoardContext);

    useEffect(() => {
        const stored = localStorage.getItem("categories")
        if (stored) {
            setStoreCategories(JSON.parse(stored))
        }
    }, [])

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);       
    };

    const availableSizes = ["S", "M", "L"]

    // Prefill when editing
    useEffect(() => {
        if (initialData) {
            setImage(initialData.image)
            setName(initialData.name)
            setCategory(initialData.category)
            setStock(initialData.stock)
            setSizes(initialData.sizes)
            setOrderType(initialData.orderType || [])
        }
    }, [isEdit, initialData])

    const toggleOrderType = (type) => {
        setOrderType(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        )
    }

    const hasSize = (size) => {
        return sizes.some(s => s.size === size);
    };

    const toggleSize = (size) => {
        if (hasSize(size)) {
            // remove size
            setSizes(prev => prev.filter(s => s.size !== size));
        } else {
            // add size with empty price
            setSizes(prev => [...prev, { size, price: "" }]);
        }
    };

    const updateSizePrice = (size, price) => {
        setSizes(prev =>
            prev.map(s =>
                s.size === size ? { ...s, price } : s
            )
        );
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (!file) return

        if (file.size > 1024 * 1024) {
            alert("Image too large (max 1MB)")
            return
        }

        const reader = new FileReader()
        reader.onloadend = () => {
            setImage(reader.result)
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = () => {

        if (!name || !category || !stock || !image || orderType.length === 0 || sizes.length === 0 || sizes.some(s => !s.price)) {
            return alert("Fill all fields");
        }
        onAdd({
            id: isEdit ? initialData.id : Date.now(),
            image,
            name,
            category,
            stock,
            sizes,
            orderType, // ✅ array
        })
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[420px] space-y-4">
                <h2 className="text-xl font-bold">
                    {isEdit ? "Edit Product" : "Add Product"}
                </h2>
                {/* Image Upload */}
                <div>
                    <label className="text-sm font-medium mb-1 block">
                        Product Image
                    </label>
                    <div
                        onClick={() => document.getElementById("productImage").click()}
                        className="w-24 h-24 border-2 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 overflow-hidden">
                        {image ? (
                            <img
                                src={image}
                                className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-xs text-gray-500 text-center px-2">
                                Choose Image
                            </span>
                        )}
                    </div>

                    <input id="productImage" type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                    {image && (
                        <p
                            onClick={() =>
                                document.getElementById("productImage").click()
                            }
                            className="text-xs text-blue-600 mt-1 cursor-pointer">
                            Change image
                        </p>
                    )}
                </div>

                {/* Name */}
                <input type="text" placeholder="Product name" value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full border px-3 py-2 rounded" />

                {/* Category */}
                <select value={category} onChange={handleCategoryChange}
                    className="w-full border px-3 py-2 rounded">
                    <option value="">Select Category</option>

                    {storecategories.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>

                {/* Stock */}
                <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)}
                    className="w-full border px-3 py-2 rounded" />

                {/* Sizes */}
                {/* Sizes with Price */}
                <div className="space-y-2">
                    <p className="text-sm font-medium">Sizes & Price</p>

                    <div className="flex gap-2 flex-wrap">
                        {availableSizes.map((size) => (
                            <button
                                key={size}
                                type="button"
                                onClick={() => toggleSize(size)}
                                className={`px-3 py-1 rounded border ${hasSize(size)
                                    ? "bg-black text-white"
                                    : "bg-white"}`}>
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Price inputs */}
                    {sizes.map((item) => (
                        <div
                            key={item.size}
                            className="flex items-center gap-2">
                            <span className="w-8 font-semibold">
                                {item.size}
                            </span>

                            <input type="number" placeholder={`Price for ${item.size}`} value={item.price}
                                onChange={(e) => updateSizePrice(item.size, e.target.value)} className="flex-1 border px-3 py-1 rounded" />
                        </div>
                    ))}
                </div>
                {/* Order Type (Multiple) */}
                <div>
                    <p className="text-sm font-medium mb-1">Order Type</p>

                    <div className="flex gap-3">
                        {["Dine In", "Take Away", "Delivery"].map(type => (
                            <button key={type} type="button" onClick={() => toggleOrderType(type)}
                                className={`px-3 py-1 rounded border text-sm
                    ${orderType.includes(type)
                                        ? "bg-black text-white"
                                        : "bg-white"}`}>
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-2">
                    <button onClick={onClose} className="text-sm">
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-black text-white px-4 py-2 rounded text-sm">
                        {isEdit ? "Update" : "Add"}
                    </button>
                </div>
            </div>
        </div>
    )
}
