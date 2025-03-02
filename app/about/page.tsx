import React from 'react'
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import IntroAbout from '../components/modules/about/IntroAbout';
import AboutMe from '../components/modules/about/AboutMe';

const about = () => {
  return (
    <>
      <Navbar/>
      <IntroAbout/>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default about;
