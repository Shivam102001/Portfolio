import React,{useState} from 'react'
import { FaTimes,FaBars,FaInstagram,FaGithub,FaLinkedinIn} from 'react-icons/fa';
import logo from '../assets/Profile.jpg';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';



const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleclick=()=>setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-gray-300 bg-[#08111e]'>
      <div className='flex justify-between '>
        <img className='rounded-full' src={logo} alt='Logo' style={{width:'30px'}}/>
        <div className='text-gray-100 font-bold flex items-center p-2'> <p>Shivam Varshney</p></div>
      </div>

      
        <ul className='md:flex hidden'>
            <li className='uppercase text-sm font-semibold'>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='uppercase text-sm font-semibold'>
            <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='uppercase text-sm font-semibold'>
            <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='uppercase text-sm font-semibold'>
            <Link to='work' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='uppercase text-sm font-semibold'>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>
      <div className='md:hidden z-10' onClick={handleclick}>
        {!nav? <FaBars/> : <FaTimes/>}
      </div>
      
      <ul className={!nav? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#08111e] flex flex-col justify-center items-center'}>
            <li className='py-6 uppercase text-1xl font-semibold'>
              <Link onClick={handleclick} to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='py-6 uppercase text-1xl font-semibold'>
            <Link onClick={handleclick} to='about' smooth={true} duration={500}>
              About
              </Link>
            </li>
            <li className='py-6 uppercase text-1xl font-semibold'>
            <Link onClick={handleclick} to='skills' smooth={true} duration={500}>
              Skills
              </Link>
            </li>
            <li className='py-6 uppercase text-1xl font-semibold'>
            <Link onClick={handleclick} to='work' smooth={true} duration={500}>
              Work
              </Link>
            </li>
            <li className='py-6 uppercase text-1xl font-semibold'>
            <Link onClick={handleclick} to='contact' smooth={true} duration={500}>
              Contact
              </Link>
            </li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
      <li className='w-[160px] h-[60px] flex justify-between items-center'>
        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-500 rounded-full rounded-l-none bg-blue-800 font-bold' href="/">
          LinkedIn<FaLinkedinIn size={30}/>
          </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center'>
        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-500 rounded-full rounded-l-none bg-[#333] font-bold' href="/">
          Github<FaGithub size={30}/>
          </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center'>
        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-500 rounded-full rounded-l-none bg-gray-900 font-bold' href="/">
          Email<HiOutlineMail size={30}/>
          </a>
      </li>
      <li className='w-[160px] h-[60px] flex justify-between items-center'>
        <a className='flex justify-between items-center w-full text-gray-300 ml-[-100px] hover:ml-[-10px] duration-500 rounded-full rounded-l-none bg-pink-600 font-bold' href="/">
          Instagram<FaInstagram size={30}/>
          </a>
      </li>
      
    </ul>
      </div>
    </div>
  )
}

export default Navbar
