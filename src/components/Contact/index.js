import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef()

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('service_4t7iten', 'template_da6v3mn', refForm.current, {
            publicKey: 'XnMTeu_f7QBPKgcZu',
        })
        .then(
            () => {
              alert('Message successfully sent!');
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again');
            },
          );
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}/>
                    </h1>
                    
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required/>
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject'required/>
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    John Mark Salaya,
                    <br/>
                    Philippines,
                    <br/>
                    Brgy. Dos Hermanas, Talisay City, <br/>
                    Negros Occidental
                    <br/>
                    <span>jmsalaya3@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[10.7438, 123.0395]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[10.7438, 123.0395]}>
                </Marker>
                </MapContainer>
                </div>
            </div>
            <Loader type='pacman'/>
        </>
    )

}

export default Contact