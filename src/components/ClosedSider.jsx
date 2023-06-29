import React from 'react'
import { Setting2, NotificationBing, Category, Android, Briefcase, LogoutCurve, ArrowRight2 } from 'iconsax-react'
import { profile } from '../utilities/Index';



function ClosedSider(props) {
  return (
    <div className='relative flex flex-col justify-between items-center h-screen px-6 pb-10 pt-6 col-start-1 col-end-2 bg-[#111418]'>

      <div className='flex flex-col items-center'>
        <img src={profile} alt="" />
        <div className="flex flex-col gap-4 mt-8">
          <div className="bg-[#12181D] p-2 rounded-lg">
            <Setting2 color='#FFFFFF' />
          </div>
          <div className="bg-[#12181D] p-2 rounded-lg">
            <NotificationBing color='#FFFFFF' />
          </div>
        </div>
      </div>

      <div className=''>
        <ul className='font-[poppins]'>

          <li className='flex items-center text-base font-normal text-[#f2f3f3]'>
            <div className='w-1 bg-[#4BA663] rounded-2xl h-10'></div>
            <div className="bg-[#4BA663] p-2 mx-4 rounded-lg">
              <Category color='#FFFFFF' />
            </div>
          </li>

          <li className='flex items-center my-6 text-base font-normal text-[#f2f3f3]'>
            <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
            <div className="bg-[#535B62] p-2 mx-4 rounded-lg">
              <Android color='#FFFFFF' />
            </div>
          </li>

          <li className='flex items-center my-6 text-base font-normal text-[#f2f3f3]'>
            <div className='w-1 bg-[#4BA663] rounded-2xl'></div>
            <div className="bg-[#535B62] p-2 mx-4 rounded-lg">
              <Briefcase color='#FFFFFF' />
            </div>
          </li>

        </ul>
      </div>
      <div className=''>
        <div className='flex items-center text-base font-normal text-[#f2f3f3]'>
          <div className='w-1 bg-[#D0585F] rounded-2xl h-10'></div>
          <div className="bg-[#D0585F] p-2 mx-4 rounded-lg">
            <LogoutCurve color='#FFFFFF' />
          </div>
        </div>

      </div>

      <div className="absolute -right-6 bottom-10 py-2 bg-[#535B62] rounded-r-full origin-center">
        <ArrowRight2 color='#FFFFFF' />
      </div>
    </div>
  )
}

export { ClosedSider }