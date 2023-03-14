import React from 'react'

const Footer = ({footerAPI:{titles,links}}) => {
  return (
    <>
      <footer className='bg-theme pt-7 pb-5'>
        <div className='nike-container text-slate-200'>
            <div className='grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5'>
                {titles.map((val,i)=>(
                    <div key={i}>
                        <h1 className='text-lg ld:text-base md:text-sm uppercase font-semibold'>{val.title}</h1>
                    </div>
                ))}
                {links.map((navLinks,i)=>(
                    <ul key={i} className="grid items-center gap-1">
                        {navLinks.map((val,i)=>(
                            <li key={i} className='text-s sm:text-xs'>{val.link}</li>
                        ))}
                    </ul>
                ))}
            </div>
            <div className='mt-5 text-center'>
                <p className='text-sm md:text-center'>Copyright <sup className='text-base font-bold'>&copy;</sup> All Reversed Rights 2022 
                <span className='font-semibold'> GameDves</span></p>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
