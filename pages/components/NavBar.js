import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

const Header = () => {
    return (
        <div className="flex shadow-md bg-gray-50  p-4 justify-between  ">
            <div className="flex space-x-24  ">
                <p className="text-blue-400 font-bold text-xl ">TABLE MODEL 1 </p>
                <p> </p>
                

            </div>
            <div className="flex space-x-4 text-blue-400 mr-3 cursor-pointer">

                <NavigateBeforeIcon />
                <NavigateNextIcon />

 
                <p className="text-gray-600 font-semibold">1-3 of 3</p>
            </div>
        </div>
    )
}

export default Header