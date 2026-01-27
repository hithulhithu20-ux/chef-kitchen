
import React, { useContext, useEffect, useState } from "react"
import AddProducts from "./AddProducts"
import { DashBoardContext } from "../context/DashBoardContext";

export default function Products() {

  const { showAddProducts, setShowAddProducts, setEditProduct,
    products, setProducts,onClose } = useContext(DashBoardContext);


  const handleDelete = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };


  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">Products</h1>
        <button
          onClick={() => {
            setEditProduct(null)
            onClose()              // resets everything
            setShowAddProducts(true)
          }}

          className="bg-gray-800 px-4 py-2 rounded-xl text-white hover:bg-gray-700 w-full sm:w-auto">
          + Add Product
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden sm:block w-full bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-[60px_1.5fr_1.2fr_80px_2fr_1.5fr_120px] px-6 py-4 bg-gray-300 text-sm font-semibold text-center">
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Stock</span>
          <span>Sizes</span>
          <span>Order Type</span>
          <span className="text-center">Actions</span>
        </div>

        {products.length === 0 ? (
          <div className="px-6 py-10 text-center text-gray-500">
            No products added yet
          </div>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[60px_1.5fr_1.2fr_80px_2fr_1.5fr_120px] px-6 py-4 text-sm text-gray-700 border-t items-center hover:bg-gray-50 text-center">
              <img
                src={p.image}
                className="w-10 h-10 rounded object-cover border" />

              <span>{p.name}</span>
              <span>{p.category}</span>
              <span>{p.stock}</span>
              <span>
                {p.sizes.map(s => `${s.size} - ₹${s.price}`).join(", ")}
              </span>

              <span>{p.orderType.join(", ")}</span>

              <div className="flex justify-center gap-2">
                <button
                  onClick={() => {
                    setEditProduct(p)
                    setShowAddProducts(true)
                  }}
                  className="bg-gray-600 px-2 py-1 text-white rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-600 px-2 py-1 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Mobile Cards */}
      <div className="sm:hidden flex flex-col gap-4">
        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No products added yet
          </div>
        ) : (
          products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow p-4 flex gap-4">
              <img
                src={p.image}
                className="w-16 h-16 rounded object-cover border" />

              <div className="flex-1 text-sm">
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-gray-500">{p.category}</p>
                <p>Stock: {p.stock}</p>
                <p>
                  Sizes:{" "}
                  {p.sizes.map(s => `${s.size} - ₹${s.price}`).join(", ")}
                </p>

                <p>Order: {p.orderType.join(", ")}</p>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => {
                      setEditProduct(p)
                      setShowAddProducts(true)
                    }}
                    className="bg-gray-600 px-3 py-1 text-white rounded">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="bg-red-600 px-3 py-1 text-white rounded">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {showAddProducts && (
        <AddProducts />
      )}
    </div>
  )
}
