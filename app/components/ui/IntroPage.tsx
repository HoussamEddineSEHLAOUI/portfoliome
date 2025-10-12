import React from 'react'

const IntroPage = ({title}) => {
    return (
      <div className='md:w-[100%] md:h-[30vh] h-[30vh] custom-gradient text-white'>
          <div className='md:pt-32 pt-32 container mr-auto ml-auto'>
              <h1 className='mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography'>{title}</h1>
          </div>
    </div>
    )
  }

export default IntroPage
