import React from 'react'
import './styles/Projects.css'
const Projects = () => {
    return(
        <div className = "projects">
            <h2><span>02. </span>Projects</h2>
            <div className="info">               
                <div className="project">                   
                    <img src="https://c1.sfdcstatic.com/content/dam/blogs/ca/Blog%20Posts/How%20to%20Increase%20Productivity%20Without%20Increasing%20Stress_Open%20Graph%20Image.png" alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 1:</span> Productivity</h2>
                        <div className="project-content">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>SaSS - React/Redux - Express - MongoDB</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <li><span>> </span>View Code</li>
                                    <li><span>> </span>Demo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">                   
                    <img src={require('../../images/elisabet.png')} alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 2:</span> Inspiring Others</h2>
                        <div className="project-content">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>React - Express - MySQL</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <li><span>> </span>View Code</li>
                                    <li><span>> </span>Demo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project">                   
                    <img src={require('../../images/todolist.png')} alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 3:</span> Todo-List</h2>
                        <div className="project-content">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>Vanilla JavaScript - LocalStorage</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <li><span>> </span>View Code</li>
                                    <li><span>> </span>Demo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="project">                   
                    <img src={require('../../images/portfolio.png')} alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 4:</span> Personal Portfolio</h2>
                        <div className="project-content">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>SaSS - React - Aos</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <li><span>> </span>View Code</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    )
}

export default Projects;