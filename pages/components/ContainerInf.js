import React from 'react'


import NavBar from './NavBar'
import Table from './Table'
import SourceCode from './SourceCode'




const ContainerInf = () => {
    return (
        <div className=" bg-gradient-to-r from-black-100 to-green-100 h-full " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                <Table />
            </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                <SourceCode/>
            </p>
            </div>
            <div>

            

           
            </div>
        </div>
    )
}
// className="grid grid-rows-2 gap-4 mt-6 space-x-6  mr-4"
export default ContainerInf
