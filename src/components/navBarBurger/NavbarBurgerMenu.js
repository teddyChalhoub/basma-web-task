import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { createPortal } from 'react-dom';
import "./NavbarBurgerMenu.css"

const NavbarBurgerMenu = ({toggle,closeModel}) => {

    if(!toggle){
        return null
    }else{
        return createPortal(
            <div className='burger-nav'>
                <div className='burger-nav-links'>
                     <ul>  
                         <li><a href='#'>Home</a></li>
                         <li><a href='#'>Features</a></li>
                         <li><a href='#'>Pages</a></li>
                         <li><a href='#'>Screenshots</a></li>
                         <li><a href='#'>Pricing</a></li>
                         <li><a href='#'>Contact</a></li>
                     </ul>
                </div>
                 <div onClick={closeModel} className='burger-nav-close'>
                     <FontAwesomeIcon icon={faTimes}/>
                 </div>
            </div> 
            ,
            document.getElementById('model')
         );
    }
}

export default NavbarBurgerMenu
