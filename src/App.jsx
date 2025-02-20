import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignupPage from './Components/SignIn/SignIn'
import SignupSecondPage from './Components/SigninSecondpage/SignInSecond'
import Signup from './Components/SignUpthirdpage/SignUp'
import Signupcode from './Components/SignUpthirdpage/Signupcode'
import Forgetpassword from './Components/Forgetpassword/Forgetpassword'
import Resetpassword from './Components/Resetpassword/Resetpassword'
import OAuthHandler from "./Components/OAuthHandler";

export default function App() {
  return (
  <>
  <Router>
      <Routes>
    <Route path='/' element={<SignupPage/>} />
    <Route path='/Signup' element={<SignupSecondPage/>} />
    <Route path='/Login' element={<Signup/>} />
    <Route path='/Logincode' element={<Signupcode/>} />
    <Route path="/auth/apple/callback" element={<OAuthHandler />} />

    {/* <Route path="/oauth/callback" element={<OAuthHandler />} /> */}
    <Route path='/Forgetpassword' element={<Forgetpassword/>} />
    <Route path='/Resetpassword/:token' element={<Resetpassword/>} />

  </Routes>
     </Router>
  
  </>
  )
}
