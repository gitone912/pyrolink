
import Registration from './pages/auth/Registration.jsx'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
import Layout from './pages/Layout';
import UserLogin from './pages/auth/UserLogin'
import { useSelector } from 'react-redux';
import Dashboard from "./pages/Dashboard";
import LoginReg from "./pages/auth/LoginReg";
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail'
import ResetPassword from './pages/auth/ResetPassword'
import Signin from './pages/auth/SigninSignup/signIn'
import Signup from './pages/auth/SigninSignup/signUp'
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register"element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
        <Route path="/login" element={!access_token ? <UserLogin /> : <Navigate to="/dashboard" />} />
        {/* <Route path="/login" element={<UserLogin />} /> */}
        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        <Route path="/dashboard" element={access_token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/send-password-reset-email/" element= {<SendPasswordResetEmail />} />
        <Route path="/auth/reset-password/:id/:token" element={<ResetPassword />} />
        
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      </Route>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
