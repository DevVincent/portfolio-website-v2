import React,{useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import './styles/Contact.css'

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:800});
    }, []);

    return(
        <section className = "contact" id="Contact">
            <h2><span>04. </span>Contact</h2>
            <div data-aos="fade-up"className="c-info">
                <div className="e-form">
                    <p className="m-para"><span>> </span>Reach out to me</p>
                    <p className="s-para">Type your email address below and I will contact you as soon as possible</p>
                    <form action="">
                        <input type="text" name="" id="" placeholder="ex@example.com"/>
                        <button>Send</button>
                    </form>
                </div>
                
                <div data-aos="fade-up"className="s-links">
                    <p className="m-para"><span>> </span>More Info</p>                   
                    <a id="anchor" href="https://github.com/DevVincent" target="_blank"><img src={require('../../images/git.png')} alt="link"/></a>
                    <a id="anchor" href="https://www.linkedin.com/in/vicente-manzano-a90864191/" target="_blank"><img src={require('../../images/In.png')} alt="link"/></a>
                    <p className="t-para"><span>Tel: </span>00446969696</p>
                    <p className="t-para"><span>Email: </span> loremcontacto@lorem.ipsum</p>                  
                </div>    
            </div>
        </section>
    )
}

export default  Contact;