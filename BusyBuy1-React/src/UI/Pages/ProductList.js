import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../Data/CartContext';
import { QuantityButton, QuantityLabel, QuantityNumber } from "../Components/styled2";

function ProductList() {
  const { state: { products, cartItems }, dispatch } = useCart();

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // Function to handle increasing quantity
  const handleIncreaseQuantity = (productId) => {
    const itemInCart = cartItems.find(item => item.id === productId);
    if (itemInCart) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: itemInCart.quantity + 1 } });
    }
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = (productId) => {
    const itemInCart = cartItems.find(item => item.id === productId);
    if (itemInCart && itemInCart.quantity > 1) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: productId, quantity: itemInCart.quantity - 1 } });
    } else {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } }); // Remove from cart if quantity is zero
    }
  };

  // Function to get quantity of a product in cart
  const getQuantityInCart = (productId) => {
    const itemInCart = cartItems.find(item => item.id === productId);
    return itemInCart ? itemInCart.quantity : 0;
  };

  return (
    <div className="container mt-5 bg-light ">
      <h1 className="mb-4 text-center text-dark">Product List</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Card className="h-100 " bg="light" text="dark" >
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body className="d-flex flex-column finlandica non-copyable ">
                <Card.Title className="mb-auto">{product.title}</Card.Title>
                <Card.Text className="mb-3">Description: {product.description}</Card.Text>
                <Card.Text className="mb-3">Price: ₹{product.price * 80}</Card.Text>
                <Card.Text className="mb-3">Rating: {product.rating.rate} ({product.rating.count} reviews)</Card.Text>
                {cartItems.find(item => item.id === product.id) ? (
                  <div className="d-flex align-items-center">
                    <QuantityButton
                      variant="primary"
                      className="btn-block mr-2"
                      onClick={() => handleDecreaseQuantity(product.id)}
                    >
                      -
                    </QuantityButton>
                    <Button
                      variant="primary"
                      className="btn-block"
                      style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: '#514538' }}
                    >
                      <QuantityLabel>Q:</QuantityLabel> <QuantityNumber>{getQuantityInCart(product.id)}</QuantityNumber>
                    </Button>
                    <QuantityButton
                      variant="primary"
                      className="btn-block ml-2"
                      onClick={() => handleIncreaseQuantity(product.id)}
                    >
                      +
                    </QuantityButton>
                  </div>
                ) : (
                  <Button
                    variant="primary"
                    className="btn-block"
                    style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: '#514538' }}
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;


