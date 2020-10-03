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

function App() {
  return (
    <div className="">
     <Router>
      <Header></Header>
      <VolunterCategoryAll></VolunterCategoryAll>
     </Router>
    </div>
  );
}

export default App;
