import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ShareImage } from '../../assets/images';
import "./Share.css";
import { faLayerGroup,faBrush,faTint,faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Share = () => {
    return (
      <section className='share_container'>
          <div className='share'>
                <div className='share-details'>
                    <h1>Share your photos with friends easily</h1>
                    <div className='share-details-info'>
                        <div className='share-details-icon'>
                            <FontAwesomeIcon icon={faLayerGroup}/>
                        </div>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='share-details-info'>
                        <div className='share-details-icon'>
                            <FontAwesomeIcon icon={faBrush}/>
                        </div>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='share-details-info'>
                        <div className='share-details-icon'>
                            <FontAwesomeIcon icon={faTint}/>
                        </div>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='share-details-info'>
                        <div className='share-details-icon'>
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </div>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <a>Learn More</a>
                </div>
                <div className='share_img'>
                        <img src={ShareImage}/>
                </div>
          </div>
      </section>
    )
}

export default Share;
