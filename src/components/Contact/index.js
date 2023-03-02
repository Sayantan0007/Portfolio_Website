import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {
    const [letterClass, setLetterClass ] = useState ('text-animate')
    const refForm = useRef()
    
    const fetchData =  async() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }
    
      useEffect(() => {
        fetchData();
      }, [])

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5hjtcoo', 'template_py7k94g', refForm.current, '8SFl0C88lHGerDqeg')
          .then(() => {
              alert('Message successfully sent!');
              window.location.reload(false)
          }, () => {
              alert ('Failed to send the message,please try again');
          });
      };

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15} 
                        />
                    </h1>
                    <p>
                        I am interested in long or more exciting projects and also I'm interested
                        in freelancing .If you have any queries or any exciting projects in mind 
                        don't hesitate to contact me using the below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <div className='ar'>
                                <li className='half'>
                                    <input type="text" name='name' placeholder='Name' required></input>
                                </li>
                                <li className='half'>
                                    <input type="email" name='email' placeholder='Email' required></input>
                                </li>
                                </div>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required></input>
                                </li>
                                <li>
                                    <textarea
                                    placeholder='Message'
                                    name='message'
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
          Sayantan Mondal,
          <br />
          India,
          <br />
           Diamond Harbour 743331,<br/>
           West Bengal.<br />
          <br />
          <span>sayantanmondalcr7@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[22.17279, 88.20839]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[22.17279, 88.20839]}>
              <Popup>Sayantan lives here, take your flight and come over:)</Popup>
            </Marker>
          </MapContainer>
        </div>
         </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;