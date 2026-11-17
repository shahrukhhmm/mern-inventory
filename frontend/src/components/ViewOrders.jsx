// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ViewOrders = () => {
//   // State to hold orders
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     // Fetch orders data from backend
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/orders');
//         if (response.ok) {
//           const data = await response.json();
//           setOrders(data);
//           setFilteredOrders(data);
//         } else {
//           console.error('Failed to fetch orders');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   // Function to handle search/filtering
//   const handleSearch = (e) => {
//     const value = e.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filtered = orders.filter(order =>
//       order.customerName.toLowerCase().includes(value) ||
//       order.productName.toLowerCase().includes(value)
//     );

//     setFilteredOrders(filtered);
//   };

//   return (
//     <div className="container-fluid">
//       <h2 className="mb-4">View Orders</h2>
      
//       {/* Search Bar */}
//       <div className="input-group mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by Customer or Product"
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       {/* Orders Table */}
//       <table className="table table-striped">
//         <thead className="thead-dark">
//           <tr>
//             <th scope="col">Customer Name</th>
//             <th scope="col">Product Name</th>
//             <th scope="col">Quantity</th>
//             <th scope="col">Price ($)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredOrders.length > 0 ? (
//             filteredOrders.map(order => (
//               <tr key={order._id}> {/* Use _id for MongoDB documents */}
//                 <td>{order.customerName}</td>
//                 <td>{order.productName}</td>
//                 <td>{order.quantity}</td>
//                 <td>{order.price}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="4" className="text-center">No orders found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ViewOrders;



import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/orders');
        if (response.ok) {
          const data = await response.json();
          setOrders(data);
          setFilteredOrders(data);
        } else {
          console.error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = orders.filter(order =>
      order.customerName.toLowerCase().includes(value) ||
      order.productName.toLowerCase().includes(value)
    );

    setFilteredOrders(filtered);
  };

  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center mb-4" style={{ color: '#4CAF50' }}>View Orders</h2>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Search by Customer or Product"
          value={searchTerm}
          onChange={handleSearch}
          style={{
            borderRadius: '30px',
            padding: '10px 15px',
            border: '1px solid #ccc',
            fontSize: '16px',
            marginBottom: '20px',
          }}
        />
      </div>

      {/* Orders Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">Customer Name</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price ($)</th>
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
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewOrders;
