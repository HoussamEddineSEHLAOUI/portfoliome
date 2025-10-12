import React from 'react'
import Navbar from '../components/ui/Navbar'
import IntroPage from '../components/ui/IntroPage'
import Footer from '../components/ui/Footer'

const contact = () => {
  return (
    <>
      <Navbar />
      <IntroPage title="Projects" /> 
        <div className='container mx-auto px-4 py-6'>
            <div className='flex flex-col mb-6'>
            <h1 className='text-2xl font-bold'>Contact Me</h1>
            <p className='mt-2'>Feel free to reach out for any inquiries or collaborations!</p>
            <form className='mt-4'>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full mb-4" />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full mb-4" />
                <textarea placeholder="Your Message" className="textarea textarea-bordered w-full mb-4"></textarea>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default contact
