import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registration from './pages/auth/Registration.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Registration />} />

        <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
      </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
