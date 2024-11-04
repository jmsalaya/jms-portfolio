import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

function About () {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])
    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>
                    Welcome to my portfolio! I'm a self-taught web developer passionate about creating intuitive and engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript, I've honed my skills through a combination of hands-on projects and continuous learning.
                </p>
                <p>
                I thrive on solving complex problems and translating ideas into functional, user-friendly designs. My goal is to merge aesthetics with functionality, ensuring that every project not only looks great but also performs seamlessly. I’m excited to share my work and collaborate on innovative projects that make a difference!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cube-spinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faPython} color="#EFD81D"/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About