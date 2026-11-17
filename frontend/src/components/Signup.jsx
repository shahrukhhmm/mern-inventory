// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Signup.css'; // Import CSS file

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/signup', { email, password });
//       if (response.data.success) {
//         navigate('/');
//       } else {
//         alert(response.data.message);
//       }
//     } catch (error) {
//       alert('Signup failed');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Sign up</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'; // Importing MDB components
import './Signup.css'; // Make sure to apply styles from here

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/signup', { email, password });
      if (response.data.success) {
        navigate('/'); // Redirect after successful signup
      } else {
        alert(response.data.message); // Display error message if signup fails
      }
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <MDBContainer fluid className="full-screen">
      <MDBCard className="text-black m-5" style={{ borderRadius: '25px', height: '100%' }}>
        <MDBCardBody>
          <MDBRow className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <form onSubmit={handleSignup}>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput
                    label='Your Email'
                    id='email'
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-100'
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput
                    label='Password'
                    id='password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='w-100'
                  />
                </div>

                <MDBBtn type="submit" className='mb-4' size='lg'>
                  Sign up
                </MDBBtn>
                
              </form>

              
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'
                alt='Signup Illustration'
                className='img-fluid'
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
};

export default Signup;
