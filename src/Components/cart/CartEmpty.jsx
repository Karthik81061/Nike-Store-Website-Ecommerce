import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import React from 'react'
import emptybag from '../../assets/emptybag.png'

const CartEmpty = ({onCartToggle}) => {
  return (
    <>
    <div className='flex items-center justify-center flex-col h-screen p-11 gap-7 text-center'>
      <img src={emptybag} alt="emptybag/png"
      className='w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110 ' />
      <button className='button-theme bg-gradient-to-b from-amber-300 to-amber-500 shadow-lg shadow-orange-400 
      flex gap-2 items-center justify-center text-slate-900 py-2 px-5 text-sm font-semibold 
      transition-all duration-300 active:scale-110'
      onClick={onCartToggle}>

        <ArrowLeftIcon className='w-5 h-5 text-slate-900'/>
        <span className=''> Back to Store</span>
      </button>
      </div>
    </>
  )
}

export default CartEmpty
