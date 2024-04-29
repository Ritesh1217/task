// // src/components/PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element, ...rest }) => {
//   const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated

//   return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" />;
// };

// export default PrivateRoute;


import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is authenticated

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
