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
        <Route path='/results' element={<Results />} />
        <Route path='/adminverticalnav' element={<AdminVerticalNav />} />
        <Route path='/studentsdetails' element={<StudentsDetails />} />
        <Route path='/viewdetails/:user_id' element={<ViewDetails />} />
        <Route path='/userdetails' element={<UserDetails />} />
        <Route path='/examDate/:sId' element={<ExamDate />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/result' element={<Result />} />
        <Route path='/review' element={<Review />} />
        <Route path='/reviewcheck' element={<ReviewCheck />} />
        <Route path='/viewreview/:sId' element={<ViewReview />} />
        
      </Routes>
    </div>
  )
}

export default App