import React from 'react';
import "./Subscribe.css";

const Subscribe = () => {
    return (
        <section className='subscribe-container'>
            <div className='subscribe-info'>
                <h1>Subscribe to get updates</h1>
                <p> Lorem Ipsum has been the industry's standard 
                    dummy text ever since the 1500s, when an unknown
                     printer took a galley of type and scrambled it 
                     to make a type specimen book.
                </p>
                <div className='subscribe-inputs'>
                    <input type="text" name="fname" placeholder='enter your email'/>
                    <input type="submit" value="Subscribe"/>
                </div>
            </div>
           
        </section>
    )
}

export default Subscribe
