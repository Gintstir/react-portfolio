import React from 'react'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa"
import { IconContext } from 'react-icons'

function Footer() {

    return (
        <IconContext.Provider value={{ color: "white", size: "2em "}}>

        <div className="footer">
            <footer  >
                <ul className="social-icons">
                    <li className="mx-2">
                        <a href="https://github.com/Gintstir" rel="noreferrer "target="_blank"><FaGithub /></a>
                    </li>
                    <li className="mx-2">
                        <a href="https://www.linkedin.com/in/gintautas-stirbys/" rel="noreferrer" target="_blank"><FaLinkedin /></a>
                    </li>
                    <li className="mx-2">
                        <a href="https://www.instagram.com/gintstir/" rel="noreferrer" target="_blank"><FaInstagramSquare /></a>
                    </li>
                </ul>
            </footer>            
        </div>

        </IconContext.Provider>
    )
}

export default Footer;


