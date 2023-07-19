import React from 'react'
import own from '../images/own.png';

const About = () => {
  return (
    <div className='w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]'>
        <div className='w-full md:flex justify-center items-center px-6 py-4'>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='flex flex-col w-full'>
                    <h1 className='font-bold text-4xl'>About</h1>
                    <span className='pt-3 flex gap-3'>I am<p>Chola Kuboko</p></span>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='w-full flex  justify-center items-center rounded-full h-full overflow-hidden'>
                    <img className='w-[450px] h-[500px] bg-[#ffe4c4] rounded-full' src={own} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About