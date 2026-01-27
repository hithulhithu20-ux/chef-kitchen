import React, { useContext } from "react";
import AddCategory from "./AddCategory";
import { DashBoardContext } from "../context/DashBoardContext";

export default function Category() {
  const {
    categories,
    setCategories,
    showAddCategory,
    setShowAddCategory,
    products,
    setEditCategory,
  } = useContext(DashBoardContext);

  const handleDeleteCategory = (indexToDelete) => {
    setCategories((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  };

  const getProductCount = (categoryName) => {
    return products.filter(
      (product) => product.category === categoryName
    ).length;
  };

  const getCategoryStock = (categoryName) => {
  return products
    .filter(p => p.category === categoryName)
    .reduce((sum, p) => sum + Number(p.stock), 0);
};



  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">Category</h1>
        <button
          onClick={() => setShowAddCategory(true)}
          className="bg-gray-800 px-4 py-2 rounded-xl text-white hover:bg-gray-700 w-full sm:w-auto"
        >
          + Add Category
        </button>
      </div>

      {/* ===== Desktop Table ===== */}
      <div className="hidden sm:block w-full bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-4 px-6 py-4 bg-gray-300 text-sm font-semibold">
          <span>Name</span>
          <span>Products</span>
          <span>Stock</span>
          <span className="text-center">Actions</span>
        </div>

        {categories.length === 0 ? (
          <div className="px-6 py-10 text-center text-gray-500">
            No categories added yet
          </div>
        ) : (
          categories.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 px-6 py-4 text-sm text-gray-700 border-t items-center hover:bg-gray-50"
            >
              <span>{item.name}</span>
              <span>{getProductCount(item.name)}</span>

              <span>{getCategoryStock(item.name)}</span>


              <div className="flex justify-center gap-2">
                <button
                  onClick={() => {
                    setEditCategory(index);
                    setShowAddCategory(true);
                  }}
                  className="bg-gray-600 px-2 py-1 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(index)}
                  className="bg-red-600 px-2 py-1 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ===== Mobile Cards ===== */}
      <div className="sm:hidden flex flex-col gap-4">
        {categories.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No categories added yet
          </div>
        ) : (
          categories.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 flex flex-col gap-2"
            >
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  Products: {getProductCount(item.name)}
                </p>

                <p className="text-sm">Stock: {getCategoryStock(item.name)}</p>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => {
                    setEditCategory(index);
                    setShowAddCategory(true);
                  }}
                  className="flex-1 bg-gray-600 px-3 py-2 text-white rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(index)}
                  className="flex-1 bg-red-600 px-3 py-2 text-white rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showAddCategory && <AddCategory />}
    </div>
  );
}
