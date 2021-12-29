import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { HeaderImage } from '../../assets/images';
import { faChevronUp,faBars } from '@fortawesome/free-solid-svg-icons';
import "./Header.css"
import NavbarBurgerMenu from '../navBarBurger/NavbarBurgerMenu';


const Header = () => {

    const [toggle, setToggle] = useState(false);

    const closeModel = ()=>{
        setToggle(!toggle);
    }

    return (
        <header>
            <nav id="nav_bar">
                <ul>  
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Features</a></li>
                    <li><a href='#'>Pages</a></li>
                    <li><a href='#'>Screenshots</a></li>
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <a 
                onClick={()=>setToggle(true)} 
                className='burger-icon-media'
                href="#">
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </nav>
            <div className='header'>
                <div className='header-title'>
                    <h1>Creative way to Showcase your App</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy 
                        text ever since the 1500s, when an unknown printer took
                        a galley of type and scrambled it to make a type specimen 
                        book.
                    </p>
                    <a href="#">Get Started</a>
                </div>
                <div className='header_image-info'>
                    <div className='header_image'>
                    <img src={HeaderImage} />
                    </div>
                </div>
            </div>
            
            <a className='to-top' href="#nav_bar">
                <FontAwesomeIcon icon={faChevronUp}/>
            </a>
            <NavbarBurgerMenu toggle={toggle} closeModel={closeModel}/>
        </header>
    )
}

export default Header
