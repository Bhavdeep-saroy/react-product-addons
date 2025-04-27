## 📄 Project Details - Products and Addons Management (React Vite Frontend)
This project is built using React Vite for the frontend and is integrated with a backend API to manage products and addons.

It is a simple full-stack application where you can add products and addons (also called admissions) and list products using pagination.

# 📦 Inside This Application:
Frontend (React Vite):
Add Product Page:

A form to enter product details like title, description, price, image, and addons.

Upon form submission, it calls the backend API to save the product.

View Products Page:

Displays a list of all products.

Pagination is used to navigate through the products list.

The data is fetched by calling the Product List API from the backend.

# 🧩 Project Modules:
1. Add Product Module:
Add a new product along with optional addons via frontend.

The form sends title, description, price, image, and addons to the backend API.

2. List Product Module:
List all products with pagination.

Pagination is handled in both the frontend and backend.

🚀 Available APIs:
# 📋 Product List API
URL:

GET http://127.0.0.1:5004/api/v1/products/product-list?page=1&limit=2
Query Parameters:

page (Optional): Page number (default = 1)

limit (Optional): Number of items per page (default = 10)

# 📋 Add Product API
URL:


POST http://127.0.0.1:5004/api/v1/products/add-product
Body Parameters:

title (string)

description (string)

price (number)

image (file upload)

haveAddon (boolean)

addons (array of objects with title and price)

# 🛠️ Technologies Used:
Frontend:
React.js (Vite)

Axios (for API calls)

React Hook Form (for managing form inputs)

React Paginate (for pagination UI)
