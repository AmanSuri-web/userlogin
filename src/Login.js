import React,{useState} from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";
import axios from "axios";
const jwt = require("jsonwebtoken")


const Login=()=>{
	
    const [data,setData]=useState({
		
		email : '' ,
		password : '' ,
       

	})
    const InputEvent=(event)=>{
		const {name,value}=event.target;
		
		setData((preVal)=>{
			return {
				...preVal ,
				[name]:value ,
			}
		})
	}
        return (<>
                  <div >  
                <div className="loginContainer">
                <div className='col-md-4 col-10 mx-auto' style={{backgroundColor:' white',borderRadius: '5px',padding:'10px',borderStyle:'solid',borderWidth:'1px'}}>
                 <h1>Login Form</h1>
                    <label for="exampleFormControlInput1" className="form-label" style={{backgroundColor:' white'}}>Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
                    <label for="exampleFormControlInput1" className="form-label mt-2" style={{backgroundColor:' white'}}>Password</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" name="password" value={data.password} onChange={InputEvent}  placeholder="password"/>
                    <NavLink   to="#" style={{width:'100%',backgroundColor:'white'}}><button className="btn btn-outline-primary " style={{width:'100%',marginTop:'10px'}} type="submit" >Login</button></NavLink>
                    <br/>
                    <div className='mt-2' style={{display:'flex',textAlign:'center',backgroundColor:' white'}}>
                    <p style={{backgroundColor:' white'}}>Don't have an account? </p><NavLink style={{marginLeft:'10px'}}  to="/signup">Sign Up</NavLink>
                    </div>
                </div>
                </div>
                </div>    
		</>);
}
export default Login;