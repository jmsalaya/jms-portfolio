import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/tr.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';




function Home(){
    const [letterClass, setLetterClass] = useState('text-animate');
    const array1 = ['o', 'h', 'n', ' ', 'm', 'a', 'r', 'k'];
    const array2 = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
                    clearTimeout(timeoutId)
                }
    }, [])

    
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={array1} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={array2} idx={22}/>
                </h1>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home