 import React from 'react'
 import { Outlet } from 'react-router-dom'
 import Navbar from '../Components/Navbar'
import UserFromComponents from '../Components/UserFromComponents'
 //=========== LayoutOne =========//
 const LayoutOne = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   <UserFromComponents/>
   </>
  )
 }
 export default LayoutOne