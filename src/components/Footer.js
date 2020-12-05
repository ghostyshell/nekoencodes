import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <>
      <nav className='footer'>
        <div className='footer-container'>
          <Link to='/sign-up' className='footer-link'>
            Sign Up
          </Link>
          <Link to='/faq' className='footer-link'>
            FAQs
          </Link>
          <Link to='/report' className='footer-link'>
            Report
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Footer;
