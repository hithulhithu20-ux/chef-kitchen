import React, { useContext, useEffect, useState } from 'react'
import { DashBoardContext } from '../context/DashBoardContext';

export default function AddCategory() {

  const { setName, setStock, name, categoryProducts, setCategoryProducts, stock, handleAddCategory,
    handleEditCategory, closeCategoryModal, isEditCategory, categoryInitialData, } = useContext(DashBoardContext);

  useEffect(() => {
    if (categoryInitialData) {
      setName(categoryInitialData.name)
      setCategoryProducts(categoryInitialData.categoryProducts)
      setStock(categoryInitialData.stock)
    } else {
      setName('')
      setCategoryProducts('')
      setStock('')
    }
  }, [categoryInitialData])

  const handleSubmit = () => {
    if (!name || !categoryProducts || !stock) return

    const payload = {
      name,
      categoryProducts: Number(categoryProducts),
      stock: Number(stock),
    };

    isEditCategory
      ? handleEditCategory(payload)
      : handleAddCategory(payload);

    closeCategoryModal();

  }

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeCategoryModal}
        className="fixed inset-0 bg-black/40 z-40 transition-opacity" />

      {/* Sliding Panel */}
      <div
        className="
          fixed top-0 right-0 h-full w-[90%] sm:w-[420px] bg-white z-50 shadow-xl transform transition-transform duration-500 ease-in-out translate-x-0">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">
            {isEditCategory ? 'Edit Category' : 'Add Category'}
          </h2>

          <button
            onClick={closeCategoryModal}
            className="text-gray-500 hover:text-black text-xl">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <input type="text" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" />

          <input type="number" placeholder="Products" value={categoryProducts} onChange={(e) => setCategoryProducts(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" />

          <input type="number" placeholder="Stock" value={stock} onChange={(e) => setStock(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg" />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full px-6 py-4 border-t flex justify-end gap-3 bg-white">
          <button
            onClick={closeCategoryModal}
            className="px-4 py-2 rounded-lg border">
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white">
            {isEditCategory ? 'Update' : 'Add'}
          </button>
        </div>
      </div>
    </>
  )
}
