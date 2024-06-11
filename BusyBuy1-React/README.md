# BusyBuy E-commerce App

# Description
BusyBuy is an e-commerce web application where users can browse products,add them to cart, purchase items, and view their orders. This app provides a seamless shopping experience for customers to find products, add them to their cart, and complete their purchase and view order history.

## Features
- User Authentication: Users can register, login, and logout securely.
- Product Listings: Display a list of products with details such as name, description, price, and image.
- Shopping Cart: Allow users to add products to their cart, update quantities, and remove items.
- Order History: Provide users with a history of their past orders.
- Responsive Design: Support for various screen sizes and devices.

### Folder Structure of our app
In the src folder, all files are seperated into different folders based on its Purpose. so, different folders that serves distinct purpose to make the app.
- UI folder contains the styled components and pages that makes our app
- Data folder contains context api files, firebase config

# Getting Started
- `npm install`
you can run the project by the `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000] to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Site hosted Link - [https://busybuy-b56e5.web.app]

## Usage
### Homepage, Registration and Login

- New users can register for an account by clicking on the "New user? Register" button on the home page.
- Existing users can log in by clicking on the "Existing user? Login" button on the home page.

### Product List

- After logging in, users are navigated to the product list page 
- The product list page displays all available products with details such as name, description, price etc.

### Cart

- Users can add products to their cart while browsing the product list page.
- Clicking on the "Cart" link in the navigation bar takes users to the cart page, where they can view and manage items in their cart.
- Click on Buy Now button at bottom to purchase the items in the cart.

### Order History

- Users can view their order history by clicking on the "Order History" link in the navigation bar.
- The order history page displays a list of past orders with details such as date, quantity of items, total amount.


## Technologies Used
- React.js: Frontend framework for building user interfaces.
- Firebase: Backend services for user authentication and database storage.
  - Authentication: Used for user registration, login, and logout.
  - Firestore: Cloud Firestore used as the database to store product information, user data, and order history.
- React Router: Library for handling navigation within the application.
- React Bootstrap: React components based on Bootstrap for building UI elements.
- Sonner: Library for displaying toast notifications.
- API endpoint for product data 'https://fakestoreapi.com/products'

### Any Suggestions and improvements are most welcome. 
[Author]
-Name : Hemendra

-LinkedIn : https://www.linkedin.com/in/hemendra-dcvs/

-Github : https://github.com/Hemendra-DCVS

-Email : hemendrachanti@gmail.com