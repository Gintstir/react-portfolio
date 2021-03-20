import React from 'react';

function Nav() {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about"> 
                    About Me
                    </a>
                </li>
                <li className={'mx-2 navActive'}>
                    <a href="#Contact">
                    Contact
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#projects">
                        Portfolio
                    </a> 
                </li>
                <li className="mx-2">
                    <a href="#projects">
                        Resume
                    </a> 
                </li>
                <li className="mx-2">
                    <a href="#projects">
                        Hobbies
                    </a> 
                </li>                        
            </ul>
        </nav>
    )
}


export default Nav;