import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import Blog from './pages/Blog'
import { Blogs } from './pages/Blogs'
import { Publish } from './components/Publish'
import { useEffect } from 'react'

function App() {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/publish' element={<Publish />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null; // Render nothing
}

export default App
