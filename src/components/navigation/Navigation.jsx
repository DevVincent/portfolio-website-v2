import React from 'react'

import './styles/Navigation.css'

const Navigation = () => {
    return(
        <nav>
            <div className="spacer"></div>
            <ul>
                <li><span>01. </span> About Me</li>
                <li><span>02. </span> Projects</li>
                <li><span>03. </span> Skills</li>
                <li><span>04. </span> Contact</li>
            </ul>
            <button>Resume</button>
        </nav>     
    )
}

export default Navigation;