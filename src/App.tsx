import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import Login from './components/login/login'
import Register from './components/register/register'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </div>
  )
}
