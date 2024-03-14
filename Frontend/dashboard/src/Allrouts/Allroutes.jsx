import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login/Login'
import SignupFirst from '../Pages/Signup/SignupFirst'
import Signup from '../Pages/Signup/Signup'
import SignupSecond from '../Pages/Signup/SignupSecond'

const Allroutes = () => {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup/step-1' element={<SignupFirst/>}/>
         <Route path='/signup/step-2' element={<SignupSecond/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='*' element={<p>404 page not found</p>}/>
      </Routes>
    </div>
  )
}

export default Allroutes
