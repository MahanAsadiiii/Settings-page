import React, { useState } from 'react'
import { Sider } from "./Index";



const Layout = ({ children }) => {


  return (
    <div className='flex bg-white dark:bg-[#12181D]'>
      <Sider />
      {children}
    </div>
  )

}
export default Layout 