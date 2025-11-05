import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'
import { Outlet } from 'react-router-dom'



export default function App() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    {/* <Body></Body> */}
    <Footer></Footer>
    </>
  )
}
