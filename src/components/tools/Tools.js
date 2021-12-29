import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToolsImage } from '../../assets/images';
import "./Tools.css";
import { faCheck,faBell,faEnvelopeOpen,faVideo } from '@fortawesome/free-solid-svg-icons';


const Tools = () => {
    return (
      <section className='tools_container'>
          <div className='tools'>
                <div className='tools_img'>
                        <img src={ToolsImage}/>
                </div>
                <div className='tools-details'>
                    <h1>Work faster with powerful tools</h1>
                    <div className='tools-details-info'>
                        <FontAwesomeIcon icon={faCheck} color='#741EF7'/>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='tools-details-info'>
                        <FontAwesomeIcon icon={faCheck} color='#741EF7'/>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='tools-details-info'>
                        <FontAwesomeIcon icon={faCheck} color='#741EF7'/>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='tools-details-info'>
                        <FontAwesomeIcon icon={faCheck} color='#741EF7'/>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='tools-details-info'>
                        <FontAwesomeIcon icon={faCheck}  color='#741EF7'/>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='tools-details-icons'>
                        <div className='tools-details-icon'>
                            <FontAwesomeIcon icon={faBell} color='#741EF7'/>
                        </div>
                        <div className='tools-details-icon'>
                            <FontAwesomeIcon icon={faEnvelopeOpen} color='#741EF7'/>
                        </div>
                        <div className='tools-details-icon'>
                            <FontAwesomeIcon icon={faVideo}/>
                        </div>
                    </div>
                </div>
          </div>
      </section>
    )
}

export default Tools
