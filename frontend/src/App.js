import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignInCmpt/SignIn';
import SignUp from './Components/SignUpCmpt/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />

      </Routes>
    </div>
  )
}

export default App