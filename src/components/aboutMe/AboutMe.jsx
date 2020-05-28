import React from 'react'
import './styles/AboutMe.css'
const AboutMe = () => {
    return(
        <div className ="about-me">
            <h2><span>01. </span>About Me</h2>
            <div className="wrapper">
            <div className="info">
            
                
                <br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aliquid dolorem ad ipsam perspiciatis explicabo? Culpa a possimus commodi quas!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, hic repellendus libero quia necessitatibus optio? Obcaecati, enim autem magni expedita sint sed rem? Dolores, tenetur.</p>
                <div className="strong-skills">
                    <ul>
                        <li><span>⇛</span> HTML5</li>
                        <li><span>⇛</span> CSS/SASS</li>
                        <li><span>⇛</span> Javascript</li>
                    </ul>
                    <ul>
                        <li><span>⇛</span> React/Redux</li>
                        <li><span>⇛</span> Node.js</li>
                        <li><span>⇛</span> Express.js</li>
                    </ul>
                </div>
            </div>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEWDUgvBA9fNA/profile-displayphoto-shrink_400_400/0?e=1596067200&v=beta&t=7kqm_zL0KdMrxzKNheNKMZMQd58spear3wNQexAVMZ0" alt="avatar-image"/>
                <div className="img-border">
                </div>
            </div>
            
            
        </div>
    )
}

export default AboutMe;