import React, { useState } from 'react'
import { Setting2, NotificationBing, Sms, TickCircle, ArrowLeft2, Android, Category, Briefcase, Notification, Trade, LogoutCurve } from 'iconsax-react'
import { profile } from '../utilities/Index';
import { ClosedNavbar, Logout, Navbar, ClosedLogout } from './Index'

const OpenSider = () => {
    const [open, setopen] = useState(true)
    const handleNav = () => {
        setopen(!open);
    };

    return (
        <div className={`relative flex flex-col justify-between h-screen max-h-screen pt-11 pb-4 px-3 bg-[#111418]  ${open ? "col-span-3 " : "col-span-1"} `}>

            <div className="">
                {open ?
                    <div className="flex flex-col items-center bg-[#2B333D] px-5 pt-4 pb-5 rounded-2xl mb-3">
                        <div className="-mt-14">
                            <img src={profile} className='scale-75' alt="" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <select name="Lang" id="" className='bg-[#111418] text-white px-4 py-2 rounded'>
                                        <option value="English">Eng</option>
                                        <option value="Turkish">Trk</option>
                                    </select>
                                </div>
                                <div className="flex gap-2">
                                    <div className="bg-[#111418] p-2 rounded-lg">
                                        <Setting2 color='#FFFFFF' />
                                    </div>
                                    <div className="bg-[#111418] p-2 rounded-lg">
                                        <NotificationBing color='#FFFFFF' />
                                    </div>
                                </div>
                            </div>
                            <div className=" flex justify-evenly bg-[#12181D] px-3 py-2 mt-2 rounded-lg">
                                <Sms color='#FFFFFF' />
                                <input type="email" placeholder='gha***@gmail.com' className='outline-none border-none bg-[#12181D] ml-2  text-white font-normal text-sm placeholder:text-white' />
                                <TickCircle variant='Bold' color='#4BA663' />
                            </div>
                        </div>
                    </div> : <div></div>}
                {open ?
                    <div className="">
                        <ul className='font-[poppins]'>
                            <li className='flex items-center text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Category color='#FFFFFF' />
                                </div>
                                Dashboard
                            </li>
                            <li className='flex items-center my-3 text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Android color='#FFFFFF' />
                                </div>
                                Bot
                            </li>
                            <li className='flex items-center my-3 text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Briefcase color='#FFFFFF' />
                                </div>
                                Portfolio
                            </li>
                            <li className='flex items-center my-3 text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Trade color='#FFFFFF' />
                                </div>
                                Dashboard
                            </li>
                            <li className='flex items-center my-3 text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Notification color='#FFFFFF' />
                                </div>
                                Price Alert
                            </li>
                            <li className='flex items-center my-3 text-sm font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl h-10'></div>
                                <div className="bg-[#4BA663] p-2 mx-4 rounded-lg">
                                    <Setting2 color='#FFFFFF' />
                                </div>
                                Setting
                            </li>

                        </ul>
                    </div> :
                    <div className=''>
                        <ul className='font-[poppins]'>

                            <li className='flex items-center text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Category color='#FFFFFF' />
                                </div>
                            </li>
                            <li className='flex items-center my-3 text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Android color='#FFFFFF' />
                                </div>
                            </li>
                            <li className='flex items-center my-3 text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Briefcase color='#FFFFFF' />
                                </div>
                            </li>
                            <li className='flex items-center my-3 text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Trade color='#FFFFFF' />
                                </div>
                            </li>
                            <li className='flex items-center my-3 text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
                                <div className="bg-[#12181D] p-2 mx-4 rounded-lg">
                                    <Notification color='#FFFFFF' />
                                </div>
                            </li>
                            <li className='flex items-center my-3 text-base font-normal text-[#f2f3f3]'>
                                <div className='w-1 bg-[#4BA663] rounded-2xl h-10'></div>
                                <div className="bg-[#4BA663] p-2 mx-4 rounded-lg">
                                    <Setting2 color='#FFFFFF' />
                                </div>
                            </li>

                        </ul>
                    </div>
                }
            </div>
            {open ?
                <div className=''>
                    <div className='flex items-center text-base font-normal text-[#f2f3f3]'>
                        <div className='w-1 bg-[#D0585F] rounded-2xl h-10'></div>
                        <div className="bg-[#D0585F] p-2 mx-4 rounded-lg">
                            <LogoutCurve color='#FFFFFF' />
                        </div>
                        Log out
                    </div>
                </div> :
                <div className=''>
                    <div className='flex items-center text-base font-normal text-[#f2f3f3]'>
                        <div className='w-1 bg-[#D0585F] rounded-2xl h-10'></div>
                        <div className="bg-[#D0585F] p-2 mx-4 rounded-lg">
                            <LogoutCurve color='#FFFFFF' />
                        </div>
                    </div>
                </div>}
            <div onClick={handleNav} className={`absolute bottom-4 py-2 bg-[#535B62] rounded-l-full ${!open ? "origin-center rotate-180 -right-6 " : "rotate-0 right-0 "}  `}>
                <ArrowLeft2 color='#FFFFFF ' />
            </div>

        </div>
    )
}

export { OpenSider }