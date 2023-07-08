import React, { useState } from 'react'
import { Moon, Sun1 } from 'iconsax-react'
import { ChangePass } from './Index';

function MainPage() {
  const [dark, light] = useState(true)
  const onChange = () => {
    light(!dark)
  };
  return (
    <div className={`${dark ? "bg-[#12181D] text-white" : "bg-white text-black"} w-full p-6 `}>
      <div className={`flex justify-between `}>
        <h2 className='text-3xl font-normal font-[poppins]'>Settings</h2>
        <div className={`flex items-center bg-[#535B62] rounded-3xl w-16 h-10 p-1 justify-end ${dark ? "bg-[#535B62]" : "bg-yellow-400"}`}>
          <div onClick={onChange} className={`bg-[#212226] rounded-full flex items-center p-2 duration-500 ${!dark && "-translate-x-6"}`}>
            {!dark ? <Sun1 color="#ffffff" size="16"/> : <Moon color="#ffffff" size="16"  />}
          </div>
        </div>
      </div>
      <ChangePass className={`${dark ? "bg-[#12181D] text-white" : "bg-[#F2F3F3] text-black"}`} />

    </div>
  )
}

export { MainPage }