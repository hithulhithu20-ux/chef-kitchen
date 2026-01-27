// import React, { useContext, useEffect, useState } from 'react'
// import { DashBoardContext } from '../context/DashBoardContext';

// export default function AddCategory() {

//   const { setName, name, categoryProducts, stock, handleAddCategory,
//     handleEditCategory, closeCategoryModal, isEditCategory, categoryInitialData, } = useContext(DashBoardContext);

//   useEffect(() => {
//     if (categoryInitialData) {
//       setName(categoryInitialData.name)
//     } else {
//       setName('')
      
//     }
//   }, [categoryInitialData])

//   const handleSubmit = () => {
//     if (!name) return

//     const payload = {
//       name,
//       categoryProducts: Number(categoryProducts),
//       stock: Number(stock),
//     };

//     isEditCategory
//       ? handleEditCategory(payload)
//       : handleAddCategory(payload);

//     closeCategoryModal();

//   }

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         onClick={closeCategoryModal}
//         className="fixed inset-0 bg-black/40 z-40 transition-opacity" />

//       {/* Sliding Panel */}
//       <div
//         className="fixed top-0 right-0 h-full w-[90%] sm:w-[420px] bg-white z-50 shadow-xl transform 
//         transition-transform duration-500 ease-in-out translate-x-0">
//         {/* Header */}
//         <div className="flex justify-between items-center px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold">
//             {isEditCategory ? 'Edit Category' : 'Add Category'}
//           </h2>

//           <button
//             onClick={closeCategoryModal}
//             className="text-gray-500 hover:text-black text-xl">
//             ✕
//           </button>
//         </div>

//         {/* Body */}
//         <div className="p-6 space-y-4">
//           <input type="text" placeholder="Category Name" value={name} onChange={(e) => setName(e.target.value)}
//             className="w-full border px-3 py-2 rounded-lg" />
          
//         </div>

//         {/* Footer */}
//         <div className="absolute bottom-0 w-full px-6 py-4 border-t flex justify-end gap-3 bg-white">
//           <button
//             onClick={closeCategoryModal}
//             className="px-4 py-2 rounded-lg border">
//             Cancel
//           </button>

//           <button
//             onClick={handleSubmit}
//             className="px-4 py-2 rounded-lg bg-gray-800 text-white">
//             {isEditCategory ? 'Update' : 'Add'}
//           </button>
//         </div>
//       </div>
//     </>
//   )
// }


import React, { useContext, useEffect } from "react";
import { DashBoardContext } from "../context/DashBoardContext";

export default function AddCategory() {
  const {
    name,
    setName,
    handleAddCategory,
    handleEditCategory,
    closeCategoryModal,
    isEditCategory,
    categoryInitialData,
  } = useContext(DashBoardContext);

  useEffect(() => {
    if (categoryInitialData) {
      setName(categoryInitialData.name);
    } else {
      setName("");
    }
  }, [categoryInitialData]);

  const handleSubmit = () => {
    if (!name.trim()) return;

    const payload = { name };

    isEditCategory
      ? handleEditCategory(payload)
      : handleAddCategory(payload);

    closeCategoryModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={closeCategoryModal}
        className="absolute inset-0 bg-black/40"
      />

      {/* Popup */}
      <div
        className="relative bg-white w-[90%] max-w-sm rounded-xl shadow-xl
        p-6 space-y-5 animate-scaleIn"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {isEditCategory ? "Edit Category" : "Add Category"}
          </h2>

          <button
            onClick={closeCategoryModal}
            className="text-gray-400 hover:text-black text-xl"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Category Name</label>
          <input
            autoFocus
            type="text"
            placeholder="Eg: Category"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={closeCategoryModal}
            className="px-4 py-2 rounded-lg border text-sm"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-black text-white text-sm"
          >
            {isEditCategory ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
