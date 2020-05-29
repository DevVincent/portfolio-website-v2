import React from 'react'
import './styles/Footer.css'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <div className = "footer">
            <p>Portfolio designed and developed by <span>Vicente Manzano</span> ⓒ {currentYear}</p>
            
        </div>
    )
}

export default Footer;