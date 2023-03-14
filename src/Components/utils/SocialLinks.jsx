import React from 'react'

const SocialLinks = ({icon}) => {
  return (
    <>
      <img src={icon} alt="icon/social" className='w-8 h-8 flex items-center cursor-pointer
      md:w-6 md:h-6 sm:h-5 sm:w-5 transition-all duration-200 hover:slate-110 hover:scale-150' />
    </>
  )
}

export default SocialLinks
