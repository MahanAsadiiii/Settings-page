import React from 'react'
import { Setting2, NotificationBing, Sms, TickCircle } from 'iconsax-react'
import { profile } from '../utilities/Index';
import { Select } from 'antd'

const ProfileArea = (props) => {
    return (
        <>
            <div className="flex flex-col items-center bg-[#2B333D] px-5 pt-8 pb-5 rounded-2xl">
                <div className="-mt-20">
                    <img src={profile} sizes='22px' alt="" />
                </div>
                <div className="flex flex-col w-full">
                    <div className="flex justify-between">
                        <div className="">
                            <Select
                                defaultValue={{ value: 'English', label: 'Eng' }}
                                style={{ width: 90, Color: '#111418' }}
                                options={[
                                    {
                                        value: 'English',
                                        label: 'Eng',
                                    },
                                    {
                                        value: 'Turkish',
                                        label: 'Turkish',
                                    },
                                ]} />
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
                    <div className=" flex justify-evenly bg-[#12181D] px-5 py-4 mt-6 rounded-lg">
                        <Sms color='#FFFFFF' />
                        <input type="email" placeholder='gha***@gmail.com' className='outline-none border-none bg-[#12181D] ml-2  text-white font-normal text-sm placeholder:text-white' />
                        <TickCircle variant='Bold' color='#4BA663' />
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col items-center'>
                <img src={profile} alt="" />
                <div className="flex flex-col gap-4 mt-8">
                    <div className="bg-[#12181D] p-2 rounded-lg">
                        <Setting2 color='#FFFFFF' />
                    </div>
                    <div className="bg-[#12181D] p-2 rounded-lg">
                        <NotificationBing color='#FFFFFF' />
                    </div>
                </div>
            </div> */}
        </>
    )
}

export { ProfileArea }