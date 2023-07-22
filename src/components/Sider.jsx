import React, { useState } from 'react'
import { Setting2, NotificationBing, Sms, TickCircle, ArrowLeft2, LogoutCurve } from 'iconsax-react'
import { profile } from '../utilities/Index';
import NavbarItems from './Static';

const Sider = () => {
    const [open, setopen] = useState(true)
    const [clickState, setClickState] = useState(5)
    
    const handleNav = () => {
        setopen(!open);
    };
    const navHandler = (index) =>{
        setClickState(index)
    }

    return (
        <div className={`relative flex flex-col justify-between h-screen max-h-screen p-4 bg-[#F2F3F3] dark:bg-[#111418] ease-in-out duration-200 ${open ? "w-3/12  " : "items-center w-1/12"} `}>

            <div>
                <div className={`flex flex-col items-center dark:bg-[#212226] bg-white px-5 pt-8 pb-5 rounded-2xl mb-5 mt-12 ${!open && "hidden"}`}>
                    <div className="-mt-20">
                        <img src={profile} sizes='22px' alt="" />
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                            <div className="bg-[#535B62]  dark:bg-[#111418]  px-4 py-2 rounded">
                                <select name="Language" id="" className='text-white bg-[#535B62] dark:bg-[#12181D] '>
                                    <option value="English">Eng</option>
                                    <option value="Turkish">Trk</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <div className="dark:bg-[#111418] p-2 rounded-lg bg-[#535B62]">
                                    <Setting2 color='#FFFFFF' />
                                </div>
                                <div className="dark:bg-[#111418] p-2 rounded-lg bg-[#535B62]">
                                    <NotificationBing color='#FFFFFF' />
                                </div>
                            </div>
                        </div>
                        <div className=" flex justify-evenly bg-[#F2F3F3] dark:bg-[#12181D] px-5 py-4 mt-6 rounded-lg">
                            <Sms color='#566059'/>
                            <input type="email" placeholder='gha***@gmail.com' className='outline-none border-none bg-[#F2F3F3] dark:bg-[#12181D] ml-2  placeholder:text-black dark:text-white font-normal text-sm placeholder:dark:text-white' />
                            <TickCircle variant='Bold' color='#4BA663' />
                        </div>
                    </div>
                </div>
                {NavbarItems.map((item,index) => {
                    return (
                        <div>
                            <li onClick={() => navHandler(index)} className='flex items-center font-normal my-3 dark:text-[#f2f3f3] text-black font-[poppins]'>
                                <div className={`${clickState === index ? "active" : "hidden" } w-1 h-9 bg-[#4BA663] rounded-2xl `}></div>
                                <div className={`${clickState === index ? "bg-[#4BA663]" : "bg-[#535B62]" } p-2 mx-4 rounded-lg`}>
                                    {item.icon}
                                </div>
                                {open && item.label}
                            </li>
                        </div>
                    )
                })}
            </div>
            <div className=''>
                <div className='flex items-center text-base font-normal dark:text-[#f2f3f3] text-black font-[poppins]'>
                    <div className='w-1 bg-[#D0585F] rounded-2xl h-10'></div>
                    <div className="bg-[#D0585F] p-2 mx-4 rounded-lg">
                        <LogoutCurve color='#FFFFFF' />
                    </div>
                    {open && "Log out"}
                </div>
            </div>
            <div onClick={handleNav} className={`absolute bottom-4 py-2 bg-[#535B62] rounded-l-full ${!open ? "origin-center rotate-180 -right-6 " : "rotate-0 right-0 "}  `}>
                <ArrowLeft2 color='#FFFFFF ' />
            </div>

        </div>
    )
}

export { Sider }