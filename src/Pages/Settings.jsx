import React from 'react'
import Layout from '../components/Layout'
import {  MainPage,CopyRight } from '../components/Index'


const Settings = () => {

    return (
        <Layout>
            <div className="w-full flex flex-col justify-between">
            <MainPage />
            <CopyRight />
            </div>
        </Layout>
    )
}

export default Settings