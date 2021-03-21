import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import background from './assets/images/forestbackdrop.jpg'



const App = () => {
 
  return (
    <div className="fullwidth" style={{ backgroundImage: `url(${background})`}}>
      <Header />
    
    
      <Footer />
    </div>
  );
}

export default App;
