import React from 'react'
import logo from './logo.jpg';
import './For1.css';
import { Link } from 'react-router-dom';

import './Jim.css';



function Locate() {
    return (
        <div className="App">
      <header className="App-header1">
        <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="bootstrap/css/font-awesome.min.css"></link>
        </head>
        <div class="form-div">
        <img src={logo} alt='NerdWeb' height={200} width={200}></img>
		      <h2>Login Here</h2>
		      <form>
			      <input type="text" placeholder="User Name"></input>
			      <br></br>
			      <input type="password" placeholder="Password"></input>
			      <br></br>
			      <input type="submit" value="Login"></input>
          </form>
        </div>
		    
		    
      
      


      </header>
    </div>
    );
}

export default Locate