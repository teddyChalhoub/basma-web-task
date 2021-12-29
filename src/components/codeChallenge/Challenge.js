import React from 'react';
import "./Challenge.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer,faFingerprint,faMapMarkerAlt,faCogs,faGlobe } from '@fortawesome/free-solid-svg-icons';

const Challenge = () => {
    return (
        <section className='code-challenge'>
            <div className='code-challenge-title-info'>
                <h1 className='code-challenge-title'>Code Challenge</h1>
                <p>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,when an unknown printer took a galley of type.
                </p>
            </div>
            <div  className='code-challenge-details'>
                <div  className='code-challenge-details-info'>
                    <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faHandPointer} size='4x'/>
                    </div>
                    <h3>Fully functional</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div  className='code-challenge-details-info'>
                    <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faFingerprint} size='4x'/>
                    </div>
                    <h3>Fully functional</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div  className='code-challenge-details-info'>
                    <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faHandPointer} size='4x'/>
                    </div>
                    <h3>Fully functional</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div  className='code-challenge-details-info'>
                    <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faMapMarkerAlt} size='4x'/>
                    </div>
                    <h3>Location Tracking</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div  className='code-challenge-details-info'>
                    <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faCogs} size='4x'/>
                    </div>
                    <h3>Powerful Settings</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div  className='code-challenge-details-info'>
                <div className='code-challenge-details-img'>                    
                        <FontAwesomeIcon icon={faGlobe} size='4x'/>
                    </div>
                    <h3>Multiple Language</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>
        </section>
    )
}

export default Challenge
