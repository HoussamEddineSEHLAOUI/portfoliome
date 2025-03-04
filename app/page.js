import Image from 'next/image'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import Intro from './components/ui/Intro'
import MainProjects from './components/ui/MainProjects'
import MainServices from './components/ui/MainServices'
import ComingSoon from './components/modules/comingSoon/ComingSoon'


export default function Home() {
  return (
    <main>
      <ComingSoon/>
    </main>
  )
}
