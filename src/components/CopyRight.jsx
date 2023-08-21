import React from 'react'
import {  Logo ,LogoWhite} from '../utilities/Index'

function CopyRight() {
  return (

    <div className='flex items-center justify-between text-white py-2 px-3 md:px-10 md:py-5'>
      <img src={Logo} height={50} width={80} alt="logo-sign" className='dark:hidden' />
      <img src={LogoWhite} height={50} width={80} alt="logo-sign" className='hidden dark:block'/>
      <h5 className='text-xs font-light text-black dark:text-white'>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export { CopyRight }