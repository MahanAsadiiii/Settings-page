import React from 'react'
import {  Logo ,LogoWhite} from '../utilities/Index'

function CopyRight() {
  return (

    <div className='flex justify-between lg:justify-end w-full gap-6 text-white mt-4 x-3 lg:px-10 items-end'>
      <img src={Logo} height={50} width={80} alt="logo-sign" className='dark:hidden' />
      <img src={LogoWhite} height={50} width={80} alt="logo-sign" className='hidden dark:block '/>
      <h5 className='text-xs font-light text-black dark:text-white '>© 2023 Mahan Asadi.</h5>
    </div>

  )
}

export { CopyRight }