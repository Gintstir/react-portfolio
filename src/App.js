import React from 'react';
import Header from './components/Header';
import About from './components/About';
//import Nav from './components/Nav';
// import Project from './components/Project';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        {/* <Nav />
        <Project /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
