import React from 'react';
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

function App() {
  return (
    <div className="">
     <Router>
        <Switch>
          <Route exact path="/">
              <Header></Header>
              <VolunterCategoryAll></VolunterCategoryAll>
          </Route>
          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>
          <Route exact path="/volunterRegister/:name">
            <VolunterRegister></VolunterRegister>
          </Route>
      
        </Switch>
     </Router>
    </div>
  );
}

export default App;
