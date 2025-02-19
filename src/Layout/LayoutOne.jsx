 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import Navbar from '../Components/Navbar'
 //=========== LayoutOne =========//
 const LayoutOne = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
 }
 export default LayoutOne