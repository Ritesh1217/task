// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Typography,
// } from '@material-ui/core';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   form: {
//     '& > *': {
//       margin: '10px 0',
//     },
//   },
//   heading: {
//     margin: '20px 0',
//     textAlign: 'center',
//   },
// });

// const BooksList = () => {
//   const classes = useStyles();
//   const [books, setBooks] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [mode, setMode] = useState('list'); // 'list', 'add', 'edit', 'details'
//   const [formData, setFormData] = useState({ title: '', author: '', publishedYear: '' });

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/books');
//       setBooks(response.data);
//     } catch (error) {
//       console.error('Error fetching books:', error);
//     }
//   };

//   const handleAddBookClick = () => {
//     setMode('add');
//   };

//   const handleEditBookClick = (book) => {
//     setSelectedBook(book);
//     setFormData({ title: book.title, author: book.author, publishedYear: book.publishedYear });
//     setMode('edit');
//   };

//   const handleBookDetailsClick = (book) => {
//     setSelectedBook(book);
//     setMode('details');
//   };

//   const handleCancelClick = () => {
//     setMode('list');
//     setSelectedBook(null);
//     setFormData({ title: '', author: '', publishedYear: '' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (mode === 'add') {
//         await axios.post('http://localhost:5000/books', formData);
//       } else if (mode === 'edit' && selectedBook) {
//         await axios.put(`http://localhost:5000/books/${selectedBook._id}`, formData);
//       }
//       fetchBooks();
//       handleCancelClick();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDeleteBook = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/books/${id}`);
//       fetchBooks();
//     } catch (error) {
//       console.error('Error deleting book:', error);
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h4" className={classes.heading}>Books List</Typography>

//       {mode === 'list' && (
//         <div>
//           <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Title</TableCell>
//                   <TableCell>Author</TableCell>
//                   <TableCell>Published Year</TableCell>
//                   <TableCell>Actions</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {books.map((book) => (
//                   <TableRow key={book._id}>
//                     <TableCell>{book.title}</TableCell>
//                     <TableCell>{book.author}</TableCell>
//                     <TableCell>{book.publishedYear}</TableCell>
//                     <TableCell>
//                       <Button variant="outlined" color="primary" onClick={() => handleEditBookClick(book)}>Edit</Button>
//                       <Button variant="outlined" color="primary" onClick={() => handleBookDetailsClick(book)}>Details</Button>
//                       <Button variant="outlined" color="secondary" onClick={() => handleDeleteBook(book._id)}>Delete</Button>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//           <Button variant="contained" color="primary" onClick={handleAddBookClick}>Add Book</Button>
//         </div>
//       )}

//       {(mode === 'add' || mode === 'edit') && (
//         <div>
//           <Typography variant="h4">{mode === 'add' ? 'Add Book' : 'Edit Book'}</Typography>
//           <form className={classes.form} onSubmit={handleSubmit}>
//             <TextField type="text" name="title" value={formData.title} onChange={handleChange} label="Title" variant="outlined" fullWidth />
//             <TextField type="text" name="author" value={formData.author} onChange={handleChange} label="Author" variant="outlined" fullWidth />
//             <TextField type="text" name="publishedYear" value={formData.publishedYear} onChange={handleChange} label="Published Year" variant="outlined" fullWidth />
//             <Button type="submit" variant="contained" color="primary">{mode === 'add' ? 'Add' : 'Save'}</Button>
//             <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
//           </form>
//         </div>
//       )}

//       {mode === 'details' && selectedBook && (
//         <div>
//           <Typography variant="h4">Book Details</Typography>
//           <Typography>Title: {selectedBook.title}</Typography>
//           <Typography>Author: {selectedBook.author}</Typography>
//           <Typography>Published Year: {selectedBook.publishedYear}</Typography>
//           <Button variant="contained" onClick={handleCancelClick}>Back to List</Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BooksList;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200, // Set the maximum width of the content container
    margin: '0 auto', // Center the content horizontally
    overflowX: 'hidden', // Hide horizontal overflow
  },
  table: {
    minWidth: 650,
  },
  form: {
    '& > *': {
      margin: '10px 0',
    },
  },
  heading: {
    margin: '20px 0',
    textAlign: 'center',
  },
});

const BooksList = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [mode, setMode] = useState('list'); // 'list', 'add', 'edit', 'details'
  const [formData, setFormData] = useState({ title: '', author: '', publishedYear: '' });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleAddBookClick = () => {
    setMode('add');
  };

  const handleEditBookClick = (book) => {
    setSelectedBook(book);
    setFormData({ title: book.title, author: book.author, publishedYear: book.publishedYear });
    setMode('edit');
  };

  const handleBookDetailsClick = (book) => {
    setSelectedBook(book);
    setMode('details');
  };

  const handleCancelClick = () => {
    setMode('list');
    setSelectedBook(null);
    setFormData({ title: '', author: '', publishedYear: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === 'add') {
        await axios.post('http://localhost:5000/books', formData);
      } else if (mode === 'edit' && selectedBook) {
        await axios.put(`http://localhost:5000/books/${selectedBook._id}`, formData);
      }
      fetchBooks();
      handleCancelClick();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDeleteBook = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className={classes.root}  style={{  marginTop: '80px'}}>
      <Typography variant="h4" className={classes.heading} style={{ fontWeight: 'bold' }}>Books List</Typography>


      {mode === 'list' && (
        <div>
         <TableContainer component={Paper} style={{ border: '1px solid black', maxWidth: '95%' }}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Author</TableCell>
                  <TableCell>Published Year</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book._id}>
                    <TableCell>{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.publishedYear}</TableCell>
                    <TableCell>
                      <Button variant="outlined" color="primary" onClick={() => handleEditBookClick(book)}>Edit</Button>
                      <Button variant="outlined" color="primary" onClick={() => handleBookDetailsClick(book)}>Details</Button>
                      <Button variant="outlined" color="secondary" onClick={() => handleDeleteBook(book._id)}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="primary" onClick={handleAddBookClick}  style={{  marginTop: '10px'}}>Add Book</Button>
        </div>
      )}

      {(mode === 'add' || mode === 'edit') && (
        <div>
          <Typography variant="h4">{mode === 'add' ? 'Add Book' : 'Edit Book'}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField type="text" name="title" value={formData.title} onChange={handleChange} label="Title" variant="outlined" fullWidth />
            <TextField type="text" name="author" value={formData.author} onChange={handleChange} label="Author" variant="outlined" fullWidth />
            <TextField type="text" name="publishedYear" value={formData.publishedYear} onChange={handleChange} label="Published Year" variant="outlined" fullWidth />
            <Button type="submit" variant="contained" color="primary">{mode === 'add' ? 'Add' : 'Save'}</Button>
            <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
          </form>
        </div>
      )}

      {mode === 'details' && selectedBook && (
        <div>
          <Typography variant="h4">Book Details</Typography>
          <Typography>Title: {selectedBook.title}</Typography>
          <Typography>Author: {selectedBook.author}</Typography>
          <Typography>Published Year: {selectedBook.publishedYear}</Typography>
          <Button variant="contained" onClick={handleCancelClick}>Back to List</Button>
        </div>
      )}
    </div>
  );
};

export default BooksList;
