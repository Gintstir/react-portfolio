import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Contact from './components/Contact';
import About from './components/About';
import Nav from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Hobbies from './components/Hobbies'
// import background from './assets/images/forestbackdrop.jpg'



function App() {
 
  return (
    <>
      <Router>
        <Nav />
          <Switch>
            <Route exact path='/'>
              <About />
            </Route>
            <Route exact path='/portfolio'>
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

