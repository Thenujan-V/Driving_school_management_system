import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import StudentEntroll from './Pages/StudentEntroll';
import VerifyMsg from './Pages/VerifyMes';
import Message from './Pages/Message';
import Content from './Pages/Content';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/studententroll' element={<StudentEntroll />} />
        <Route path='/verifymsg' element={<VerifyMsg />} />
        <Route path='/message' element={<Message />} />
        <Route path='/content' element={<Content />} />

      </Routes>
    </div>
  )
}

export default App