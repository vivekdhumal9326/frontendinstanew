import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("adminToken")
  );

  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/adminlogin' element={<AdminLogin onLogin={() => setIsAuth(true)}/>} />
        <Route path='/admindashboard' element={isAuth ? <AdminDashboard/> : <AdminLogin onLogin={() => setIsAuth(true)}/>} />
      </Routes>
    </div>
  );
}

export default App;
