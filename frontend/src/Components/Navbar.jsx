import React, { useEffect, useState } from 'react'
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavbarStyle } from './Styles'
import { Link, useNavigate } from 'react-router-dom';
import { retrieveId } from '../Services/getToken';


const Navbar = () => {
    const navigate = useNavigate()
    const decodedToken = retrieveId()
    const [user_id, setUser_id] = useState('')

    useEffect(() => {
        if(decodedToken){
            setUser_id(decodedToken.id)
    
            // if(decodedToken.role === 'admin' || decodedToken.role === 'instructer'){
            //     navigate('/signin')
            // }
        }
        else{
            setUser_id('')
        }
    })
    console.log('de :', decodedToken)

  return (
  
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
                        <Link to={user_id ? '/userprofile' : '/signin'} class="nav-link" aria-current="page" id='links'><FontAwesomeIcon icon={faUser}/></Link>
                        <Link to='/signin' class="btn mt-2" id='signin'>SignIn</Link>
                    </ul>
                </div>
            </div>
        </nav>
    
  )
}

export default Navbar