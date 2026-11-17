// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; // Assuming you'll put custom styles here
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Card, Table } from 'react-bootstrap';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import axios from 'axios';

// // Register components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const Dashboard = () => {
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [totalSuppliers, setTotalSuppliers] = useState(0);
//   const [totalInventory, setTotalInventory] = useState(0);
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [employees, setEmployees] = useState([]);
//   const [salesData, setSalesData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       // Get total orders
//       const ordersResponse = await axios.get('http://localhost:5000/api/orders');
//       setTotalOrders(ordersResponse.data.length);

//       // Get total suppliers
//       const suppliersResponse = await axios.get('http://localhost:5000/api/suppliers');
//       setTotalSuppliers(suppliersResponse.data.length);

//       // Get total inventory items
//       const inventoryResponse = await axios.get('http://localhost:5000/api/inventory');
//       setTotalInventory(inventoryResponse.data.length);

//       // Get total employees and employee data
//       const employeesResponse = await axios.get('http://localhost:5000/api/employees');
//       setTotalEmployees(employeesResponse.data.length);
//       setEmployees(employeesResponse.data);

//       // Dummy sales data
//       const dummySalesData = [
//         { month: 'January', sales: 300 },
//         { month: 'February', sales: 700 },
//         { month: 'March', sales: 800 },
//         { month: 'April', sales: 600 },
//         { month: 'May', sales: 900 },
//         { month: 'June', sales: 750 },
//         { month: 'July', sales: 650 },
//         { month: 'August', sales: 850 },
//         { month: 'September', sales: 700 },
//         { month: 'October', sales: 950 },
//         { month: 'November', sales: 900 },
//         { month: 'December', sales: 1100 },
//       ];
//       setSalesData(dummySalesData);
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error.message || error);
//     }
//   };

//   const salesChartData = {
//     labels: salesData.map((data) => data.month),
//     datasets: [
//       {
//         label: 'Sales',
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//         hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//         hoverBorderColor: 'rgba(75, 192, 192, 1)',
//         data: salesData.map((data) => data.sales),
//       },
//     ],
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-2 p-0 vh-100 bg-dark" style={{ position: 'fixed', left: 0, top: 0 }}>
//             <Sidebar />
//           </div>

//           <div className="col-md-10 offset-md-2" style={{ marginTop: '5px' }}>
//             <div className="mt-3 px-4">
//               <h1>Admin Dashboard</h1>

//               <div className="row mt-5">
//                 <div className="col-md-3">
//                   <Card className="custom-card text-center mb-4">
//                     <Card.Body>
//                       <Card.Title>Total Orders</Card.Title>
//                       <Card.Text>{totalOrders}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//                 <div className="col-md-3">
//                   <Card className="custom-card text-center mb-4">
//                     <Card.Body>
//                       <Card.Title>Total Suppliers</Card.Title>
//                       <Card.Text>{totalSuppliers}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//                 <div className="col-md-3">
//                   <Card className="custom-card text-center mb-4">
//                     <Card.Body>
//                       <Card.Title>Total Inventory</Card.Title>
//                       <Card.Text>{totalInventory}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//                 <div className="col-md-3">
//                   <Card className="custom-card text-center mb-4">
//                     <Card.Body>
//                       <Card.Title>Total Employees</Card.Title>
//                       <Card.Text>{totalEmployees}</Card.Text>
//                     </Card.Body>
//                   </Card>
//                 </div>
//               </div>

//               <div className="row mt-4">
//                 <div className="col-12">
//                   <h3>Employees</h3>
//                   <Table className="custom-table" striped bordered hover>
//                     <thead>
//                       <tr>
//                         <th>Name</th>
//                         <th>Department</th>
//                         <th>Email</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {employees.map((employee) => (
//                         <tr key={employee._id}>
//                           <td>{employee.name}</td>
//                           <td>{employee.department}</td>
//                           <td>{employee.email}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </Table>
//                 </div>
//               </div>

//               <div className="row mt-4">
//                 <div className="col-12">
//                   <h3>Sales</h3>
//                   <div className="chart-container">
//                     <Bar data={salesChartData} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

















// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../App.css'; // Custom styles
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Card, Table, Spinner } from 'react-bootstrap';
// import { Bar, Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import axios from 'axios';

// // Register components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// const Dashboard = () => {
//   const [totalOrders, setTotalOrders] = useState(0);
//   const [totalSuppliers, setTotalSuppliers] = useState(0);
//   const [totalInventory, setTotalInventory] = useState(0);
//   const [totalEmployees, setTotalEmployees] = useState(0);
//   const [employees, setEmployees] = useState([]);
//   const [salesData, setSalesData] = useState([]);
//   const [inventoryData, setInventoryData] = useState([]);
//   const [inventoryChartData, setInventoryChartData] = useState(null);
//   const [employeeChartData, setEmployeeChartData] = useState(null);
//   const [salesChartData, setSalesChartData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const [ordersResponse, suppliersResponse, inventoryResponse, employeesResponse, salesResponse] =
//         await Promise.all([
//           axios.get('http://localhost:5000/api/orders'),
//           axios.get('http://localhost:5000/api/suppliers'),
//           axios.get('http://localhost:5000/api/inventory'),
//           axios.get('http://localhost:5000/api/employees'),
//           axios.get('http://localhost:5000/api/sales'),
//         ]);

//       setTotalOrders(ordersResponse.data.length);
//       setTotalSuppliers(suppliersResponse.data.length);
//       setTotalInventory(inventoryResponse.data.length);
//       setInventoryData(inventoryResponse.data);
//       setTotalEmployees(employeesResponse.data.length);
//       setEmployees(employeesResponse.data);
//       setSalesData(salesResponse.data);

//       generateEmployeeChartData(employeesResponse.data);
//       generateInventoryChartData(inventoryResponse.data);
//       generateDailySalesChartData(salesResponse.data);
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error.message || error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Sales Bar Chart Data for Daily Sales (Quantity and Price)
//   const generateDailySalesChartData = (salesData) => {
//     const dailySales = salesData.reduce((acc, sale) => {
//       const { date, quantity, price } = sale;
//       const totalPrice = quantity * price;
//       if (!acc[date]) {
//         acc[date] = { totalQuantity: 0, totalPrice: 0 };
//       }
//       acc[date].totalQuantity += quantity;
//       acc[date].totalPrice += totalPrice;
//       return acc;
//     }, {});

//     const labels = Object.keys(dailySales);
//     const totalQuantities = labels.map((date) => dailySales[date].totalQuantity);
//     const totalPrices = labels.map((date) => dailySales[date].totalPrice);

//     setSalesChartData({
//       labels: labels,
//       datasets: [
//         {
//           label: 'Quantity Sold',
//           backgroundColor: 'rgba(75, 192, 192, 0.6)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
//           hoverBorderColor: 'rgba(75, 192, 192, 1)',
//           data: totalQuantities,
//         },
//         {
//           label: 'Total Sales ($)',
//           backgroundColor: 'rgba(255, 99, 132, 0.6)',
//           borderColor: 'rgba(255, 99, 132, 1)',
//           borderWidth: 1,
//           hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
//           hoverBorderColor: 'rgba(255, 99, 132, 1)',
//           data: totalPrices,
//         },
//       ],
//     });
//   };

//   // Employee Pie Chart Data (Dynamic from Employee Data)
//   const generateEmployeeChartData = (employeeData) => {
//     const departmentCounts = employeeData.reduce((acc, employee) => {
//       const { department } = employee;
//       acc[department] = (acc[department] || 0) + 1;
//       return acc;
//     }, {});

//     const labels = Object.keys(departmentCounts);
//     const values = Object.values(departmentCounts);

//     setEmployeeChartData({
//       labels: labels,
//       datasets: [
//         {
//           data: values,
//           backgroundColor: ['#FFCD56', '#FF9F40', '#FF6384', '#36A2EB'],
//           hoverBackgroundColor: ['#FFCD56', '#FF9F40', '#FF6384', '#36A2EB'],
//         },
//       ],
//     });
//   };

