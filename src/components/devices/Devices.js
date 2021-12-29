import React from 'react';
import { AppStoreImage, GooglePlayImage } from '../../assets/images';
import "./Devices.css";

const Devices = () => {
    return (
       <section className='devices-container'>
           <div className='devices-container-details'>
                <h1>BASMA is available for all devices</h1>
                <p> Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged.
                </p>
            </div>
            <div className='devices-container-img'>
                <div className='device-kind'>
                    <img src={GooglePlayImage} />
                </div>
                <div className='device-kind'>
                    <img src={AppStoreImage} />
                </div>
            </div>
            <p>* Available on iPhone, iPad and all Android devices</p>
       </section>
    )
}

export default Devices
