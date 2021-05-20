import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./index.css";

const Signup = props => {
	const history = useHistory();
  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    address: "",
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setdata(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const formSubmit=(e)=>{
		

		e.preventDefault()
		
		if(data.username===''||data.email===''||data.password===''||data.confirmpassword===''||data.address===''){
			alert(`Fill out all the fields`)

		}
		else if(data.password!==data.confirmpassword){
			alert(`Incorrect password`)
		}
		else{
			history.push({
            	pathname: "/userdetails",
            	state:{username:data.username,email:data.email,address:data.address}
          })
		 
		}
	}
  return (
    <div className="row" style={{width:'100%',marginLeft:'auto',marginRight:'auto',top:'20%',position:'absolute'}}>
      <div className='col-md-6 col-10 mx-auto' style={{backgroundColor:'white',borderRadius:'5px',padding:'10px',borderStyle:'solid',borderWidth:'1px'}}>
      
      <Form className="register-form" onSubmit={formSubmit} style={{backgroundColor:'white'}}>
      <h1>Sign Up Form</h1>
        <Form.Group controlId="username" style={{backgroundColor:'white'}}>
          <Form.Label style={{backgroundColor:'white'}}>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="email" style={{backgroundColor:'white'}}>
          <Form.Label style={{backgroundColor:'white'}}>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password" style={{backgroundColor:'white'}}>
          <Form.Label style={{backgroundColor:'white'}}>password</Form.Label>
          <Form.Control
            type="Password"
            placeholder="Enter password"
            name="password"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmpassword" style={{backgroundColor:'white'}}>
          <Form.Label style={{backgroundColor:'white'}}>Confirm password</Form.Label>
          <Form.Control
            type="password"
            placeholder="confirm password"
            name="confirmpassword"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="address" style={{backgroundColor:'white'}}>
          <Form.Label style={{backgroundColor:'white'}}>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter address"
            name="address"
            onChange={handleInputChange}
          />
        </Form.Group>
         <button class="btn btn-outline-primary" type="submit" style={{width:'100%'}}>Sign Up</button>
        
      </Form>
    </div>
    </div>
  );
};

export default Signup;

	