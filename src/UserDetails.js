import React, { useState }from "react";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal'
import "./index.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const Details = props => {
	
  const { username, email, address } =
    (props.location && props.location.state) || {};
const [data1, setdata1] = useState({
    username: username,
    email: email,
    address: address,
  });
const [data, setdata] = useState({
    username: username,
    email: email,
    address: address,
  });
    const [showuser, setShowuse] = useState(false);
    const [showemail, setShowemail] = useState(false);
    const [showadd, setShowadd] = useState(false);

  const InputEvent=(event)=>{
		const {name,value}=event.target;
		
		setdata((preVal)=>{
			return {
				...preVal ,
				[name]:value ,
			}
		})
	}
  
  
 
  return (
    <div className="loginContainer" >

                <div className='col-md-6 col-10 mx-auto' style={{borderRadius:'5px',borderStyle:'solid',borderWidth:'1px'}}>
                <h1>User Details</h1>
                <div style={{display:'flex'}}>
                	<div className="form-details" style={{padding:'10px'}}>
                		<h3 >Username:</h3>
                		<h3 >Email:</h3>
                		<h3 >Address:</h3>
                	</div>
      				<div className="form-details" style={{padding:'10px'}}>
       					<div style={{display:'flex',padding:'5px'}}>
          				<h5 > {data1.username}</h5> <EditIcon style={{marginLeft:'20px'}} onClick={() => setShowuse(true)}/> <DeleteIcon style={{marginLeft:'20px'}} onClick={() => {setdata1({username:'',email:data1.email,address:data1.address,});setdata({username:'',email:data.email,address:data.address,})}}/></div>
          				<div style={{display:'flex',padding:'5px'}}>
          				<h5 > {data1.email}</h5>		<EditIcon style={{marginLeft:'20px'}} onClick={() => setShowemail(true)}/> <DeleteIcon style={{marginLeft:'20px'}} onClick={() => {setdata1({username:data1.username,email:'',address:data1.address,});setdata({username:data.username,email:'',address:data.address,})}}/></div>
          				<div style={{display:'flex',padding:'5px'}}>
          				<h5 className='p_wrap' > {data1.address}</h5> 	<EditIcon style={{marginLeft:'20px'}} onClick={() => setShowadd(true)}/> <DeleteIcon style={{marginLeft:'20px'}} onClick={() => {setdata1({username:data1.username,email:data1.email,address:'',});setdata({username:data.username,email:data.email,address:'',})}}/></div>
        
        			</div>
        		</div>
        			
      				<Modal show={showuser} onHide={() => setShowuse(false)} >
        <Modal.Header >
          <Modal.Title>Edit Username</Modal.Title>
        </Modal.Header>
        <input style={{width:'80%',marginLeft:'auto',marginRight:'auto'}} type="text"  name="username" value={data.username} onChange={InputEvent}  placeholder="username"/>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {setdata((preVal)=>{
			return {
				...preVal ,
				username:data1.username ,
			}});setShowuse(false)}}>
            Close
          </button>
          <button variant="primary" onClick={() => {setdata1((preVal)=>{
			return {
				...preVal ,
				username:data.username ,
			}
		});setShowuse(false)}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showemail} onHide={() => setShowemail(false)} >
        <Modal.Header >
          <Modal.Title>Edit Email</Modal.Title>
        </Modal.Header>
        <input style={{width:'80%',marginLeft:'auto',marginRight:'auto'}} type="text"  name="email" value={data.email} onChange={InputEvent}  placeholder="email"/>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {setdata((preVal)=>{
			return {
				...preVal ,
				email:data1.email ,
			}});setShowemail(false)}}>
            Close
          </button>
          <button variant="primary" onClick={() => {setdata1((preVal)=>{
			return {
				...preVal ,
				email:data.email ,
			}
		});setShowemail(false)}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={showadd} onHide={() => setShowadd(false)} >
        <Modal.Header >
          <Modal.Title>Edit Address</Modal.Title>
        </Modal.Header>
        <textarea style={{width:'80%',marginLeft:'auto',marginRight:'auto'}} type="text" row='3'  name="address" value={data.address} onChange={InputEvent}  placeholder="address"/>
        <Modal.Footer>
          <button variant="secondary" onClick={() => {setdata((preVal)=>{
			return {
				...preVal ,
				address:data1.address ,
			}});setShowadd(false)}}>
            Close
          </button>
          <button variant="primary" onClick={() => {setdata1((preVal)=>{
			return {
				...preVal ,
				address:data.address ,
			}
		});setShowadd(false)}}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>

      			</div>
   <NavLink   to="/" style={{width:'50%',}}><button className="btn btn-outline-primary " style={{width:'50%',marginTop:'10px',left:'25%',position:'absolute'}} type="submit" >Log Out</button></NavLink>
    </div>
  );
};

export default Details;
