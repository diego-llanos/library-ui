import React from 'react'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';


const Header = () => {
    return (
       

        <div className=" flex shadow-sm bg-white-50  p-4 justify-between   ">
            <div className="flex space-x-3  ">
            </div>
            <div className="flex space-x-4 text-red-600 mr-3 cursor-pointer">
                <SearchIcon />
                <NotificationsNoneIcon />
                <SettingsIcon />
                <ExitToAppIcon />
            </div>
        </div>
        
    )
}

export default Header
