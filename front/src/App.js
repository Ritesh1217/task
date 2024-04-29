// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import BooksList from '../src/components/BooksList';
// import BookDetails from '../src/components/BookDetails';
// import AddBookForm from '../src/components/AddBookForm';
// import EditBookForm from '../src/components/EditBookForm';
// import LoginForm from '../src/components/LoginForm';
// import RegisterForm from '../src/components/RegisterForm';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         <Route path="/register" element={<RegisterForm />} />
//         <Route path="/" element={<BooksList />} />
//         <Route path="/add" element={<AddBookForm />} />
//         <Route path="/edit/:id" element={<EditBookForm />} />
//         <Route path="/details/:id" element={<BookDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksList from '../src/components/BooksList';
import BookDetails from '../src/components/BookDetails';
import AddBookForm from '../src/components/AddBookForm';
import EditBookForm from '../src/components/EditBookForm';
import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';

function App() {
  return (
    <BrowserRouter>
      <div style={{ overflowX: 'hidden', maxWidth: '90%', margin: '0 auto' }}>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<BooksList />} />
          <Route path="/add" element={<AddBookForm />} />
          <Route path="/edit/:id" element={<EditBookForm />} />
          <Route path="/details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
