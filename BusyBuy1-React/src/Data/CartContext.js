import React, { createContext, useReducer, useContext, useEffect } from 'react';
import { collection, getDocs, onSnapshot, updateDoc, doc, setDoc } from 'firebase/firestore';
import { db } from "./Cloud Firestore";
import { toast } from 'sonner'
// Initial state for the cart
const initialState = {
  products: [],
  cartItems: []
};

// Reducer function to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'SET_CART_ITEMS':
      return { ...state, cartItems: action.payload };
    case 'ADD_TO_CART':
      const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex >= 0) {
        // Product already in cart, increase its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        updateFirestoreCart(updatedCartItems); // Update Firestore cart
        return { ...state, cartItems: updatedCartItems };
      } else {
        // Product not in cart, add it with quantity 1
        const newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
        updateFirestoreCart(newCartItems); // Update Firestore cart
        toast.success('Added to cart');
        return { ...state, cartItems: newCartItems };
      }
    case 'REMOVE_FROM_CART':
      const filteredCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      updateFirestoreCart(filteredCartItems); // Update Firestore cart
      toast.error('Removed from cart')
      return { ...state, cartItems: filteredCartItems };
    case 'UPDATE_QUANTITY':
      const updatedCartItems = [...state.cartItems];
      const productIndex = updatedCartItems.findIndex(item => item.id === action.payload.id);
      updatedCartItems[productIndex].quantity = action.payload.quantity;
      updateFirestoreCart(updatedCartItems); // Update Firestore cart
      return { ...state, cartItems: updatedCartItems };
    case 'CLEAR_CART':
      updateFirestoreCart([]); // Clear the Firestore cart
      return { ...state, cartItems: [] };
    default:
      return state;
  }
}

// Function to update Firestore cart
async function updateFirestoreCart(cartItems) {
  const cartDocRef = doc(db, 'cart', 'default');
  await setDoc(cartDocRef, { cartItems }); // Use setDoc to overwrite the entire document
}

// Create the cart context
const CartContext = createContext();

// Cart provider component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        dispatch({ type: 'SET_PRODUCTS', payload: data });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    // Fetch cart items from Firestore
    const unsubscribe = onSnapshot(doc(db, 'cart', 'default'), (snapshot) => {
      if (snapshot.exists()) {
        const cartData = snapshot.data();
        dispatch({ type: 'SET_CART_ITEMS', payload: cartData.cartItems });
      } else {
        dispatch({ type: 'SET_CART_ITEMS', payload: [] });
      }
    });

    fetchProducts();

    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}
