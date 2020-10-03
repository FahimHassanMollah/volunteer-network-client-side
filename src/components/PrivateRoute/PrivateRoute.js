// import React from 'react';
// import { Route } from 'react-router-dom';

// const PrivateRoute = ({ children, ...rest }) => {
//     return (
//         <div>
//             <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: location }
//             }}
//           />
//         )
//       }
//     />
//         </div>
//     );
// };

// export default PrivateRoute;