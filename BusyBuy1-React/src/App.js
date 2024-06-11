import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Navbar from "./UI/Components/NavBar"
import Homepage from "./UI/Pages/Homepage";
import Register from "./UI/Pages/Register"
import Login from "./UI/Pages/Login";
import About from "./UI/Pages/About";
import ProductList from "./UI/Pages/ProductList";
import {CartProvider}  from "./Data/CartContext";
import { AuthProvider } from "./Data/AuthContext";
import CartItems from "./UI/Pages/CartItems";
import OrderHistory from "./UI/Pages/OrderHistory";
import ErrorPage from "./UI/Pages/Error";
import  {Protected} from "./Protected"
import { Toaster } from 'sonner'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element:
        (<CartProvider>
          <AuthProvider>  
          <Navbar />
          </AuthProvider>
        </CartProvider>),
      errorElement:<ErrorPage />,
      children : [
        {index:true, element:<Homepage />},
        {path:"home", element:<Homepage />},

        {path:"register", element:<Register />},
        {path:"login", element:<Login />},
        {path:"about", element:<About />},

        { path: "ProductList", element: <Protected><ProductList /></Protected> },
        { path: "CartItems", element: <Protected><CartItems /></Protected> },
        { path: "OrderHistory", element: <Protected><OrderHistory /></Protected> },
      ]
    },

  ]);


return (
  // <div className="App">
  //     <h1>
  //       React App
  //     </h1>
  //   </div>
   <>
      <RouterProvider router={router} />
      <Toaster position="top-right" expand={false} richColors />
   </>
);
}

export default App;
