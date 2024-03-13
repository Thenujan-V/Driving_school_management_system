import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignInCmpt/SignIn';
import SignUp from './Components/SignUpCmpt/SignUp';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App