//   // Inventory Pie Chart Data (Dynamic from Inventory Data)
//   const generateInventoryChartData = (inventoryData) => {
//     const itemCounts = inventoryData.reduce((acc, item) => {
//       const { name, quantity } = item;
//       acc[name] = (acc[name] || 0) + quantity;
//       return acc;
//     }, {});

//     const labels = Object.keys(itemCounts);
//     const values = Object.values(itemCounts);

//     setInventoryChartData({
//       labels: labels,
//       datasets: [
//         {
//           data: values,
//           backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//           hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
//         },
//       ],
//     });
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-2 p-0 vh-100 bg-dark" style={{ position: 'fixed', left: 0, top: 0 }}>
//             <Sidebar />
//           </div>

//           <div className="col-md-10 offset-md-2" style={{ marginTop: '5px' }}>
//             <div className="mt-3 px-4">
//               <h1 className="text-gradient">Admin Dashboard</h1>

//               {/* Loading Spinner */}
//               {isLoading && (
//                 <div className="text-center mt-5">
//                   <Spinner animation="border" role="status" variant="primary">
//                     <span className="sr-only">Loading...</span>
//                   </Spinner>
//                 </div>
//               )}

//               {/* Cards Section */}
//               {!isLoading && (
//                 <div className="row mt-5">
//                   {[
//                     { title: 'Total Orders', value: totalOrders, color: '#FFEB3B', icon: 'bi-cart' },
//                     { title: 'Total Suppliers', value: totalSuppliers, color: '#2196F3', icon: 'bi-truck' },
//                     { title: 'Total Inventory', value: totalInventory, color: '#4CAF50', icon: 'bi-box' },
//                     { title: 'Total Employees', value: totalEmployees, color: '#F44336', icon: 'bi-people' },
//                   ].map((card, index) => (
//                     <div className="col-md-3" key={index}>
//                       <Card className="custom-card text-center mb-4" style={{ backgroundColor: card.color }}>
//                         <Card.Body>
//                           <i className={`bi ${card.icon} card-icon`}></i>
//                           <Card.Title>{card.title}</Card.Title>
//                           <Card.Text>{card.value}</Card.Text>
//                         </Card.Body>
//                       </Card>
//                     </div>
//                   ))}
//                 </div>
//               )}

