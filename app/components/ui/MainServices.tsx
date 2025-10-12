import React from 'react'
import ServiceCard from '../modules/services/ServiceCard'
import services from '../Data/Services'

const MainServices = () => {
  return (
    <div className='container mr-auto ml-auto'>
      <div className='flex align-middle justify-between mt-8 mb-5'>
        <label className='text-xl md:text-2xl font-bold text-brand-primary typography md:ml-28 ml-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Services</label>
      </div>
      <div className='flex align-middle md:justify-center md:flex-wrap md:p-5 pr-1 pl-1 w-[100%] overflow-x-scroll'>
            {services.map((service) => (
              <ServiceCard 
                key={service.id} 
                name={service.name}
                discription={service.discription}
                url={service.url}
              />
            ))}
        </div>
    </div>
  )
}

export default MainServices
