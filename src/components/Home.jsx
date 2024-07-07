import React from 'react';
import { HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen banner'>
      <div className='max-w-[1000px] mx-auto h-full px-8  flex flex-col justify-center'>
        <p className='text-[#ececec]'>Hi , My name is</p>
        <h1 className='text-5xl font-bold text-[#ececec] '>Shivam Varshney</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#ececec]'>I 'am  a Full Stack Developer</h2>
        <p className='text-[#ececec] py-4 max-w-[700px]'>A Full Stack Developer is a versatile software engineer proficient in both front-end and back-end development. This role requires a broad understanding of various technologies and the ability to handle all aspects of a web application's development process.</p>
        <div>
            <button className='bg-teal-600 text-white rounded-full border-2 px-6 py-3 my-2 group flex items-center hover:bg-teal-600 hover:border-teal-600'>
                View Work
                <span className='duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Home
