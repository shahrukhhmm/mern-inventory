// import React, { useState } from 'react';
// import '../css/AddOrder.css';

// const AddOrder = () => {
//   const [order, setOrder] = useState({
//     customerName: '',
//     productName: '',
//     quantity: '',
//     price: '',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5000/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(order),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('Order saved:', data);
//         // Optionally reset the form after submission
//         setOrder({ customerName: '', productName: '', quantity: '', price: '' });
//       } else {
//         console.error('Failed to save order');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div>
//       <h3>Add Order</h3>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Customer Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={order.customerName}
//             onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Product Name</label>
//           <input
//             type="text"
//             className="form-control"
//             value={order.productName}
//             onChange={(e) => setOrder({ ...order, productName: e.target.value })}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Quantity</label>
//           <input
//             type="number"
//             className="form-control"
//             value={order.quantity}
//             onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Price</label>
//           <input
//             type="number"
//             className="form-control"
//             value={order.price}
//             onChange={(e) => setOrder({ ...order, price: e.target.value })}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddOrder;




import React, { useState } from 'react';
import '../css/AddOrder.css';

const AddOrder = () => {
  const [order, setOrder] = useState({
    customerName: '',
    productName: '',
    quantity: '',
    price: '',
  });

  const [errors, setErrors] = useState({
    customerName: '',
    productName: '',
    quantity: '',
    price: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Function
  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!order.customerName) {
      newErrors.customerName = 'Customer Name is required.';
      isValid = false;
    }
    if (!order.productName) {
      newErrors.productName = 'Product Name is required.';
      isValid = false;
    }
    if (!order.quantity || order.quantity <= 0) {
      newErrors.quantity = 'Quantity must be greater than 0.';
      isValid = false;
    }
    if (!order.price || order.price <= 0) {
      newErrors.price = 'Price must be greater than 0.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Order saved:', data);
        setOrder({ customerName: '', productName: '', quantity: '', price: '' });
      } else {
        console.error('Failed to save order');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{ color: '#4CAF50' }}>
        Add New Order
      </h3>

      <form onSubmit={handleSubmit} className="order-form shadow-lg p-4 rounded">
        <div className="mb-3">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className={`form-control form-input ${errors.customerName ? 'is-invalid' : ''}`}
            value={order.customerName}
            onChange={(e) => setOrder({ ...order, customerName: e.target.value })}
            required
          />
          {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className={`form-control form-input ${errors.productName ? 'is-invalid' : ''}`}
            value={order.productName}
            onChange={(e) => setOrder({ ...order, productName: e.target.value })}
            required
          />
          {errors.productName && <div className="invalid-feedback">{errors.productName}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity</label>
          <input
            type="number"
            className={`form-control form-input ${errors.quantity ? 'is-invalid' : ''}`}
            value={order.quantity}
            onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
            required
          />
          {errors.quantity && <div className="invalid-feedback">{errors.quantity}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className={`form-control form-input ${errors.price ? 'is-invalid' : ''}`}
            value={order.price}
            onChange={(e) => setOrder({ ...order, price: e.target.value })}
            required
          />
          {errors.price && <div className="invalid-feedback">{errors.price}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-success w-100 py-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Order'}
        </button>
      </form>
    </div>
  );
};

export default AddOrder;
