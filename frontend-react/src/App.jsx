
import Registration from './pages/auth/Registration.jsx'
import { BrowserRouter, Route, Routes , Navigate } from 'react-router-dom'
import Layout from './layouts/Layout';
import UserLogin from './pages/auth/UserLogin'
import { useSelector } from 'react-redux';
import Dashboard from "./pages/Dashboard";
import LoginReg from "./pages/auth/LoginReg";
import SendPasswordResetEmail from './pages/auth/SendPasswordResetEmail'
import ResetPassword from './pages/auth/ResetPassword'
import Signin from './pages/auth/SigninSignup/signIn'
import Signup from './pages/auth/SigninSignup/signUp'
import './App.css'
import NewComponent from './pages/cart/cart.jsx';
import Navbar from './components/Navbar.jsx';
import SignOut from './pages/auth/SigninSignup/signOut';
import ListProductCategories from './pages/products/productListCat.jsx';
import GetOneProductCategory from './pages/products/singleProductCat.jsx';
import DeleteProductCategory from './pages/products/deleteProductCat.jsx';
import CreateProductCategory from './pages/products/createProductCat.jsx';
import UpdateProductCategory from './pages/products/updateProductCat.jsx';
import ListProducts from './pages/products/productList.jsx';
import DefaultCarousel from './pages/new.jsx';
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
        <Route path="/cart" element={<NewComponent />} />



        <Route path="/categories" element={<ListProductCategories />} />
        <Route path='/categoriesid' element={<GetOneProductCategory />}/>
        <Route path="/categoriesdelete" element={<DeleteProductCategory />} />
        <Route path="/categoriescreate" element={<CreateProductCategory />} />
        <Route path="/categoriesupdate" element={<UpdateProductCategory />} />
       

     <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/signOut" element={<SignOut/>} />
      <Route path="/carousel" element={<DefaultCarousel />} />
        
        <Route path="/products" element={<ListProducts />} />
      </Route>
      
     
      
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
