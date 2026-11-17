// // src/components/ManageSales.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageSales = () => {
//   const [sales, setSales] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchSales();
//   }, []);

//   const fetchSales = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/sales/');
//       setSales(response.data);
//     } catch (error) {
//       console.error('Error fetching sales records:', error);
//     }
//   };

//   const deleteSale = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/sales/${id}`);
//       setSales(sales.filter((sale) => sale._id !== id));
//       alert('Sale record deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting sale record:', error);
//     }
//   };

//   // Filter sales based on the search term
//   const filteredSales = sales.filter(
//     (sale) =>
//       sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       sale.productName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container-fluid">
//       <h3>Manage Sales Records</h3>

//       {/* Search Input */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by customer or product name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Sales Records Table */}
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Product Name</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredSales.map((sale) => (
//             <tr key={sale._id}>
//               <td>{sale.customerName}</td>
//               <td>{sale.productName}</td>
//               <td>{sale.quantity}</td>
//               <td>{sale.price}</td>
//               <td>{new Date(sale.date).toLocaleDateString()}</td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteSale(sale._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ManageSales;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSales = () => {
  const [sales, setSales] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/sales/');
      setSales(response.data);
    } catch (error) {
      setError('Error fetching sales records');
      console.error('Error fetching sales records:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSale = async (id) => {
    if (window.confirm('Are you sure you want to delete this sale record?')) {
      setError(null);
      try {
        await axios.delete(`http://localhost:5000/api/sales/${id}`);
        setSales(sales.filter((sale) => sale._id !== id));
        alert('Sale record deleted successfully!');
      } catch (error) {
        setError('Error deleting sale record');
        console.error('Error deleting sale record:', error);
      }
    }
  };

  // Filter sales based on the search term
  const filteredSales = sales.filter(
    (sale) =>
      sale.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container-fluid mt-5">
      <h3 className="text-center mb-4" style={{ color: '#4CAF50' }}>
        Manage Sales Records
      </h3>

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Search by customer or product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            borderRadius: '30px',
            padding: '10px 15px',
            border: '1px solid #ccc',
            fontSize: '16px',
          }}
        />
      </div>

      {/* Loading State */}
      {loading && <div className="text-center">Loading...</div>}

      {/* Sales Records Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price ($)</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSales.length > 0 ? (
              filteredSales.map((sale) => (
                <tr key={sale._id}>
                  <td>{sale.customerName}</td>
                  <td>{sale.productName}</td>
                  <td>{sale.quantity}</td>
                  <td>{sale.price}</td>
                  <td>{new Date(sale.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteSale(sale._id)}
                      style={{
                        backgroundColor: '#dc3545',
                        borderColor: '#dc3545',
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No sales records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSales;
