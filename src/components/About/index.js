import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular,faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About= () => {

    const [letterClass, setLetterClass ] = useState ('text-animate')
    const fetchData =  async() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }
    
      useEffect(() => {
        fetchData();
      }, [])

    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    Hi I am Sayantan Mondal, a 21 year old b.tech engineer from IT department. 
                    A very ambitious front end developer looking for a role in established IT company 
                    with the latest technologies.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and working on
                    imprving my skills in backend development.
                </p>
                <p>
                If I need to define myself in one sentence that would be a 
                sports lover, and tech-obsessed!!!
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color='#dd0031'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About