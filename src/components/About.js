import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
            </div>
            <div>
            </div>
        </div> 
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4l font-bold about-1'>
                    <p>
                        Hi, I'm Saravana Kumaran, nice to meet you. Please take a look around
                    </p>
                </div>
                <div  className='about-2'>
                    <p>
                        I am passionate about building software that improves the lives of people
                        around me. Likes to learn more about creating software for clients ranging from
                        individuals and small buisnesses all the way to large enterprise corporations.
                    </p>
                </div>
            </div> 
        </div>
    </div>
  )
}
