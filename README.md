## 📄 Project Details - Products and Addons Management (Node.js + MongoDB Backend + React Vite Frontend)
This project is built using Node.js for backend and MongoDB (with Mongoose) as the database.
Frontend is built using React Vite.

It is a simple full-stack application where you can add products and addons (also called admissions) and list products using pagination.

# 📦 Inside This Application:
Backend (Node.js + MongoDB):
Add products with fields like title, description, price, and image.

Each product can have multiple addons associated with it (addons have title and price).

APIs are available to:

Add a Product with optional addons.

List Products with pagination.

Frontend (React Vite):
A simple UI is built using React Vite.

# Add Product Page:

A form to enter product details (title, description, price, image) and addons.

On submitting, it calls the backend API to save the product.

# View Products Page:

Lists all products with pagination.

Fetches data by calling the Product List API from the backend.

# 🧩 Project Modules:
1. Add Product Module:
Add a new product along with optional addons via frontend.

The form sends title, description, price, image, and addons to backend API.

2. List Product Module:
List all products with pagination.

Pagination is handled in both frontend and backend.

# 🚀 Available APIs:
# 📋 Product List API
URL:

bash
Copy
Edit
# GET http://127.0.0.1:5004/api/v1/products/product-list?page=1&limit=2
Query Parameters:

page (Optional): Page number (default = 1)

limit (Optional): Number of items per page (default = 10)

📋 Add Product API
URL:

bash
Copy
Edit
# POST http://127.0.0.1:5004/api/v1/products/add-product
Body Parameters:

title (string)

description (string)

price (number)

image (file upload)

haveAddon (boolean)

addons (array of objects with title and price)

## 🛠️ Technologies Used:
# Backend:
Node.js

Express.js

MongoDB (Mongoose)

Multer (for file uploads)

Joi (for validation)

Nodemon

# Frontend:
React.js (Vite)

Axios (for API calls)

React Hook Form (for managing form inputs)

React Paginate (for pagination UI)
