import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="logo">Admin</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className='icon' />
                        <span> Dashboard</span></li>
                    <p className="title">LISTS</p>
                    <li>
                        <GroupIcon className='icon' />
                        <span> Users</span></li>
                    <p className="title">Title</p>
                    <li>
                        <CategoryIcon className='icon' />
                        <span>Products</span></li>
                    <li>
                        <ShoppingCartIcon className='icon' />
                        <span>Orders</span></li>

                    <li>
                        <LocalShippingIcon className='icon' />
                        <span>Delivery</span></li>
                    <p className="title">USEFUL</p>

                    <li>
                        <BarChartIcon className='icon' />
                        <span>Stats</span></li>
                    <li>
                        <NotificationsIcon className='icon' />
                        <span>Notifications</span></li>
                    <li>
                        <HealthAndSafetyIcon className='icon'/>
                        <span>System Health</span></li>
                    <li>
                        <FileCopyIcon className='icon' />
                        <span>Logs</span></li>
                    <p className="title">SERVICE</p>
                    <li>

                        <SettingsIcon className='icon' />
                        <span>Settings</span></li>
                    <p className="title">USER</p>
                    <li>

                        <AccountCircleIcon className='icon' />
                        <span>Profile</span></li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span></li>


                </ul>
            </div>
            <div className='bottom'>color options</div>
        </div>
    )
}

export default Sidebar