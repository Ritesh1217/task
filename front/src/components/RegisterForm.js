// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const RegisterForm = () => {
//   const [userData, setUserData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Send registration data to the backend
//       await axios.post('http://localhost:5000/users/register', userData);
//       navigate('/login'); // Redirect to the login page after successful registration
//     } catch (error) {
//       console.error('Registration error:', error);
//     }
//   };
  

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={userData.name} onChange={handleChange} placeholder="Name" />
//         <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
//         <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Paper } from '@material-ui/core';

const RegisterForm = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send registration data to the backend
      await axios.post('http://localhost:5000/users/register', userData);
      navigate('/login'); // Redirect to the login page after successful registration
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '20px', marginTop: '200px'}}>
        <Typography variant="h4" align="center" gutterBottom>Create an account</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Your Name"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Your Email"
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterForm;

