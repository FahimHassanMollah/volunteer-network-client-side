import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import VolunterCategoryAll from './components/Header/VolunterCategoryAll/VolunterCategoryAll';
import LogIn from './components/LogIn/LogIn';
import VolunterRegister from './components/VolunteerRegister/VolunterRegister';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const LoggedInUserContext = React.createContext()
function App() {
  const [user, setUser] = useState({})
  return (
    <div className="">
     <LoggedInUserContext.Provider value={[user, setUser]}>
     <Router>
        <Switch>
          <Route exact path="/">
              <Header></Header>
              <VolunterCategoryAll></VolunterCategoryAll>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute exact path="/volunterRegister/:name">
            <VolunterRegister></VolunterRegister>
          </PrivateRoute>
      
        </Switch>
     </Router>
     </LoggedInUserContext.Provider>
    </div>
  );
}

export default App;
