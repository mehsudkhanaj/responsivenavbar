import SideBar from './components/SideBar'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import {useState} from 'react'
import './App.css'

function App() {
  const [sidebarToggle, setsidebarToggle] = useState(false)
return (
  <div className='flex'>
  <SideBar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}/>
  <Dashboard/>

  </div>
)
}

export default App
