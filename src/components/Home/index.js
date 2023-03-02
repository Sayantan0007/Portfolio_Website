import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import {Link} from 'react-router-dom';
import LogoTitle from '../../Assets/Images/logo-s.png';
import AnimatedLetters  from '../AnimatedLetters';
import './index.scss';
import pic from '../../Assets/Images/FaceApp_1650216079759.jpg'

const Home = () => {
    const [letterClass, setLetterClass ] = useState ('text-animate')
    const nameArray =['a', 'y', 'a', 'n', 't', 'a', 'n']
    const jobArray =['a', 'n',' ', 'I', 'T', ' ', 's','t','u','d','e','n','t','.']

    const fetchData =  async() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }
    
      useEffect(() => {
        fetchData();
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
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                </h1>
                <h2>Frontend Developer/ Footballer / Gamer </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className='picture-container'>
             <img src={pic} alt="" />
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    );
}

export default Home