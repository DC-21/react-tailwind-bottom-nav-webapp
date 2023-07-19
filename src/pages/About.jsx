import React from 'react'
import me from '../images/me.png';

const About = () => {
  return (
    <div className='w-full flex justify-center items-center md:h-screen h-auto bg-[#f6a98c]'>
        <div className='w-full md:flex flex-col'>
            <div className='w-1/2 items-center justify-center'>
                <div></div>
            </div>
            <div className='w-1/2 items-center justify-center'>
                <div className='w-full justify-center rounded-full'>
                    <img className='' src={me} alt='image'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About