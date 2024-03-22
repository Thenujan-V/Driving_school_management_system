import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignInCmpt/SignIn';
import SignUp from './Components/SignUpCmpt/SignUp';
import Home from './Pages/Home';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App