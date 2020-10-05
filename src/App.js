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
import Event from './components/Event/Event';
import Blog from './components/Blog/Blog';
import Donaition from './components/Donation/Donaition';
import NoMatch from './components/NoMatch/NoMatch';
import AdminVolunteerRegisterList from './components/AdminVolunteerRegisterList/AdminVolunteerRegisterList';
import AdminAddEvent from './components/AdminAddEvent/AdminAddEvent';
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
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/donation">
            <Donaition></Donaition>
          </Route>
          <Route exact path="/addEvent">
            <AdminAddEvent></AdminAddEvent>
          </Route>
          <PrivateRoute exact path="/volunterRegister/:name">
            <VolunterRegister></VolunterRegister>
          </PrivateRoute >
          <PrivateRoute exact path="/event">
            <Event></Event>
          </PrivateRoute>
          <Route exact path="/volunteerRegisterlist">
            <AdminVolunteerRegisterList></AdminVolunteerRegisterList>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
     </Router>
     </LoggedInUserContext.Provider>
    </div>
  );
}

export default App;
