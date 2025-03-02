import Image from 'next/image'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Intro from './components/ui/Intro'
import MainProjects from './components/ui/MainProjects'
import MainServices from './components/ui/MainServices'



export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <MainServices/>
      <MainProjects/>
      <Footer/>
    </main>
  )
}
