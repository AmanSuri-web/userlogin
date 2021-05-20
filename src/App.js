import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import 'bootstrap';

import {Route,Switch} from "react-router-dom"
import Login from './Login.js'
import Signup from './Signup.js'
import UserDetails from './UserDetails.js'

const App=()=>{

	return (
		<>
		
		
		
	
				<Switch>
					<Route exact path="/" component={Login}/>
          			<Route exact path="/signup" component={Signup}/>
					<Route exact path="/userdetails" component={UserDetails} />
					
				</Switch>
				
				
		</>
		)
}

export default App