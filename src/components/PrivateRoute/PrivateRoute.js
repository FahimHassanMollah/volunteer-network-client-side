import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoggedInUserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useContext(LoggedInUserContext);
    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
       user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;