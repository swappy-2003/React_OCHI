import React from 'react';
import Navbar from './componets/Navbar.jsx'
import Landingpage from './componets/Landingpage.jsx';
import Marque from './componets/Marque.jsx';
import About from './componets/About.jsx';
import Eyes from './componets/Eyes.jsx';
import Featured from './componets/Featured.jsx';
import Cards from './componets/Cards.jsx';
import Footer from './componets/Footer.jsx';
import LocomotiveScroll from 'locomotive-scroll';
import Favicon from 'react-favicon';







function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='text-white'>
      <Favicon url="https://ochi.design/wp-content/uploads/2022/04/Favicon.png"/>
      <Navbar/>
      <Landingpage/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
