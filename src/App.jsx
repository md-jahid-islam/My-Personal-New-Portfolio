 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
 import './App.css'
 import Home from './Pages/Home'
 import About from './Pages/About'
 import Contact from './Pages/Contact'
 import Blog from './Pages/Blog'
 import LayoutOne from './Layout/LayoutOne'
 import Services from './Pages/Services'
 import Portfolio from './Pages/Portfolio'
 function App() {
 const mainroute = createBrowserRouter(
 createRoutesFromElements(
 <Route>
 <Route path='/' element ={<LayoutOne/>} >
 <Route path='/home' element = {<Home/>} />
 <Route path='/about' element = {<About/>} />
 <Route path='/portfolio' element = {<Portfolio/>} />
 <Route path='/blog' element = {<Blog/>} />
 <Route path='/services' element = {<Services/>} />
 <Route path='/contact' element = {<Contact/>} /> 

 
 
 </Route>
 </Route>
 )
 )
 return (
 <>
 <RouterProvider router={mainroute} />
 </>
 )
 }
 export default App
 
