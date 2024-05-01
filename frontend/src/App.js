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
import Content from './Pages/Content';
import Payment from './Pages/Payment';
import UserDashboard from './Pages/UserDashboard';
import UserProfile from './Pages/UserProfile';
import UserDocuments from './Pages/UserDocuments';
import PaymentDetails from './Components/PaymentDetails';


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
        <Route path='/studententroll/:index' element={<StudentEntroll />} />
        <Route path='/verifymsg' element={<VerifyMsg />} />
        <Route path='/content' element={<Content />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/userdocuments' element={<UserDocuments />} />
        <Route path='/paymentDetails' element={<PaymentDetails />} />

      </Routes>
    </div>
  )
}

export default App