import { createContext, useEffect, useState } from "react";

export const DashBoardContext = createContext();

export function DashBoardProvider({ children }) {
  // ✅ Categories state lives in context

  const [open, setOpen] = useState(false);



  const [categories, setCategories] = useState(() => {
    const stored = localStorage.getItem("categories");
    return stored ? JSON.parse(stored) : [];
  });
  const [name, setName] = useState('')
  const [stock, setStock] = useState('')
  const [products, setProducts] = useState([])
  const [categoryProducts, setCategoryProducts] = useState("");
  const [showAddProducts, setShowAddProducts] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [sizes, setSizes] = useState([])
  const [orderType, setOrderType] = useState([])
  const [storecategories, setStoreCategories] = useState([])
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [editCategory, setEditCategory] = useState(null)

  const isEdit = Boolean(editProduct);
  const initialData = editProduct;

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
    setShowAddProducts(false);
  };

  const handleUpdateProduct = (product) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? product : p))
    );
    setEditProduct(null);
    setShowAddProducts(false);
  };

  const onAdd = (product) => {
    isEdit ? handleUpdateProduct(product) : handleAddProduct(product);
      resetProductForm()

  };

  const onClose = () => {
    setShowAddProducts(false);
    setEditProduct(null);
    resetProductForm()

  };


  const isEditCategory = editCategory !== null;
  const categoryInitialData =
    editCategory !== null ? categories[editCategory] : null;

  const handleAddCategory = (category) => {
    setCategories((prev) => [...prev, category]);
    setShowAddCategory(false);
  };

  const handleEditCategory = (updatedCategory) => {
    setCategories((prev) =>
      prev.map((cat, i) => (i === editCategory ? updatedCategory : cat))
    );
    setEditCategory(null);
    setShowAddCategory(false);
  };

  const closeCategoryModal = () => {
    setShowAddCategory(false);
    setEditCategory(null);
  };

  const resetProductForm = () => {
    setName("")
    setStock("")
    setImage("")
    setCategory("")
    setSizes([])
    setOrderType([])
  }




  // ✅ Persist to localStorage
  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  return (
    <DashBoardContext.Provider
      value={{
        categories,
        setCategories,
        name, setName,
        products, setProducts,
        stock, setStock,
        showAddProducts, setShowAddProducts,
        editProduct, setEditProduct,
        image, setImage,
        category, setCategory,
        sizes, setSizes,
        orderType, setOrderType,
        storecategories, setStoreCategories,
        open, setOpen,
        showAddCategory, setShowAddCategory,
        editCategory, setEditCategory,
        onClose,
        onAdd,
        initialData,
        isEdit,
        handleAddProduct,
        handleUpdateProduct,
        handleAddCategory,
        handleEditCategory,
        closeCategoryModal,
        isEditCategory,
        categoryInitialData,
        categoryProducts, setCategoryProducts
      }}
    >
      {children}
    </DashBoardContext.Provider>
  );
}
