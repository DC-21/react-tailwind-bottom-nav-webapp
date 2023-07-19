import React from 'react'
import own from '../images/own.png';

const About = () => {
  return (
    <div className='w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]'>
        <div className='w-full md:flex justify-center items-center'>
            <div className='w-1/2 flex items-center justify-center'>
                <div>
                    <p>Hello</p>
                </div>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <div className='w-full justify-center rounded-full h-[400] overflow-hidden'>
                    <img className='object-cover w-full h-[500px] overflow-hidden bg-white' src={own} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About