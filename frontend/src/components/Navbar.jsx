import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
// import '../home.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector(state => state.user);

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/" onClick={() => setShow(false)}>Home</Link>
            </li>
            <li>
              <Link to="/jobs" onClick={() => setShow(false)}>Jobs</Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to="/dashboard" onClick={() => setShow(false)}>Dashboard</Link>
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={() => setShow(false)}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  )
}

export default Navbar;
