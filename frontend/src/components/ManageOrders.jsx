// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ManageOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [modalShow, setModalShow] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);
//   const [updatedOrder, setUpdatedOrder] = useState({
//     customerName: '',
//     productName: '',
//     quantity: '',
//     price: '',
//   });

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/orders');
//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   const handleDelete = async (orderId) => {
//     try {
//       await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//         method: 'DELETE',
//       });
//       fetchOrders();
//     } catch (error) {
//       console.error('Error deleting order:', error);
//     }
//   };

//   const handleUpdate = async (orderId) => {
//     try {
//       await fetch(`http://localhost:5000/api/orders/${orderId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedOrder),
//       });
//       fetchOrders();
//       setModalShow(false);
//     } catch (error) {
//       console.error('Error updating order:', error);
//     }
//   };

//   const handleEditClick = (order) => {
//     setSelectedOrder(order);
//     setUpdatedOrder({
//       customerName: order.customerName,
//       productName: order.productName,
//       quantity: order.quantity,
//       price: order.price,
//     });
//     setModalShow(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUpdatedOrder(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value.toLowerCase());
//   };

//   const filteredOrders = orders.filter(order =>
//     order.customerName.toLowerCase().includes(searchTerm) ||
//     order.productName.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <div className="container-fluid">
//       <h2 className="mb-4">Manage Orders</h2>

//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by Customer or Product"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       <table className="table table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">Customer Name</th>
//             <th scope="col">Product Name</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Price ($)</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredOrders.length > 0 ? (
//             filteredOrders.map(order => (
//               <tr key={order._id}>
//                 <td>{order.customerName}</td>
//                 <td>{order.productName}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.price}</td>
//                 <td>
//                   <button
//                     className="btn btn-warning"
//                     onClick={() => handleEditClick(order)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-danger ml-2"
//                     onClick={() => handleDelete(order._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="text-center">No orders found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Update Modal */}
//       <div className={`modal ${modalShow ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: modalShow ? 'block' : 'none' }}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Update Order</h5>
//               <button type="button" className="close" aria-label="Close" onClick={() => setModalShow(false)}>
//                 <span aria-hidden="true">&times;</span>
//               </button>
//             </div>
//             <div className="modal-body">
//               <form>
//                 <div className="form-group">
//                   <label>Customer Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="customerName"
//                     value={updatedOrder.customerName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Product Name</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     name="productName"
//                     value={updatedOrder.productName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Quantity</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="quantity"
//                     value={updatedOrder.quantity}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label>Price</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     name="price"
//                     value={updatedOrder.price}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </form>
//             </div>
//             <div className="modal-footer">
//               <button type="button" className="btn btn-secondary" onClick={() => setModalShow(false)}>Close</button>
//               <button type="button" className="btn btn-primary" onClick={() => handleUpdate(selectedOrder._id)}>Save changes</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageOrders;





import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [updatedOrder, setUpdatedOrder] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/orders");
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "DELETE",
      });
      fetchOrders();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleUpdate = async (orderId) => {
    try {
      await fetch(`http://localhost:5000/api/orders/${orderId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedOrder),
      });
      fetchOrders();
      setModalShow(false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const handleEditClick = (order) => {
    setSelectedOrder(order);
    setUpdatedOrder({
      customerName: order.customerName,
      productName: order.productName,
      quantity: order.quantity,
      price: order.price,
    });
    setModalShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOrder((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm) ||
      order.productName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container-fluid mt-4">
      <h2 className="mb-4 text-center" style={{ color: "#4CAF50" }}>
        Manage Orders
      </h2>

      {/* Search Bar */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control rounded-pill border-0 shadow-sm"
          placeholder="Search by Customer or Product"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            backgroundColor: "#f0f8ff",
            borderRadius: "25px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Card for Orders */}
      <div className="card shadow-lg mb-4">
        <div className="card-body">
          <h4 className="card-title mb-4" style={{ color: "#007bff" }}>
            Orders List
          </h4>
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Customer Name</th>
                <th scope="col">Product Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price ($)</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.customerName}</td>
                    <td>{order.productName}</td>
                    <td>{order.quantity}</td>
                    <td>{order.price}</td>
                    <td>
                      <button
                        className="btn btn-warning me-3" // Add margin-right to space out buttons
                        onClick={() => handleEditClick(order)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(order._id)}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

{/* Update Modal for Editing Order */}
<div
  className={`modal ${modalShow ? 'show' : ''}`}
  tabIndex="-1"
  role="dialog"
  style={{ display: modalShow ? "block" : "none", paddingTop: "80px" }}
>
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Update Order</h5>
       
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group mb-3">
            <label>Customer Name</label>
            <input
              type="text"
              className="form-control"
              name="customerName"
              value={updatedOrder.customerName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="productName"
              value={updatedOrder.productName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Quantity</label>
            <input
              type="number"
              className="form-control"
              name="quantity"
              value={updatedOrder.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-3">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              name="price"
              value={updatedOrder.price}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setModalShow(false)}
          style={{ padding: "10px 20px" }}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleUpdate(selectedOrder._id)}
          style={{ padding: "10px 20px" }}
        >
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default ManageOrders;
