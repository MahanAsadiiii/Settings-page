import React, { useState } from 'react'
import { OpenSider, ClosedSider } from "./Index";



const Layout = ({ children }) => {

  
  return (
    <div className='grid grid-cols-12'>
      <OpenSider/>
      {children}

    </div>
  )

  }
export default Layout 