import React from 'react';
import { Route } from 'react-router-dom'
import styled from 'styled-components';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
