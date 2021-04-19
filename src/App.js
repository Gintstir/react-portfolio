import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './components/Contact';
import About from './components/About';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies'




function App() {
 
  return (
    <>
      
        <Router >
          <Navbar />
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/portfolio">
                <Portfolio />
              </Route>
              <Route exact path='/resume'>
                <Resume />          
              </Route>
              <Route exact path="/hobbies">
                <Hobbies />
              </Route>
              <Route exact path="/contact">
                <Contact />
              </Route>
            </Switch>
          <Footer />
        </Router>
       
    </>
  );
}

export default App;

