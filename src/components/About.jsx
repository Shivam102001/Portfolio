import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen about text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2' gap-8>
          <div className='sm:text-right pb-8 pl-4'>
             <p className='text-4xl font-bold inline border-b-4 border-teal-600'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
             <div className='sm:text-right text-4xl font-bold'>
              <p>Welcome to my portfolio! I'm Shivam Varshney, I hope you are doing well. </p>
             </div>
             <div>
              <p>
            I began my journey in the world of technology with NIT bhopal. The Coding Culture provided me with a solid understanding of software development principles, algorithms, and data structures. Over the years, I have honed my skills through various projects and professional experiences, consistently pushing the boundaries of what I can achieved.
          </p>
          </div>     
        </div>
         

        </div>

      </div>
    
  )
}

export default About
