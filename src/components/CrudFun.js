import React, { useContext } from 'react'
import axios from 'axios';
import AuthContext from '../store/auth-context';

const CrudFun = (props) => {
    const authCtx=useContext(AuthContext);
    const ChangeEmail=authCtx.email.replace('@','').replace('.','')
    console.log(ChangeEmail);
    const postFun=()=>{
        axios.post(`https://crudcrud.com/api/996a403171724f099c2d60a3cba6247a/${ChangeEmail}`,authCtx)
        .then((res)=>{
            console.log("response_data after post",res.data);
        })
        .catch((error)=>{
            alert("Error",error)
        })
    }
  return (
    <div>
      <button onClick={postFun}>Post</button>
    </div>
  )
}

export default CrudFun
