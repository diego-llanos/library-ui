import React from 'react'


import NavBar from './NavBar'
import Table from './Table'
import ContainerInf from './ContainerInf'




const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
            <div className="  px-8 py-1 ">
                    
                
            </div>
            
            <div>
                
                <NavBar/>
                <ContainerInf />
            </div>
        </div>
    )
}

export default Container
