// // src/components/ManageEmployee.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageEmployee = () => {
//   const [employees, setEmployees] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [editingEmployee, setEditingEmployee] = useState(null);
//   const [formData, setFormData] = useState({ name: '', department: '', email: '' });

//   useEffect(() => {
//     fetchEmployees();
//   }, []);

//   const fetchEmployees = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/employees');
//       setEmployees(response.data);
//     } catch (error) {
//       console.error('Error fetching employees:', error);
//     }
//   };

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const filteredEmployees = employees.filter(employee =>
//     employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     employee.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/employees/${id}`);
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//     }
//   };

//   const handleEdit = (employee) => {
//     setEditingEmployee(employee._id);
//     setFormData({ name: employee.name, department: employee.department, email: employee.email });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`http://localhost:5000/api/employees/${editingEmployee}`, formData);
//       setEditingEmployee(null);
//       setFormData({ name: '', department: '', email: '' });
//       fetchEmployees();
//     } catch (error) {
//       console.error('Error updating employee:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="container-fluid">
//       <h3>Manage Employees</h3>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by name, department, or email"
//         value={searchTerm}
//         onChange={handleSearch}
//       />

//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Department</th>
//             <th>Email</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEmployees.map((employee) => (
//             <tr key={employee._id}>
//               <td>{employee.name}</td>
//               <td>{employee.department}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <button
//                   className="btn btn-primary me-2"
//                   onClick={() => handleEdit(employee)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => handleDelete(employee._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {editingEmployee && (
//         <form onSubmit={handleUpdate} className="mt-4">
//           <h4>Edit Employee</h4>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="department" className="form-label">Department</label>
//             <input
//               type="text"
//               className="form-control"
//               id="department"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Update Employee</button>
//           <button
//             type="button"
//             className="btn btn-secondary ms-2"
//             onClick={() => {
//               setEditingEmployee(null);
//               setFormData({ name: '', department: '', email: '' });
//             }}
//           >
//             Cancel
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ManageEmployee;




import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [formData, setFormData] = useState({ name: '', department: '', email: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);
    } catch (error) {
      setError('Error fetching employees.');
      console.error('Error fetching employees:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setError(null);
      try {
        await axios.delete(`http://localhost:5000/api/employees/${id}`);
        setEmployees(employees.filter((employee) => employee._id !== id));
        alert('Employee deleted successfully!');
      } catch (error) {
        setError('Error deleting employee.');
        console.error('Error deleting employee:', error);
      }
    }
  };

  const handleEdit = (employee) => {
    setEditingEmployee(employee._id);
    setFormData({ name: employee.name, department: employee.department, email: employee.email });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await axios.put(`http://localhost:5000/api/employees/${editingEmployee}`, formData);
      setEditingEmployee(null);
      setFormData({ name: '', department: '', email: '' });
      fetchEmployees();
      alert('Employee updated successfully!');
    } catch (error) {
      setError('Error updating employee.');
      console.error('Error updating employee:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="container-fluid mt-5">
      <h3 className="text-center mb-4" style={{ color: '#4CAF50' }}>
        Manage Employees
      </h3>

      {/* Error Message */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Search by name, department, or email"
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

      {/* Loading State */}
      {loading && <div className="text-center">Loading...</div>}

      {/* Employees Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <tr key={employee._id}>
                  <td>{employee.name}</td>
                  <td>{employee.department}</td>
                  <td>{employee.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(employee)}
                      style={{ backgroundColor: '#ffcc00' }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(employee._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No employees found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Employee Form */}
      {editingEmployee && (
        <form onSubmit={handleUpdate} className="mt-4 p-4 rounded shadow-lg" style={{ backgroundColor: '#f4f7fc' }}>
          <h4>Edit Employee</h4>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <input
              type="text"
              className="form-control"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ borderRadius: '8px' }}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update Employee</button>
          <div>
            <h1></h1>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              setEditingEmployee(null);
              setFormData({ name: '', department: '', email: '' });
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default ManageEmployee;
