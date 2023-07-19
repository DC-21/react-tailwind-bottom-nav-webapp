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
                <div className='w-full flex justify-center items-center rounded-full h-full overflow-hidden'>
                    <img className='w-[450px] h-[500px] bg-white rounded-full' src={own} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About