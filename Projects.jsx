import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './styles/Projects.css'

const Projects = () => {
    useEffect(()=>{
        Aos.init({duration:800});
    }, []);

    return(
        <section className = "projects" id="Projects">
            <h2><span>02. </span>Projects</h2>
            <div className="p-info">      
                     
                <div data-aos="fade-right"className="project">
                <img src={require('../../images/formulario.png')} alt="project-demostration"/>  
                <div className = "wrapper">
                    <h2><span>> Project 1:</span> Form Generator</h2>
                        <div className="project-content" data-aos="fade-down">                          
                            <p>This app is a customizable form generator that allows a user to import forms as an iframe. Those forms are fully functional and the data is processed in the backend so the user can have all the data sent by the form to its email account. </p>
                            <p>The frontend of the application was developed by me using boostrap and jQuery whereas the backend was developed by a friend of mine using C# and .net </p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>jQuery - Bootstrap</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <li className="Locked"><span>> <i class="fas fa-lock"> </i></span></li>
                                    <a href="https://misformularios.com/" target="_blank"><li><span>> </span>Live</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>                 
                </div>

                <div data-aos="fade-right"className="project">                   
                    <img src={require('../../images/elisabet.png')} alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 2:</span> Inspiring Others</h2>
                        <div className="project-content"data-aos="fade-down">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>React - Express - MySQL</h3>
                            <div className="project-btns"> 
                                <ul>
                                <a href="https://github.com/DevVincent/MySQL-Express-React" target="_blank"><li><span>> </span>View Code</li></a>
                                <a href="http://elisabet.vincentms.me/" target="_blank"><li><span>> </span>Live</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-right"className="project">  
                    <img src={require('../../images/todolist.png')} alt="project-demostration"/>   
                    <div className = "wrapper">
                        <h2><span>> Project 3:</span> Todo-List</h2>
                        <div className="project-content"data-aos="fade-down">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>Vanilla JavaScript - LocalStorage</h3>
                            <div className="project-btns"> 
                                <ul>
                                <a href="https://github.com/DevVincent/VanillaJS-TodoList" target="_blank"><li><span>> </span>View Code</li></a>
                                <a href="http://todo.vincentms.me/" target="_blank"><li><span>> </span>Live</li></a>
                                </ul>
                            </div>
                        </div>
                    </div>                      
                </div>  

                <div data-aos="fade-right"className="project">                   
                    <img src={require('../../images/portfolio.png')} alt="project-demostration"/>
                    <div className = "wrapper">
                    <h2><span>> Project 4:</span> Personal Portfolio</h2>
                        <div className="project-content"data-aos="fade-down">                          
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ipsa temporibus laborum illo explicabo rerum tempore aut quas aspernatur modi harum totam et autem repellat, quibusdam officia eaque. Doloribus, obcaecati magni eos hic minus reprehenderit vero aliquid expedita dicta distinctio.</p>
                            <br/>                        
                        </div>
                        <div className="project-bottom">
                            <h3>SaSS - React - Aos</h3>
                            <div className="project-btns"> 
                                <ul>
                                    <a href=" https://github.com/DevVincent/PortfolioWebsite" target="_blank"><li><span>> </span>View Code</li></a>                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>           
            </div>
        </section>
    )
}

export default Projects;