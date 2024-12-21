import Home from './pages/Home/Home'
import { Routes,Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  
//Problem 

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async(user)=>{
     if(user){
      console.log("LoggedIn");
      navigate('/');
     }else{
      console.log("LoggedOut");
      navigate('/login');
     }
    })
  },[]) 

// problem end


  return (
    <div className="app">
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    
    </div>
  )
}

export default App