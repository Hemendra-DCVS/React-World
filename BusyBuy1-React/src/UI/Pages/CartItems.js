import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../Data/CartContext';
import { QuantityButton, QuantityLabel, QuantityNumber } from '../Components/styled2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Data/Cloud Firestore';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import { toast } from 'sonner'
function CartItems() {
  const navigate = useNavigate();
  const { state: { cartItems }, dispatch } = useCart();


  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: productId } });
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
      handleRemoveFromCart(productId);
    }
  };

  // Function to handle Buy Now action
  const handleBuyNow = async () => {
   
    try {
      const purchaseHistoryRef = collection(db, 'purchaseHistory');
      await addDoc(purchaseHistoryRef, { items: cartItems, timestamp: new Date() });

      dispatch({ type: 'CLEAR_CART' }); // Clear the cart
      toast.success('Order success');
      navigate('/OrderHistory'); // Redirect to OrderHistory page
    } catch (error) {
      console.error('Error purchasing items:', error);
    }
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity * 80, 0);

  return (
    <div className="container mt-5 bg-light">
      <h1 className="mb-4 text-center text-dark">Cart Items</h1>
      <div className="row">
        {cartItems.length === 0 ? (
          <div className="col-12 text-center">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div className="col-md-4 mb-4" key={item.id}>
                <Card className="h-100" bg="light" text="dark">
                  <Card.Img variant="top" src={item.image} alt={item.title} />
                  <Card.Body className="d-flex flex-column finlandica non-copyable">
                    <Card.Title className="mb-auto">{item.title}</Card.Title>
                    <Card.Text className="mb-3">Description: {item.description}</Card.Text>
                    <Card.Text className="mb-3">Price: ₹{item.price * 80}</Card.Text>
                    
                    <div className="d-flex align-items-center">
                      <QuantityButton
                        variant="primary"
                        className="btn-block mr-2"
                        onClick={() => handleDecreaseQuantity(item.id)}
                      >
                        -
                      </QuantityButton>
                      <Button
                        variant="primary"
                        className="btn-block"
                        style={{ backgroundColor: '#FFA500', borderColor: '#FFA500', color: '#514538' }}
                      >
                        <QuantityLabel>Q:</QuantityLabel> <QuantityNumber>{item.quantity}</QuantityNumber>
                      </Button>
                      <QuantityButton
                        variant="primary"
                        className="btn-block ml-2"
                        onClick={() => handleIncreaseQuantity(item.id)}
                      >
                        +
                      </QuantityButton>
                    </div>
                    <Button
                      variant="danger"
                      className="mt-3"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
            <div className="col-12 text-center">
              <Card className="h-100" bg="light" text="dark">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title className="mb-3">Total Price: ₹{totalPrice.toFixed(2)}</Card.Title>
                  <Button
                    variant="success"
                    className="btn-block"
                    style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: '#fff' }}
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartItems;
