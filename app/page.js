import Image from 'next/image'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Intro from './components/ui/Intro'
import MainProjects from './components/ui/MainProjects'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Intro/>
      <MainProjects/>
      <Footer/>
    </main>
  )
}
