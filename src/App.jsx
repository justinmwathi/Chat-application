
import './App.css'
import Room from './Pages/room'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import PrivateRoutes from './components/PrivateRoutes'
import { AuthProvider } from './utils/AuthContext'
import Register from './Pages/Register'
function App() {


  return (
    <>
    <Router>
     <AuthProvider>
      <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path='/' element={<Room/>}/>
      </Route>
      <Route path='/' element={<Room/>}/>
      </Routes>
      </AuthProvider> 
     </Router>
    </>
  )
}

export default App
