import { FaHome } from "react-icons/fa";
import { CiInboxIn } from "react-icons/ci";
import { FaBlogger } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { TbReport } from "react-icons/tb";
const SideBar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? 'hidden':'block'}w-64 bg-gray-800 fixed h-full px-4 `} >
        <div className='my-2 mb-4 py-2 '>
            <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <ul>

                <li className=' px-2 mb-2 py-2 rounded hover:bg-blue-500 hover:shadow'> 
                    
                    <a href=""> <FaHome className='inline-block mr-2 text-white -mt-2 w-6 h-6' /> Home</a>
                </li>

                <li className='px-2 mb-2 py-2 rounded hover:bg-blue-500 hover:shadow'> 
                    
                    <a href=""> <CiInboxIn className='inline-block mr-2 text-white -mt-2 w-6 h-6' /> Inbox</a>
                </li>


                <li className=' px-2 mb-2 py-2 rounded hover:bg-blue-500 hover:shadow'> 
                    
                    <a href=""> <FaBlogger className='inline-block mr-2 text-white -mt-2 w-6 h-6' /> Blogs</a>
                </li>


                <li className='px-2 mb-2 py-2 rounded hover:bg-blue-500 hover:shadow'> 
                    
                    <a href=""> <TbReport className='inline-block mr-2 text-white -mt-2 w-6 h-6' /> Report</a>
                </li>


                <li className='px-2 mb-2 py-2 rounded hover:bg-blue-500 hover:shadow'> 
                    
                    <a href=""> <IoSettings className='inline-block mr-2 text-white -mt-2 w-6 h-6' /> Settings</a>
                </li>


            </ul>

        </ul>
    </div>
  )
}

export default SideBar