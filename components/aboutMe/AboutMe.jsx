import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './styles/AboutMe.css'
const AboutMe = () => {

    useEffect(()=>{
        Aos.init({duration:1000});
    }, []);
    return(
        <div className ="about-me" id="AboutMe">
            <h2><span>01. </span>About Me</h2>
            <div className="wrapper">
            <div data-aos="fade-right"className="info">
            
                
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquid dolorem ad ipsam perspiciatis explicabo? Culpa a possimus commodi quas!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <div data-aos="fade-down"className="strong-skills">
                    <ul>
                        <li data-aos="fade-right" data-aos-duration="500"><span>⇛</span> HTML5</li>
                        <li data-aos="fade-right" data-aos-duration="800"><span>⇛</span> CSS/SASS</li>
                        <li data-aos="fade-right" data-aos-duration="1100"><span>⇛</span> Javascript</li>
                    </ul>
                    <ul>
                        <li data-aos="fade-right" data-aos-duration="500"><span>⇛</span> React/Redux</li>
                        <li data-aos="fade-right" data-aos-duration="800"><span>⇛</span> Express.js</li>
                        <li data-aos="fade-right" data-aos-duration="1100"><span>⇛</span> MongoDB</li>
                    </ul>
                </div>
            </div>
            <img data-aos="fade-down"src="https://media-exp1.licdn.com/dms/image/C4D03AQEWDUgvBA9fNA/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=7kqm_zL0KdMrxzKNheNKMZMQd58spear3wNQexAVMZ0" alt="avatar"/>
                <div className="img-border">
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe;