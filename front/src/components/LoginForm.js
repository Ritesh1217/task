// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
// import axios from 'axios';

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({ email: '', password: '' });
//   const navigate = useNavigate(); // Initialize the navigate function

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/users/login', credentials); // Ensure the correct backend URL
//       localStorage.setItem('token', response.data.token);
//       navigate('/'); // Redirect to the homepage after successful login
//     } catch (error) {
//       console.error('Login error:', error.response.data.message); // Log the error message
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" />
//         <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;


// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Grid, Paper } from '@material-ui/core';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users/login', credentials);
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to the homepage after successful login
    } catch (error) {
      console.error('Login error:', error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '20px',  marginTop: '200px' }}>
        <Typography variant="h4" align="center" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                value={credentials.email}
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
                value={credentials.password}
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
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginForm;
