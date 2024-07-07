import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen contact flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4 border-teal-600 text-gray-300'>Contact</p>
           <p className='text-gray-300 py-4'>Please feel free to touch with me</p>
        </div>
        <input className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-gray-300 py-2 px-4' type="text" name="name" placeholder='Name'/>
        <input className='rounded-full bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-gray-300 py-2 px-4 my-4' type="email" name="email" placeholder='Email'/>
        <textarea className='rounded-3xl resize-none bg-gray-700  focus:border-blue-500  focus:bg-gray-800 focus:outline-none text-gray-300 py-2 px-4' name="message" rows='10' placeholder='Message'></textarea>
        <button className='text-white rounded-full border-2 hover:bg-teal-600 hover:border-teal-600 px-4 py-3 my-8 mx-auto flex items-center'>Contact me</button>
      </form>
    </div>
  )
}

export default Contact
