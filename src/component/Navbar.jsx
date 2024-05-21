import React, { useState } from 'react';
import SearchBar from './SearchBar';

export const Navbar = ({ category, user, onLogout, setView }) => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#" onClick={() => setView('home')}>LA COLLECTION</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={() => setView('home')}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView('products')}>Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView('about')}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => setView('contact')}>Contact</a>
              </li>
              <li className="nav-item">
                <SearchBar category={category} />
              </li>
            </ul>
            <div className="buttons">
              {user ? (
                <>
                  <span className="navbar-text me-2">Welcome, {user.username}</span>
                  <button className="btn btn-outline-dark" onClick={onLogout}>
                    <i className="fa fa-sign-out me-1" aria-hidden="true"></i> Logout
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-outline-dark" onClick={() => setView('login')}>
                    <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login
                  </button>
                  <button className="btn btn-outline-dark ms-2" onClick={() => setView('register')}>
                    <i className="fa fa-registered" aria-hidden="true"></i> Register
                  </button>
                </>
              )}
              <button className="btn btn-outline-dark ms-2" onClick={() => setView('cart')}>
                <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i> Cart({cartItems.length})
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;