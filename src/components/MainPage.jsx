import React, { useState, useEffect } from 'react'
import { Moon, Sun1 } from 'iconsax-react'
import { ChangePass } from './Index';

function MainPage() {

  const onChange = () => {
    setTheme(theme ==="dark" ? "light" : "dark")
  };

  const [theme, setTheme] = useState('light')

  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  },[theme])

  return (

    <div className="bg-white dark:bg-[#12181D] text-black dark:text-white w-full p-6">
      <div className={`flex justify-between `}>
        <h2 className='text-3xl font-normal font-[poppins]'>Settings</h2>
        <div className={`flex items-center rounded-3xl w-16 h-10 p-1 justify-end dark:bg-[#535B62] bg-yellow-400 }`}>
          <div onClick={onChange} className={`bg-[#212226] rounded-full flex items-center p-2 duration-500 ${theme === "dark" && "-translate-x-6"}`}>
            {theme === "light" ? <Sun1 color="#ffffff" size="16"/> : <Moon color="#ffffff" size="16"  />}
          </div>
        </div>
      </div>
      <ChangePass />

    </div>
  )
}

export { MainPage }