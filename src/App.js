// import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/login'
import Signup from './signup/signup'
import Navbar from './components/navbar'
import { useAuthContext } from './hooks/useAuthContext'
function App() {
  const { authIsReady, user } = useAuthContext()
  return (
    <div className='App'>
      {authIsReady && (
        <>
          {' '}
          <Navbar />
          <Routes>
            <Route index element={(user && <Home />) || (!user && <Navigate to='Login' />)} />
            <Route path='Login' element={(!user && <Login />) || (user && <Navigate to='/' />)} />
            <Route path='Signup' element={(!user && <Signup />) || (user && <Navigate to='/' />)} />
          </Routes>{' '}
        </>
      )}
    </div>
  )
}

export default App
