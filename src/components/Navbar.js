import {Link, Navigate} from "react-router-dom";
import {useContext} from "react";
import DispalyHeadLine from './DispalyHeadLine';
import AuthContext from "../store/auth-context";
import ProfilePic from '../Img/icon.png';

const Navbar = (props) => {
  const authCtx=useContext(AuthContext);
  const logoutFunction=()=>{
     authCtx.logout();
  }
   
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
    </Link>
  </li>

  <Link className='cart' onClick={()=> props.setShowCart(true)} to="/cart">Cart
    <sup>{props.count}</sup></Link> &nbsp; &nbsp;

    <div>  
    <Link to='/login'>Login</Link>
    </div>
    <div> &nbsp; &nbsp; 
      <Link to='/profile'>
        <img src={ProfilePic} alt=""/>
      </Link>
    </div> &nbsp; &nbsp;
    <div>
      <button type="button" className="btn btn-dark"onClick={logoutFunction}>Logout</button>
    </div>
    
</ul>
 
    <DispalyHeadLine></DispalyHeadLine>
    <div>{props.children}</div>
    </div>
  )
}

export default Navbar;