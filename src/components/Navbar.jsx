
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {FaBell} from 'react-icons/fa';
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = ({sidebarToggle,setsidebarToggle}) => {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between ml-60' >
        <div className='flex items-center text-xl'> 
            <FaBars className='text-white me-4 cursor-pointer' onClick={()=>setsidebarToggle(true)}/>
            <span className='text-white font-semibold'>E-comerece</span>

        </div>
        <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='
                    p-1 focus:outline-none text-white md:text-black
                    '>
                        <FaSearch/>

                    </button>
                </span>
                <input type="text"  className='w-full px4 py-1 p-12 rounded shadow outline-none md:block'/>
            </div>
            <div>
                <FaBell className='w-6 h-6 text-white'/>
            </div>
            <div className='relative'>
                <button className='text-white group'>
                <FaRegUserCircle  className='w-6 h-6 mt-1'/>
                <div className='z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0 bg-white
                '>
                    <ul className='py-2 text-sm text-gray-950 '>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Setting</a></li>
                        <li><a href="">Log Out</a></li>


                    </ul>
                </div>
                </button>
            </div>


        </div>
    </nav>
  )
}

export default Navbar