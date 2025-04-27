import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import ProductPagination from "./ProductPagination";
import ProductForm from "./ProductForm"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Routes>

      <Route path="/" element={<ProductForm />} />
      <Route path="/products-list" element={<ProductPagination />} />
  </Routes>

  )
}

export default App
