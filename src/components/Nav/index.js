import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Contact from '../Contact';
import About from '../About'; 
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Hobbies from '../Hobbies';

function Nav() {

    
    return (
        
        <Router>
            <div>
                <nav className="navbar" >
                    <ul className="topnav">
                        <li className="mx-2">
                            <Link to="/">About Me</Link>
                        </li>
                        <li className='mx-2'>
                            <Link to="/contact">
                            Contact
                            </Link>
                        </li>
                        <li className="mx-2">
                            <Link to="/portfolio">
                                Portfolio
                            </Link> 
                        </li>
                        <li className="mx-2">
                            <Link to="/resume">
                                Resume
                            </Link> 
                        </li>
                        <li className="mx-2">
                            <Link to="/hobbies">
                                Hobbies
                            </Link> 
                        </li>                        
                    </ul>
                </nav>

               

                <Switch>
                    <Route exact path="/">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/hobbies">
                        <Hobbies />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}


export default Nav;