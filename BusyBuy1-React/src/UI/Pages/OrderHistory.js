import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../Data/Cloud Firestore';
import Table from 'react-bootstrap/Table';

function OrderHistory() {
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'purchaseHistory'));
        const historyData = [];
        querySnapshot.forEach((doc) => {
          historyData.push({ id: doc.id, ...doc.data() });
        });
        setOrderHistory(historyData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching order history:', error);
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center text-dark">Order History</h1>
      {orderHistory.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <table className="table table-hover table-dark finlandica">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date & Time</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              
              <th scope="col">Total Price</th>
            </tr>
          </thead>
          <tbody>
  {orderHistory.sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis()).map((order, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>{new Date(order.timestamp.toDate()).toLocaleDateString()} {new Date(order.timestamp.toDate()).toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})}</td>
                <td>
                    {order.items.map((item, index) => (
                    <div key={index}>{item.title}</div>
                    ))}
                </td>
                <td>
                    {order.items.map((item, index) => (
                    <div key={index}>₹{item.price * 80}</div> 
                    ))}
                </td>
                <td>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>{item.quantity}</li>
                    ))}
                  </ul>
                </td>
                
                <td style={{ color: '#FFF7E7', fontWeight: 'bold', fontSize: 'larger', backgroundColor: '#FFA500', borderColor: '#FFA500' }}>
                ₹{order.items.reduce((total, item) => total + item.price * item.quantity * 80, 0)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrderHistory;