// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/login'
import Signup from './signup/signup'
import Navbar from './components/navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='Login' element={<Login />} />
        <Route path='Signup' element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
