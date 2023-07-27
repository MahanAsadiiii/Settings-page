import React, { useState } from 'react'
import { Input, Form, message } from 'antd';


function ChangePass() {

    const [password, setPassword] = useState();
    const [submit, setSubmit] = useState(false);
    const [eightError, setEight] = useState(false);
    const [combinationError, setCombination] = useState(false);
    const [upperError, setUpper] = useState(false);
    const [lowerError, setLower] = useState(false);
    const [passwordPower, setPasswordPower] = useState(0)
    const key = 'updatable';



    const handleChange = (value) => {
        const lower = new RegExp('(?=.*[a-z])')
        const upper = new RegExp('(?=.*[A-Z])')
        const num = new RegExp('(?=.*[0-9])')
        const special = new RegExp('(?=.*[!@#$%^&*(),.?":{}|<>])')
        const lenght = new RegExp('(?=.{8,})')
        var powerCounter = 0

        if (lenght.test(value)) {
            setEight(true);
            powerCounter++
        } else {
            setEight(false)
        }

        if (upper.test(value)) {
            setUpper(true);
            powerCounter++
        } else {
            setUpper(false)
        }

        if (lower.test(value)) {
            setLower(true);
            powerCounter++
        } else {
            setLower(false)
        }

        if (num.test(value) && special.test(value) && lower.test(value)) {
            setCombination(true);
            powerCounter++
        } else {
            setCombination(false)
        }

        if (powerCounter === 4) {
            setPassword(value)
        }

        setPasswordPower(powerCounter);

    };

    const checkHandler = (value) => {
        if (password === value) {
            setSubmit(true)
        }else{
            setSubmit(false)
        }
    }

    const submitHandler = () => {
        if (submit) {
            openMessage()
        }
    }

    const openMessage = () => {
        message.loading({ content: 'Loading...', key , className:"text-lg"});
        setTimeout(() => {
          message.success({ content: 'Successfully sent!', key, duration: 2, className:"text-lg"});
        }, 3000);
      };

    return (
        <div className={`mt-6 `}>

            <div className={`pt-10 pb-6 px-6 dark:bg-[#212226] rounded-2xl  dark:text-white bg-[#F2F3F3] text-black`}>
                <div className="flex items-center">
                    <div className="bg-[#4BA663] h-6 w-1 rounded-2xl"></div>
                    <h2 className='ml-2 text-base font-[poppins] font-normal'>Change Password</h2>
                </div>
                <div className="flex gap-6 justify-between mt-8">
                    <Form onFinish={submitHandler} className="w-1/2 mr-6" >
                        <Input.Password placeholder='Old Password' className='px-5 py-3 dark:bg-[#2B333D] border-[#2B333D] passwordInput' />
                        <Input.Password placeholder='New Password' className='my-6 px-5 py-3 dark:bg-[#2B333D] border-[#2B333D] passwordInput' onChange={(e) => handleChange(e.target.value)} />
                        <Input.Password placeholder='Confirm password' className='px-5 py-3 dark:bg-[#2B333D] border-[#2B333D] passwordInput' onChange={(e) => checkHandler(e.target.value)} />
                        <button type='submit' className={`mt-6 w-full py-4 ${submit && "bg-[#4BA663]"} rounded-lg font-lg font-bold font-[roboto] border-[#4BA663] border-2 dark:text-white text-black`}>Change Password</button>
                    </Form>
                    <div className="w-1/2">
                        <div>
                            <h3 className='text-lg font-medium mb-3 font-[Roboto]'>It is better if:</h3>
                            <ul className='ml-5 text-base font-[Roboto] font-normal'>
                                <li className={`list-disc ${!eightError ? 'text-red-500' : 'text-green-500'}`}>At least 8 characters </li>
                                <li className={`list-disc my-3 ${!combinationError ? 'text-red-500' : 'text-green-500'}`}>A combination of letters, numbers and symbols</li>
                                <li className={`list-disc my-3 ${!lowerError ? 'text-red-500' : 'text-green-500'}`}>Include lowercase letters</li>
                                <li className={`list-disc my-3 ${!upperError ? 'text-red-500' : 'text-green-500'}`}>Include uppercase letters</li>
                            </ul>
                        </div>
                        <div className="">
                            <div className="flex justify-between mb-3 mt-7">
                                <h4 className='text-[#535B62] text-lg font-medium'>Strenght</h4>
                                <h4 className='text-[#535B62] text-lg font-medium'>Password</h4>
                                <h4 className='text-[#535B62] text-lg font-medium'>Weak</h4>
                            </div>
                            <div className="flex justify-evenly gap-3">
                                <div className={`bg-gradient-to-r ${passwordPower < 4 ? "from-[#c5c5c5] to-[#f3f3f3]" : "from-[#D0585F] to-[#E99C53]"} border-gray-300 dark:border-[#212226] border-2 w-1/4 h-3 rounded-2xl`}></div>
                                <div className={`bg-gradient-to-r ${passwordPower < 3 ? "from-[#c5c5c5] to-[#f3f3f3]" : "from-[#ECA551] to-[#FDD448]"} border-gray-300 dark:border-[#212226] border-2 w-1/4 h-3 rounded-2xl`}></div>
                                <div className={`bg-gradient-to-r ${passwordPower < 2 ? "from-[#c5c5c5] to-[#f3f3f3]" : "from-[#F5D449] to-[#B0C154]"} border-gray-300 dark:border-[#212226] border-2 w-1/4 h-3 rounded-2xl`}></div>
                                <div className={`bg-gradient-to-r ${passwordPower < 1 ? "from-[#c5c5c5] to-[#f3f3f3]" : "from-[#A2BE56] to-[#5BAB61]"} border-gray-300 dark:border-[#212226] border-2 w-1/4 h-3 rounded-2xl`}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { ChangePass }