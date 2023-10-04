import React, { useState } from 'react'
import { Sider } from "./Index";



const Layout = ({ children }) => {


  return (
    <div className='flex min-h-screen bg-white dark:bg-[#12181D]'>
      <Sider />
      <div className="h-full flex-1">{children}</div>
    </div>
  )

}
export {Layout} 