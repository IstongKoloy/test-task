import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Monitoring from './components/Monitoring'
import MainLayout from './Layouts/MainLayout'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/bundy' element={<Monitoring />} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
