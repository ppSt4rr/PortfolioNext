"use client"

import './preloader.css'
import  {preLoaderAnim} from './loader'
import { useEffect } from 'react'


const PreLoader = () => {

    useEffect(()=>{
        preLoaderAnim();
    },[])

    return(
        <div className='preloader gap-[5px] overflow-hidden text-[14px] 
        sm:gap-[10px] sm:text-[18px] lg:text-[20px]'>
            <div className='texts-container w-500 flex h-60 items-center
            justify-center gap-[5px] overflow-hidden text-[14px] font-extrabold
            opacity-0 sm:gap-[10px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>
                <span>bienvenue</span>
                <div className='sub hidden'></div>
            </div>
        </div>
    )
}

export default PreLoader