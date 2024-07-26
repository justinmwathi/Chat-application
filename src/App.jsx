
import './App.css'
import Room from './Pages/room'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import LoginPage from './Pages/LoginPage'
import PrivateRoutes from './components/PrivateRoutes'
function App() {


  return (
    <>
    <Router>
      <Routes>
      <Route path='/login' element={<LoginPage/>}/>
      <Route element={<PrivateRoutes/>}>
      <Route path='/' element={<Room/>}/>
      </Route>
      <Route path='/' element={<Room/>}/>
      </Routes>
     
     </Router>
    </>
  )
}

export default App
