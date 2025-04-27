import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
const ProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    have_addon: false,
  });
  const [successMessage, setSuccessMessage] = useState(''); 

  const [imageFile, setImageFile] = useState(null);
  const [addItems, setaddItems] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'image') {
      setImageFile(e.target.files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleAddOnChange = (index, e) => {
    const { name, value } = e.target;
    const newAddOns = [...addItems];
    newAddOns[index][name] = value;
    setaddItems(newAddOns);
  };

  const handleAddAddon = () => {
    setaddItems([...addItems, { title: '', price: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    if (!formData.description.trim()) {
      alert("Description is required");
      return;
    }

    if (!formData.price || isNaN(formData.price)) {
      alert("Valid Price is required");
      return;
    }

    if (!imageFile) {
      alert("Image is required");
      return;
    }

    if (formData.have_addon && addItems.length === 0) {
      alert("Please add at least one Addon Menu");
      return;
    }

   
    const submitData = new FormData();
    submitData.append('title', formData.title);
    submitData.append('description', formData.description);
    submitData.append('price', formData.price);
    submitData.append('have_addon', formData.have_addon);
    submitData.append('image', imageFile);

    if (formData.have_addon) {
      addItems.forEach((addon, index) => {
        submitData.append(`addItems[${index}][title]`, addon.title);
        submitData.append(`addItems[${index}][price]`, addon.price);
      });
    }
    

    try {
      const response = await axios.post('http://localhost:5004/api/v1/products/add-product', submitData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage("Your product was added successfully!");

      setFormData({
        title: '',
        description: '',
        price: '',
        image: '',
        have_addon: false,
      });
      setaddItems([]);

      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <Link to="/products-list">Products List</Link>
      <h2>Product Form</h2>

      <label>Title</label>
      <input type="text" name="title" value={formData.title} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} required />

      <label>Price</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} required />

      <label>Image</label>
      <input type="file" name="image" onChange={handleChange} required />

      <div className="checkbox-group">
        <label>Have Addon?</label>
        <input
          type="checkbox"
          name="have_addon"
          checked={formData.have_addon}
          onChange={handleChange}
        />
      </div>

      {formData.have_addon && (
        <div className="addon-section">
          <h3>Addons</h3>
          {addItems.map((addon, index) => (
            <div key={index} className="addon-item">
              <input
                type="text" 
                name="title"
                placeholder="Title"
                value={addon.title}
                onChange={(e) => handleAddOnChange(index, e)}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={addon.price}
                onChange={(e) => handleAddOnChange(index, e)}
                required
              />
            </div>
          ))}
          <button type="button" className="add-addon-btn" onClick={handleAddAddon}>
            + Add Another Addon
          </button>
        </div>
      )}

      <button type="submit" className="submit-btn">Submit</button>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
};

export default ProductForm;
