import React, { useState, useEffect } from 'react'
import { Moon, Sun1 } from 'iconsax-react'
import { ChangePass, Lorem } from './Index';
import { Lock1, BuyCrypto, Wallet1 } from "iconsax-react"
import {  Route, Routes ,Link ,Navigate } from 'react-router-dom'


function MainPage() {

  const themeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };

  const [bg, setBg] = useState(1)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  const contetntHandler=(index) =>{
    setBg(index)
  }

  return (

    <div className="bg-white dark:bg-[#12181D] text-black dark:text-white w-full p-6">
      <div className={`flex justify-between `}>
        <h2 className='text-3xl font-normal font-[poppins]'>Settings</h2>
        <div className={`flex items-center rounded-3xl w-16 h-10 p-1 justify-end dark:bg-[#535B62] bg-yellow-400 }`}>
          <div onClick={themeChange} className={`bg-[#212226] rounded-full flex items-center p-2 duration-500 ${theme === "dark" && "-translate-x-6"}`}>
            {theme === "light" ? <Sun1 color="#ffffff" size="16" /> : <Moon color="#ffffff" size="16" />}
          </div>
        </div>
      </div>
      <div className={`flex justify-evenly items-center border-[#282C30] border-solid border-2 rounded-2xl dark:bg-[#12181D] dark:text-white bg-[#FFFFFF] text-black mt-6 p-1`}>
        <Link onClick={() => contetntHandler(1)} to='/setting' className={`${ bg === 1 ? "dark:bg-[#212226] bg-[#F2F3F3]" : "" } flex items-center w-full py-6 px-20 rounded-2xl`}>
          <Lock1 size={32} />
          <div className="ml-4">
            <h3 className='text-base font-normal font-[poppins]'>Security</h3>
            <h6 className='text-xs font-[Roboto] font-normal'>Change Password</h6>
          </div>
        </Link>
        <div className="w-0.5 bg-[#282C30] h-16 m-1"></div>
        <Link onClick={() => contetntHandler(2)} to='/setting/lorem' className={`${ bg === 2 ? "dark:bg-[#212226] bg-[#F2F3F3]" : "" } flex items-center w-full py-6 px-20 rounded-2xl`}>
          <BuyCrypto size={32} />
          <div className="ml-4">
            <h3 className='text-base font-normal font-[poppins]'>API</h3>
            <h6 className='text-xs font-[Roboto] font-normal'>Lorem Ipsum doller</h6>
          </div>
        </Link>
        <div className="w-0.5 bg-[#282C30] h-16 m-1"></div>
        <Link onClick={() => contetntHandler(3)} to='/setting/lorem' className={`${ bg === 3 ? "dark:bg-[#212226] bg-[#F2F3F3]" : "" } flex items-center w-full py-6 px-20 rounded-2xl`}>
          <Wallet1 size={32} />
          <div className="ml-4">
            <h3 className='text-base font-normal font-[poppins]'>Lorem Ipsum</h3>
            <h6 className='text-xs font-[Roboto] font-normal'>Lorem Ipsum doller</h6>
          </div>
        </Link>
      </div>
      <>
      <Routes>
        <Route index path='/setting/' element={<ChangePass />} />
        <Route path='/setting/lorem' element={<Lorem/>} />
      </Routes>
      </>

    </div>
  )
}

export { MainPage }