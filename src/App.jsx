
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
// import CoursesPage from './components/Course/CoursesPage'

import Chat from './components/Chat/Chat'
import Course from './components/Course/Course'

function App() {

  return (
    <Router>
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="/course" element={<Course/>}/>
              <Route path="/chat" element={<Chat/>}/>
            </Route>
          </Routes>
        </AuthProvider>
    </Router>
  )
}

export default App
