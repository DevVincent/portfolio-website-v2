import React from 'react'
import './styles/Skills.css'
const Skills = () => {
    return(
        <div className = "skills">
            <h2><span>03. </span>Skills</h2>
            <div className="skills-container">
                <p>Frontend</p>
                <div className="frontend-skills">
                    <div className="first-line">
                        <div className = "card">
                           <p><span>> </span>HTML</p>
                            <img src={require('../../images/html.png')} alt=""/>
                        </div>
                        
                        <div className = "card">
                            <p><span>> </span>CSS</p>
                            <img src={require('../../images/css.png')} alt=""/>
                        </div>
                        <div className = "card">
                            <p><span>> </span>SASS</p>
                            <img src={require('../../images/sass-t.png')} alt=""/>
                        </div>
                        
                    </div>
                    <div className="first-line">
                    <div className = "card">
                            <p><span>> </span>JS ES6</p>
                            <img src={require('../../images/js.png')} alt=""/>
                        </div>
                        <div className = "card">
                            <p><span>> </span>React</p>
                            <img src={require('../../images/react.png')} alt="logo"/>
                        </div>
                        <div className = "card">
                            <p><span>> </span>Redux</p>
                            <img src={require('../../images/redux.png')} alt=""/>
                        </div>
                    </div>
                </div>
                <p>Backend</p>
                <div className = "backend-skills">
                    <div className="b-first-line">
                        <div className = "card">
                            <p><span>> </span>Node.js</p>
                            <img src={require('../../images/node.png')} alt=""/>
                        </div>
                        <div className = "card">
                            <p><span>> </span>Express.js</p>
                            <img src={require('../../images/express-i.png')} alt=""/>
                        </div>
                    </div>
                    <div className="b-second-line">   
                        <div className = "card">
                            <p><span>> </span>MySQL</p>
                            <img src={require('../../images/mysql.png')} alt=""/>
                        </div>
                        <div className = "card">
                            <p><span>> </span>MongoDB</p>
                            <img src={require('../../images/mongo.png')} alt=""/>
                        </div>
                    </div> 
                </div>  
                                          
            </div>
        </div>
    )
}

export default Skills;