import React from 'react';
// import { Router } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,  
  Link,
  Switch,
} from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header classNapme="container" />
      <Routes>
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
