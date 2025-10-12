import React from 'react'
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import IntroPage from '../components/ui/IntroPage';
import AboutMe from '../components/modules/about/AboutMe';

const about = () => {
  return (
    <>
      <Navbar/>
      <IntroPage title="About me"></IntroPage>
      <AboutMe/>
      <Footer/>
    </>
  )
}

export default about;
