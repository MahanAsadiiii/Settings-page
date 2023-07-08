import React, { useState } from 'react'
import { Sider } from "./Index";



const Layout = ({ children }) => {


  return (
    <div className='flex'>
      <Sider />
      {children}
    </div>
  )

}
export default Layout 