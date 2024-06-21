import React, { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
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
import Results from './Components/Results';
import AdminVerticalNav from './Components/AdminPanel/AdminVerticalNav';
import StudentsDetails from './Components/AdminPanel/StudentsDetails';
import ViewDetails from './Components/AdminPanel/ViewDetails';
import UserDetails from './Components/AdminPanel/UserDetails';
import ExamDate from './Components/AdminPanel/ExamDate';
import Exam from './Components/AdminPanel/Exam';
import Result from './Components/AdminPanel/Result';
import Review from './Pages/Review';
import ViewReview from './Components/AdminPanel/ViewReview';
import ReviewCheck from './Components/AdminPanel/ReviewCheck';
import Instractor from './Components/AdminPanel/Instractor';
import Profile from './Components/AdminPanel/Profile';
import EmployeeVerticalNav from './Components/EmployeePanel/EmployeeVerticalNav';
import EmployeeProfile from './Components/EmployeePanel/Profile';
import ViewStudents from './Components/EmployeePanel/ViewStudents';
import AssignDate from './Components/EmployeePanel/AssignDate';
import Attendance from './Components/EmployeePanel/Attendance';
import AddEmployee from './Components/AdminPanel/AddEmployee';
import AdminDetails from './Components/AdminPanel/AdminDetails';
import Trial from './Components/AdminPanel/Trial';
import Navbar from './Components/Navbar';
import VerticalNavbar from './Components/VerticalNavbar';
import { retrieveId } from './Services/getToken';
import './App.css'


const App = () => {
  const decodedToken = retrieveId()
  const [role, setRole] = useState('')
  useEffect(() => {
    if(decodedToken){
      const userRole = decodedToken.role
      console.log('rrr :' , userRole)
      setRole(userRole)
    }
    else{
      setRole('')
    }
  }, [decodedToken])
  return (
    <Router>
      {(!role || role === 'user') &&<div className='users'>
        <Navbar />
        <div className='userContents'>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/studententroll/:vehicle_class' element={<StudentEntroll />} />
            <Route path='/verifymsg' element={<VerifyMsg />} />
            <Route path='/content' element={<Content />} />
            <Route path='/review/:user_id' element={<Review />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/userdashboard' element={<UserDashboard />} />
            <Route path='/userdocuments' element={<UserDocuments />} />
            <Route path='/paymentDetails' element={<PaymentDetails />} />
            <Route path='/results' element={<Results />} />
          </Routes>
        </div>
      </div>}

      {role && role === 'admin' && <div className='admin'>
        <AdminVerticalNav className='adminVerticalNav'/>
        <div className='adminContents'>
          <Routes>
            <Route path='/studentsdetails' element={<StudentsDetails />} />
            <Route path='/viewdetails/:user_id' element={<ViewDetails />} />
            <Route path='/userdetails' element={<UserDetails />} />
            <Route path='/examDate/:sId' element={<ExamDate />} />
            <Route path='/exam' element={<Exam />} />
            <Route path='/trial' element={<Trial />} />
            <Route path='/result' element={<Result />} />
            <Route path='/result' element={<Result />} />
            <Route path='/addemployee' element={<AddEmployee />} />
            <Route path='/reviewcheck' element={<ReviewCheck />} />
            <Route path='/viewreview/:sId' element={<ViewReview />} />
            <Route path='/instractor' element={<Instractor />} />
            <Route path='/adminDetails' element={<AdminDetails />} />
            <Route path='/adminpanel' element={<Profile />} />
          </Routes>
        </div>
      </div>}

      {role && role === 'instructor' && <div className='instructer'>
        <EmployeeVerticalNav />
        <div className='intructerContents'>
          <Routes>
            <Route path='/instracterpanel' element={<EmployeeProfile />} />
            <Route path='/viewStudents' element={<ViewStudents />} />
            <Route path='/assignDate/:sId' element={<AssignDate />} />
            <Route path='/attendance/:sId/:first_name' element={<Attendance />} />
          </Routes>
        </div>
      </div>}
    </Router>
  )
}

export default App