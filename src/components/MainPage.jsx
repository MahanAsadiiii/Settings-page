import React, { useState, useEffect } from 'react'
import { Moon, Sun1 } from 'iconsax-react'
import { ChangePass, CopyRight, Lorem } from './Index';
import { Lock1, BuyCrypto, Wallet1 } from "iconsax-react"
import { Route, Routes, Link } from 'react-router-dom'


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
  const contetntHandler = (index) => {
    setBg(index)
  }

  return (

    <div className="flex flex-col justify-between min-h-screen text-black dark:text-white p-6">
      <div className="">
        <div className={`flex justify-between `}>
          <h2 className='text-3xl font-normal font-[poppins]'>Settings</h2>
          <div className={`flex items-center rounded-3xl w-16 h-10 p-1 justify-end dark:bg-[#535B62] bg-yellow-400 }`}>
            <div onClick={themeChange} className={`bg-[#212226] rounded-full flex items-center p-2 duration-500 ${theme === "dark" && "-translate-x-6"}`}>
              {theme === "light" ? <Sun1 color="#ffffff" size="16" /> : <Moon color="#ffffff" size="16" />}
            </div>
          </div>
        </div>
        <div className={`flex flex-col lg:flex-row justify-evenly items-center border-[#282C30] border-solid border-2 rounded-2xl dark:bg-[#12181D] dark:text-white bg-[#FFFFFF] text-black mt-6 py-1 px-3`}>
          <Link onClick={() => contetntHandler(1)} to='' className={`${bg === 1 ? "dark:bg-[#212226] bg-[#dedede]" : ""} flex justify-between md:justify-center items-center w-full py-6 px-14 md:px-20 rounded-2xl`}>
            <Lock1 size={32} />
            <div className="ml-4">
              <h3 className='text-sm md:text-base font-normal font-[poppins]'>Security</h3>
              <h6 className='text-xs font-[Roboto] font-normal'>Change Password</h6>
            </div>
          </Link>
          <div className="bg-[#282C30] w-full h-0.5 lg:w-0.5 lg:h-16 m-1 "></div>
          <Link onClick={() => contetntHandler(2)} to='/setting/api' className={`${bg === 2 ? "dark:bg-[#212226] bg-[#dedede]" : ""} flex justify-between md:justify-center items-center w-full py-6 px-14 md:px-20 rounded-2xl`}>
            <BuyCrypto size={32} />
            <div className="ml-4">
              <h3 className='text-sm md:text-base font-normal font-[poppins]'>API</h3>
              <h6 className='text-xs font-[Roboto] font-normal'>Lorem Ipsum doller</h6>
            </div>
          </Link>
          <div className="bg-[#282C30] w-full h-0.5 lg:w-0.5 lg:h-16 m-1"></div>
          <Link onClick={() => contetntHandler(3)} to='/setting/lorem' className={`${bg === 3 ? "dark:bg-[#212226] bg-[#dedede]" : ""} flex justify-between md:justify-center items-center w-full py-6 px-14 md:px-20 rounded-2xl`}>
            <Wallet1 size={32} />
            <div className="ml-4">
              <h3 className='text-sm md:text-base font-normal font-[poppins]'>Lorem Ipsum</h3>
              <h6 className='text-xs font-[Roboto] font-normal'>Lorem Ipsum doller</h6>
            </div>
          </Link>
        </div>
      </div>
      <>
        <Routes>
          <Route index path='' element={<ChangePass />} />
          <Route path='/setting/api' element={<Lorem />} />
          <Route path='/setting/lorem' element={<Lorem />} />
        </Routes>
      </>
      <CopyRight />
    </div>
  )
}

export { MainPage }