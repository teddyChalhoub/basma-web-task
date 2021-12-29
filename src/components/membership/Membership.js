import React, { useState } from 'react';
import { BikeImage, MotorBikeImage } from '../../assets/images';
import SignUpForm from '../SignUpForm/SignUpForm';
import "./Membership.css";

const Membership = () => {
    const [toggle, setToggle] = useState(false);

    const closeModel = ()=>{
        setToggle(!toggle);
    }
    return (
       <section className='membership-container'>
            <div className='membership-title-info'>
                <h1 className='membership-title'>BASMA Code Challenge</h1>
                <p>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,when an unknown printer took a galley of type.
                </p>
            </div>
            <div className='membership-details-message'>
                <div className='membership-details'>
                        <div className='membership-details-img'>
                            <img src={BikeImage}/>
                        </div>
                        <h1>BASIC</h1>
                        <h1>
                            <span className='dollar-sign'>$</span>
                            <span className='price'>49</span>
                        </h1>
                        <div className='membership-details-info'>
                            <p>5GB Linux Web Space</p>
                            <p>5 MySQL Databases</p>
                            <p>24/7 Tech Support</p>
                            <p>Daily Backups</p>
                        </div>
                        <a onClick={closeModel}>SignUp</a>
                </div>

                <div className='membership-details'>
                        <div className='membership-details-img'>
                            <img src={MotorBikeImage}/>
                        </div>
                        <h1>Pro</h1>
                        <h1>
                            <span className='dollar-sign'>$</span>
                            <span className='price'>129</span>
                        </h1>
                        <div className='membership-details-info'>
                            <p>10GB Linux Web Space</p>
                            <p>50 MySQL Databases</p>
                            <p>Unlimited Email</p>
                            <p>Daily Backups</p>
                        </div>
                        <a onClick={closeModel}>SignUp</a>
                </div>
            </div>
            <p>Not sure what to choose? <a href="#">Contacts Us</a></p>
            <SignUpForm toggle={toggle}  closeModel={closeModel}/>
       </section>
    )
}

export default Membership
