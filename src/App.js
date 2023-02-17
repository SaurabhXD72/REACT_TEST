import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import './App.css';
import Welcome from './components/Welcome/Welcome';

const App = () => {
  return (
    <Router>
      <Header />
      
      <Routes>
     <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
      <Route path ="/welcome" element={<Welcome />} />
      </Routes>

      <Footer />
    </Router>
  );
};


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
