import React from 'react'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarStyle } from '../Styles'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav" id='elements'>
                        <li class="nav-item">
                            <Link to='/' class="nav-link" aria-current="page" id='links'>Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link" id='links'>About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/service' class="nav-link" id='links'>Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/contact' class="nav-link" id='links' tabindex="-1" aria-disabled="true">Contact Us</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav" id='nav-buttons'>
                        <Link to='' class="nav-link" aria-current="page" id='links'><FontAwesomeIcon icon={faUser}/></Link>
                        <Link to='/signin' class="btn mt-2" id='signin'>SignIn</Link>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar