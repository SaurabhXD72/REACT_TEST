import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
//import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
