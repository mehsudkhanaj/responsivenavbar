
import Navbar from './Navbar'
const Dashboard = ({sidebarToggle,setsidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? '':''}w-full`}>
        <Navbar sidebarToggle={sidebarToggle} setsidebarToggle={setsidebarToggle}/>
    </div>
  )
}

export default Dashboard