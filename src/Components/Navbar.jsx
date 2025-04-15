import React from 'react'
import appleImg from '../../public/assets/images/apple.svg'
import search from '../../public/assets/images/search.svg'
import bag from '../../public/assets/images/bag.svg'


const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
      <img src={appleImg} width={16} height={18} alt="" />

      <div className='flex flex-1 justify-center max-sm:hidden'>
        {['Mobiles' ,'Tablets' ,'Macbooks'].map((nav)=>(
            <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all' >
                {nav}
            </div>
        ))}
      </div>

      <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 hover:shadow-xl transition-shadow duration-300'>
        <img  src={search} height={18} width={18} alt="" />
        <img src={bag} height={18} width={18} alt="" />
      </div>
      </nav>
    </header>
  )
}

export default Navbar
