import {Link, Navigate} from "react-router-dom";
import {useContext, useState} from "react";
import DispalyHeadLine from './DispalyHeadLine';
import AuthContext from "../store/auth-context";
import ProfilePic from '../Img/icon.png';
import classes from './Navbar.module.css';
import CrudFun from "./CrudFun";
import Login from "./Login";
import Home from "./Home";

const Navbar = (props) => {

   
  
  const authCtx=useContext(AuthContext);
       
   
  return (
    <div>
       <ul className="nav h4  border-4 p-2 border-primary position-relative m-8 fs-2 justify-content-center bg-dark border-bottom border-body" data-bs-theme="dark">
  <li className="nav-item">
    <Link className="nav-link text-light bg-dark" aria-current="page" to="/">
      HOME
    </Link>
  </li>
   
  <li className="nav-item">
    <Link className="nav-link text-light bg-dark" to="/store">
      STORE
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link text-light bg-dark" to="/about">
      ABOUT
    </Link> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  </li>

  <Link className={classes.cart} to="/cart">Cart
    <sup className={classes.count}>{props.count}</sup></Link> &nbsp; &nbsp;

    <div> 
    <Link to='/login'>Login</Link>
    </div>
    <div> &nbsp; &nbsp; 
      <Link to='/profile'>
        <img src={ProfilePic} alt=""/>
      </Link>
    </div> &nbsp; &nbsp;
    <div>
      <button type="button" className="btn btn-dark" onClick={()=>authCtx.logout()}>Logout</button>
    </div>
    {/* onClick={()=>authCtx.logOut()} */}
    {/* onClick={()=>function} */}
</ul>
    <DispalyHeadLine/>
    {/* {authCtx.isLoggedIn ? <CrudFun/>: null} */}
    <div>{props.children}</div>
    </div>
  )
}

export default Navbar;