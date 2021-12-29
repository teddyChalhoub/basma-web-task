import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./Contact.css";

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className='contact-title-info'>
                <h1 className='contact-title'>Stay Tuned</h1>
                <p>Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,when an unknown printer took a galley of type.
                </p>
            </div>
            <div className='contact-info'>
                <div className='contact-info-details'>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                    </p>
                    <div className='contact-details-description'>
                        <div className='contact-details-icon'>
                            <svg class="svg-inline--fa fa-home fa-w-18" 
                                aria-hidden="true" focusable="false" 
                                data-prefix="fas" data-icon="home" 
                                role="img" xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 576 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 
                                0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 
                                16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12
                                0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6
                                16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 
                                0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                                </path>
                            </svg>
                        </div>
                        <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='contact-details-description'>
                        <div className='contact-details-icon'>
                          
                            <svg class="svg-inline--fa fa-phone-alt fa-w-16" 
                                aria-hidden="true" focusable="false" 
                                data-prefix="fas" data-icon="phone-alt" 
                                role="img" xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 
                                60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16
                                24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0
                                23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z">
                                </path>
                            </svg>

                        </div>
                        <p>+1 230 456 789-012 345 6789</p>
                    </div>
                    <div className='contact-details-description'>
                        <div className='contact-details-icon'>
                         
                            <svg class="svg-inline--fa fa-envelope fa-w-16" 
                                aria-hidden="true" focusable="false" 
                                data-prefix="fas" data-icon="envelope" 
                                role="img" xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 512 512" data-fa-i2svg="">
                                <path fill="currentColor" d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 
                                48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 
                                21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 
                                320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 
                                9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 
                                30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg>
                        </div>
                        <p>exampledomain@domain.com</p>
                    </div>
                </div>
                <div className='contact-form-inputs'>
                    <form method="post" action='#' id="contact-form">
                        <input type="text" name="name" placeholder='Name'/>
                        <input type="text" name="email" placeholder='Email'/>
                        <input type="text" name="subject" placeholder='Subject'/>
                        <textarea rows="6" cols="50" name="message" placeholder='Message' form="contact-form"></textarea>
                        <div className='submit-icon'>
                            <span className='icon'>
                                <FontAwesomeIcon icon={faPaperPlane}/>
                            </span>
                            <input type="submit" value="Send Message"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
