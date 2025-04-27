import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductPagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(2); 
  const [totalPages, setTotalPages] = useState(1); 
  const [loading, setLoading] = useState(false);


  const fetchProducts = async (page, limit) => {
    setLoading(true);
    try {

      const response = await axios.get(`http://127.0.0.1:5004/api/v1/products/product-list?page=${page}&limit=${limit}`);
console.log(response.data.data)
setProducts(response.data.data)
setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchProducts(currentPage, limit);
  }, [currentPage, limit]);


  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  const handleLimitChange = (e) => {
    setLimit(Number(e.target.value)); 
    setCurrentPage(1); 
  };

  return (
    <div className="pagination-container">
      <Link to="/">Add Products</Link> 
      <h2>Product List</h2>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product._id} className="product-item">
              <h3>{product.title}</h3>
              <p>{product.description}</p> 
              <p>Price: ${product.price}</p>
              <p>Image: <img src={product.image} alt={product.title} width="100" /></p>
              {product.addonMenu && product.addonMenu.length > 0 && (
  <div className="addon-menus">
    <h4>Addons:</h4>
    <ul>
      {product.addonMenu.map((addon, index) => (
        <li key={index}>
          {addon.title} - ${addon.price}
        </li>
      ))}
    </ul>
  </div>
)}

            </div>
          ))}
        </div>
      )}

      <div className="pagination-controls">
        <label htmlFor="limit">Products per page: </label>
        <select id="limit" value={limit} onChange={handleLimitChange}>
          <option value={2}>2</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </select>

        <div className="pagination-buttons">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => handlePageClick(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPagination;
