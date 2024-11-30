import React from 'react'
import IntroProject from '../components/modules/projects/IntroProject'
import ProjectList from '../components/modules/projects/ProjectList'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'

const projects = () => {
  return (
    <div>
      <Navbar/>
      <IntroProject></IntroProject>
      <ProjectList></ProjectList> 
      <Footer></Footer>
    </div>
  )
}

export default projects
