import {useState, useEffect} from 'react';
import axios from 'axios';


import logo from '../logo.svg';
import '../App.css';
import '../styles/basicStyle.css';
import '../styles/layoutStyle.css';
import MenuList from '../components/Menu/MenuList';
import MenuItem from '../components/Menu/MenuItem';

import { Link } from 'react-router-dom';
import useInitialLoad from '../hooks/useInitialLoad';


function App() {

  useInitialLoad();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
		
			<div >
				<Link to={"/menu"} className="button-menu text-center" >
					<b>Menu</b>
				</Link>
			</div>
	
       
      </header>
    </div>
  );
}

export default App;
