import React from 'react'
import ServiceCard from '../modules/services/ServiceCard'
import services from '../Data/Services'

const MainServices = () => {
  return (
    <div className='md:pl-52 md:pr-52 sm:pr-5 sm:pl-5 md:border md:border-spacing-5'>
      <div className='flex align-middle justify-between mt-8 mb-5'>
        <label className='text-xl md:text-2xl font-bold text-brand-primary typography ml-5'>Services</label>
        <label className='text-sm font-extralight text-brand-primary typography mr-5'>View more</label>
      </div>
      <div className='flex align-middle md:justify-center md:flex-wrap md:p-5 pr-1 pl-1 w-[100%] overflow-x-scroll'>
            {services.map((service) => (
                <ServiceCard 
                key={service.id} 
                name={service.name}
                discription={service.discription}
                />
            ))}
        </div>
    </div>
  )
}

export default MainServices
