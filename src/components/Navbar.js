import React from 'react'
import DispalyHeadLine from './DispalyHeadLine';
import Product from './Card';
import CartItem from './CartItem';

const Navbar = () => {
  return (
    <div>
       <ul className="nav h4  border-4 p-2 border-primary position-relative m-8 fs-2 justify-content-center bg-dark border-bottom border-body" data-bs-theme="dark">
  <li className="nav-item">
    <a className="nav-link text-light bg-dark" aria-current="page" href="#">
      HOME
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light bg-dark" href="#">
      STORE
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-light bg-dark" href="#">
      ABOUT
    </a>
  </li>
</ul>
    <DispalyHeadLine></DispalyHeadLine><br/>
    <CartItem/>
    </div>
  )
}

export default Navbar;