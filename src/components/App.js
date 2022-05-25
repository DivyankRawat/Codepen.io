import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import { AuthContextProvider } from '../context/AuthContext'

const App = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </AuthContextProvider>
  )
}

export default App