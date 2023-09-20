import React from 'react';
import './Navbar.css'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const cart = useSelector(state => state.cartReducer.cart);

    let count = 0;
    cart.forEach(item => count += item.quantity);

  return (

    <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 
        shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand" to="/home">
              ShopKart
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
                data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/about">
                    About
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" to='/products'>
                    Products
                  </NavLink>

                  {/* <li className="nav-item">
                  <NavLink className="nav-link active" to='/product/1'>
                    Product 1
                  </NavLink>
                  </li> */}
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link active" to="/contact">
                    Contact Us
                  </NavLink>
                </li>

              </ul>
              <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark">
                    <i className="fa fa-sign-in"></i> Login</NavLink>
                
                <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-user-plus"></i> Register</NavLink>

                <NavLink to="" className="btn btn-outline-dark ms-2">
                    <i className="fa fa-shopping-cart"></i> Cart({count})</NavLink>

              </div>
            </div>
          </div>
          {/* <div className="right-layout">
          <div className="cart-layout">
            <NavLinkiOutlineShoppingCart />
            <h4>{count}</h4>
          </div>
        </div> */}
        </nav>
  
        
    </>
    
     
  );
};

export default Navbar;
