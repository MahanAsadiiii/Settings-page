import React from 'react'
import { Category, Android, Briefcase, Notification, Trade, Setting2 } from 'iconsax-react'

function ClosedNavbar() {
    return (
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
    )
}

export {ClosedNavbar}