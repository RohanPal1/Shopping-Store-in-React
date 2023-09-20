import React from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Home from './components/Homepage/Home';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Login from './components/Header/Login';
import SignUp from './components/Header/SignUp';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>

        <Route exact path='/' element={ <Home /> }></Route>
        <Route exact path='/home' element={ <Home /> }></Route>
        <Route exact path='/about' element={ <About /> }></Route>
        <Route exact path='/products' element={ <ProductList /> }></Route>
        <Route exact path='/contact' element={ <Contact /> }></Route>
        <Route exact path='/login' element={ <Login /> }></Route>
        <Route exact path='/register' element={ <SignUp /> }></Route>

      </Routes>
     
    </div>
  );
}

export default App;
