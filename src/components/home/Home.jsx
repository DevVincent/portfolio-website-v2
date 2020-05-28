import React from 'react'

import './styles/Home.css'

const Home = () => {
    return(
    <header>

        <div className = "home">
            <div className = "banner-text">
                <p>Hi! my name is</p>
                <h1>Vicente Manzano</h1>
                <h3>I'm a Front End Web Developer.</h3>
                <h4>Passionate about new technologies and developing web applications for any purpose.</h4>
                <button>See More!</button>
            </div>
          
        </div>
        <div className="social-links">
            <ul>
                <img src={require('../../images/In.png')} alt=""/>  
                <a id="anchor" href="https://www.linkedin.com/in/vicente-manzano-a90864191/" target="_blank"><li>LinkedIn</li></a>
                <img src={require('../../images/git.png')}  alt=""/>
                 
                <a id="anchor" href="https://github.com/DevVincent" target="_blank"><li>GitHub</li></a>                
            </ul>
        </div> 
    </header>      
    )
}

export default Home;