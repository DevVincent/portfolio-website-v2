import React,{useEffect} from 'react'
import {Link, animateScroll as scroll} from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import './styles/Home.css'

const Home = () => {

    useEffect(()=>{
        Aos.init({duration:800});
    }, []);
    return(
        <header>
        <div className = "home" id="Home">
            <div data-aos="fade-up"className = "banner-text">
                <p data-aos="fade-right" data-aos-duration="700">Hi! my name is</p>
                <h1 data-aos="fade-right" data-aos-duration="1200">Vicente Manzano</h1>
                <h3 data-aos="fade-right" data-aos-duration="1500">I'm a Full Stack Web Developer.</h3>
                <h4 data-aos="fade-right" data-aos-duration="1600">Passionate about new technologies and developing web applications for any purpose.</h4>             
                <button 
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    <Link
                        activeClass = "active"
                        to = "AboutMe"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1100}
                    >
                    See More
                    </Link>
                </button>
                
            </div>
          
        </div>
        <div className = "logo">
                <Link
                    activeClass = "active"
                    to = "Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1100}
                >
                    <img src={require('../../images/hex.png')} alt=""/>
                </Link>
        </div>
        <div className="social-links">
            <ul>
                <a id="anchor" href="https://www.linkedin.com/in/vicente-manzano-a90864191/" target="_blank"><img id = "in" src={require('../../images/In.png')} alt=""/> </a>
                <a id="anchor" href="https://www.linkedin.com/in/vicente-manzano-a90864191/" target="_blank"><li>LinkedIn</li></a>
                <a id="anchor" href="https://github.com/DevVincent" target="_blank"><img id = "git" src={require('../../images/git.png')}  alt=""/></a>
                 
                <a id="anchor" href="https://github.com/DevVincent" target="_blank"><li>GitHub</li></a>                
            </ul>
        </div> 
        </header>      
    )
}

export default Home;