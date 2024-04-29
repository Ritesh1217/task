// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const bookRouter = require('./routes/books');

// const app = express();
// app.use(bodyParser.json());

// // Store MongoDB connection in a variable
// const mongoURI = 'mongodb+srv://ritesh:ritesh@cluster0.ua4gbo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };

// const dbConnection = mongoose.connect(mongoURI, options);
// dbConnection.then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('Error connecting to MongoDB:', error);
// });

// const db = mongoose.connection;

// app.use('/books', bookRouter);

// const server = app.listen(5000, () => {
//   console.log('Server started');
// });

// // Optionally, you can export the server and connection object for further use
// module.exports = { server, dbConnection };


// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import user and book routes
const userRouter = require('./routes/users');
const bookRouter = require('./routes/books');

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = 'mongodb+srv://ritesh:ritesh@cluster0.ua4gbo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
mongoose.connect(mongoURI, options)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Routes
app.use('/users', userRouter); // Use user routes
app.use('/books', bookRouter); // Use book routes

// Root endpoint handler
app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

