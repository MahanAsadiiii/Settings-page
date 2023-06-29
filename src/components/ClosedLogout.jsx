import React from 'react'
import {LogoutCurve} from 'iconsax-react'
function ClosedLogout() {
    return (
        <div className=''>
            <div className='flex items-center text-base font-normal text-[#f2f3f3]'>
                <div className='w-1 bg-[#D0585F] rounded-2xl h-10'></div>
                <div className="bg-[#D0585F] p-2 mx-4 rounded-lg">
                    <LogoutCurve color='#FFFFFF' />
                </div>
            </div>
        </div >
    )
}

export {ClosedLogout}