//               {/* Charts Section */}
//               {!isLoading && (
//                 <>
//                   <div className="row mt-4">
//                     <div className="col-12">
//                       <h3>Sales (Quantity vs. Price)</h3>
//                       <div className="chart-container glassmorphism">
//                         <Bar data={salesChartData} />
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row mt-4">
//                     <div className="col-12 col-md-6">
//                       <h3>Employee Distribution</h3>
//                       {employeeChartData && (
//                         <div className="chart-container glassmorphism">
//                           <Pie data={employeeChartData} />
//                         </div>
//                       )}
//                     </div>
//                     <div className="col-12 col-md-6">
//                       <h3>Inventory Distribution</h3>
//                       {inventoryChartData && (
//                         <div className="chart-container glassmorphism">
//                           <Pie data={inventoryChartData} />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Employees Table */}
//               {!isLoading && (
//                 <div className="row mt-4">
//                   <div className="col-12">
//                     <h3>Employees</h3>
//                     <Table className="custom-table glassmorphism" striped bordered hover>
//                       <thead>
//                         <tr>
//                           <th>Name</th>
//                           <th>Department</th>
//                           <th>Email</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {employees.map((employee) => (
//                           <tr key={employee._id}>
//                             <td>{employee.name}</td>
//                             <td>{employee.department}</td>
//                             <td>{employee.email}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Custom styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, Table, Spinner, Form, Button, Alert } from 'react-bootstrap';
import { Bar, Pie, Bubble ,Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from 'chart.js';
import axios from 'axios';


// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const Dashboard = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalSuppliers, setTotalSuppliers] = useState(0);
  const [totalInventory, setTotalInventory] = useState(0);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [inventoryChartData, setInventoryChartData] = useState(null);
  const [employeeChartData, setEmployeeChartData] = useState(null);
  const [salesChartData, setSalesChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [chartType, setChartType] = useState('bar'); // 'bar', 'line', 'pie'

  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (salesData.length > 0) {
      generateDailySalesChartData(salesData);
    }
  }, [currentPage, salesData]);

  const fetchData = async () => {
    try {
      const [ordersResponse, suppliersResponse, inventoryResponse, employeesResponse, salesResponse] =
        await Promise.all([
          axios.get('http://localhost:5000/api/orders'),
          axios.get('http://localhost:5000/api/suppliers'),
          axios.get('http://localhost:5000/api/inventory'),
          axios.get('http://localhost:5000/api/employees'),
          axios.get('http://localhost:5000/api/sales'),
        ]);

      setTotalOrders(ordersResponse.data.length);
      setTotalSuppliers(suppliersResponse.data.length);
      setTotalInventory(inventoryResponse.data.length);
      setInventoryData(inventoryResponse.data);
      setTotalEmployees(employeesResponse.data.length);
      setEmployees(employeesResponse.data);
      setSalesData(salesResponse.data);

      generateEmployeeChartData(employeesResponse.data);
      generateInventoryChartData(inventoryResponse.data);
      generateDailySalesChartData(salesResponse.data);
    } catch (error) {
      setError('Error fetching dashboard data. Please try again later.');
      console.error('Error fetching dashboard data:', error.message || error);
    } finally {
      setIsLoading(false);
    }
  };


  const generateDailySalesChartData = (salesData) => {
    // Create daily sales aggregation
    const dailySales = salesData.reduce((acc, sale) => {
      const { date, quantity, price } = sale;
      const totalPrice = quantity * price;
      if (!acc[date]) {
        acc[date] = { totalQuantity: 0, totalPrice: 0 };
      }
      acc[date].totalQuantity += quantity;
      acc[date].totalPrice += totalPrice;
      return acc;
    }, {});

    // Convert to array and sort by date
    const sortedDates = Object.keys(dailySales).sort((a, b) => new Date(a) - new Date(b));

    // Calculate start and end indices for current page
    const startIndex = currentPage * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;

    // Get current page's dates
    const currentDates = sortedDates.slice(startIndex, endIndex);

    // Create datasets for current page
    const labels = currentDates;
    const totalQuantities = currentDates.map(date => dailySales[date].totalQuantity);
    const totalPrices = currentDates.map(date => dailySales[date].totalPrice);

    setSalesChartData({
      labels: labels.map(date => new Date(date).toLocaleDateString()),
      datasets: [
        {
          label: 'Quantity Sold',
          backgroundColor: '#43AA8B',
          borderColor: '#43AA8B',
          borderWidth: 1,
          hoverBackgroundColor: '#43AA8B',
          hoverBorderColor: '#43AA8B',
          data: totalQuantities,
        },
        {
          label: 'Total Sales ($)',
          backgroundColor: '#90BE6D',
          borderColor: '#90BE6D',
          borderWidth: 1,
          hoverBackgroundColor: '#90BE6D',
          hoverBorderColor: '#90BE6D',
          data: totalPrices,
        },
      ],
    });
  };

  // Employee Pie Chart Data (Dynamic from Employee Data)
  const generateEmployeeChartData = (employeeData) => {
    const departmentCounts = employeeData.reduce((acc, employee) => {
      const { department } = employee;
      acc[department] = (acc[department] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(departmentCounts);
    const values = Object.values(departmentCounts);

    setEmployeeChartData({
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: ['#F9C74F', '#43AA8B', '#90BE6D', '#F9C74F', '#F9844A', '#F8961E', '#F3722C', '#F94144'],
          hoverBackgroundColor: ['#F9C74F', '#43AA8B', '#90BE6D', '#F9C74F', '#F9844A', '#F8961E', '#F3722C', '#F94144'],
        },
      ],
    });
  };

  // Inventory Pie Chart Data (Dynamic from Inventory Data)
  const generateInventoryChartData = (inventoryData) => {
    const itemCounts = inventoryData.reduce((acc, item) => {
      const { name, quantity } = item;
      acc[name] = (acc[name] || 0) + quantity;
      return acc;
    }, {});

    const labels = Object.keys(itemCounts);
    const values = Object.values(itemCounts);

    setInventoryChartData({
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: ['#F9C74F', '#43AA8B', '#90BE6D', '#F9C74F', '#F9844A', '#F8961E', '#F3722C', '#F94144'],
          hoverBackgroundColor: ['#F9C74F', '#43AA8B', '#90BE6D', '#F9C74F', '#F9844A', '#F8961E', '#F3722C', '#F94144'],
        },
      ],
    });
  };

  // Filter employees based on search query
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 p-0 vh-100 bg-dark" style={{ position: 'fixed', left: 0, top: 0 }}>
            <Sidebar />
          </div>

          <div className="col-md-10 offset-md-1" style={{ marginTop: '5px' }}>
            <div className="mt-1 px-1">
              
              {error && <Alert variant="danger">{error}</Alert>}

              {/* Loading Spinner */}
              {isLoading && (
                <div className="text-center mt-5">
                  <Spinner animation="border" role="status" variant="primary">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                </div>
              )}

              {/* Cards Section */}
              {!isLoading && (
                <div className="row mt-5">
                  {[
                    { title: 'Total Orders', value: totalOrders, color: '#F8961E', icon: 'bi-cart' },
                    { title: 'Total Suppliers', value: totalSuppliers, color: '#43AA8B', icon: 'bi-truck' },
                    { title: 'Total Inventory', value: totalInventory, color: '#90BE6D', icon: 'bi-box' },
                    { title: 'Total Employees', value: totalEmployees, color: '#F94144', icon: 'bi-people' },
                  ].map((card, index) => (
                    <div className="col-md-3" key={index}>
                      <Card className="custom-card text-center mb-4" style={{ backgroundColor: card.color }}>
                        <Card.Body>
                          <i className={`bi ${card.icon} card-icon`}></i>
                          <Card.Title>{card.title}</Card.Title>
                          <Card.Text>{card.value}</Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              )}

              {/* Charts Section */}
              {!isLoading && (
                <>
                  <div className="row mt-4">
                    <div className="col-12">
                      <h3>Sales (Quantity vs. Price)</h3>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <Button
                            variant="outline-primary"
                            className="me-2"
                            onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                            disabled={currentPage === 0}
                          >
                            Previous
                          </Button>
                          <Button
                            variant="outline-primary"
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            disabled={(currentPage + 1) * recordsPerPage >= Object.keys(salesData).length}
                          >
                            Next
                          </Button>
                        </div>
                        <span className="text-muted">
                          Page {currentPage + 1}
                          {salesData.length > 0 && ` of ${Math.ceil(salesData.length / recordsPerPage)}`}
                        </span>
                      </div>
                      <div className="chart-container glassmorphism">
                        {chartType === 'bar' && <Bar data={salesChartData} />}
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12 col-md-6">
                      <h3>Employee Distribution</h3>
                      {employeeChartData && (
                        <div className="chart-container1 glassmorphism">
                          <Pie data={employeeChartData} />
                        </div>
                      )}
                    </div>
                    <div className="col-12 col-md-6">
                      <h3>Inventory Distribution</h3>
                      {inventoryChartData && (
                        <div className="chart-container2 glassmorphism">
                          <Doughnut  data={inventoryChartData} />
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Employees Table */}
              {!isLoading && (
                <div className="row mt-4">
                  <div className="col-12">
                    <h3>Employees</h3>
                    <Form.Control
                      type="text"
                      placeholder="Search employees..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="mb-3"
                    />
                    <Table className="custom-table glassmorphism" striped bordered hover>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Department</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredEmployees.map((employee) => (
                          <tr key={employee._id}>
                            <td>{employee.name}</td>
                            <td>{employee.department}</td>
                            <td>{employee.email}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;