import Head from 'next/head'
import Sidebar from './components/sidebar'
import Header from "./components/Header"
import Container from './components/Container'
import DropDown from './components/DropDown'


export default function Home() {
  return (
    <div>
      <div className="flex w-screen h-screen  " >
        <Sidebar />
        <div className="w-screen h-screen  overflow-y-scroll">

          <Header />
          <DropDown />     
          <Container />
        </div>
          
      </div>

    </div>
  )
}
