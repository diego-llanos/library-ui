import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
       
        <nav> 

        <div className=" flex shadow-sm bg-white-50  p-4 justify-between screen-xl  ">
            <div className="flex space-x-3  ">
            </div>
            <div className="flex space-x-4 text-blue-600 mr-3 cursor-pointer">
                <SearchIcon />
                <NotificationsNoneIcon />
                <SettingsIcon />
                <ExitToAppIcon />
            </div>
        </div>
        
        </nav>
    )
}

export default Header
