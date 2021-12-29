import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppImage, DownloadImage, SettingsImage } from '../../assets/images';
import "./CodeChallenge2.css";

const CodeChallenge2 = () => {
    return (
      <section className='code-challenge2-container'>

            <div className='code-challenge2-title-info'>
                <h1 className='code-challenge2-title'>Code Challenge</h1>
                <p>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,when an unknown printer took a galley of type.
                </p>
            </div>
            <div  className='code-challenge2-details'>
                <div  className='code-challenge2-details-info'>
                    <div className='code-challenge2-details-img'>                    
                      <img src={DownloadImage}/>
                    </div>
                    <h3>Install the App</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <div className='right-arrow'>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
                <div  className='code-challenge2-details-info'>
                    <div className='code-challenge2-details-img'>                    
                      <img src={SettingsImage}/>
                    </div>
                    <h3>Setup your profile</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <div className='right-arrow'>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>
                <div  className='code-challenge2-details-info'>
                    <div className='code-challenge2-details-img'>                    
                      <img src={AppImage}/>
                    </div>
                    <h3>Enjoy the features!</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
            </div>

      </section>
    )
}

export default CodeChallenge2
