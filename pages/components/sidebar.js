import React from 'react'
import ClearAllIcon from '@material-ui/icons/ClearAll';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsIcon from '@material-ui/icons/Settings';

const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl overflow-y-scroll">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <img 
                    className="m-2 w-10 sm:w-20 self-center"                                          
                    src="/ioo.png"
                    alt="Picture of the author"
                 />
                

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="text-gray-400">Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <HomeIcon className="text-blue-300 {color: #facc15}" />
                            <p className=" "  >Starting</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllIcon className="text-blue-300" />
                            <p className="" >Components</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ComputerIcon className="text-blue-300" />
                            <p className="  " >System</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <BorderColorIcon className="text-blue-300" />
                            <p className="  " >Styles</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <EqualizerIcon className="text-blue-300" />
                            <p className="  " >Graphs</p>
                        </div>
                    </div>

                </div>
                <div className="space-y-6" >
                    <h1 className="text-gray-400">Settings</h1>
                    <div className="">
                        <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SettingsIcon className="text-blue-300" />
                            <p className=" " >Settings</p>
                        </div>
                    </div>
                </div>
                
                    <div  className="space-y-6" >
                        <div className="">
                            <div className="flex p-3 text-black-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                                 <SettingsIcon className="text-blue-300" />
                                <p className=" " >test</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}

export default Sidebar