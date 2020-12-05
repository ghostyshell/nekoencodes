import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';
import './Navbar.css';

function Navbar({ dataLoaded, setDataLoaded }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Neko Encodes
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/encodes" className="nav-links" onClick={closeMobileMenu}>
              Encodes
              {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {/* {dropdown && <Dropdown />} */}
          </li>
        </ul>
        {/* <Button
          onClick={() => {
            setDataLoaded(!dataLoaded);
          }}
        /> */}
      </nav>
    </>
  );
}

export default Navbar;
