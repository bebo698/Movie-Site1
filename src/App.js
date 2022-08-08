import React, { Component } from 'react';
import Home from './components/Home/Home.jsx';
import Movies from './components/Movies/Movies.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Tv from './components/Tv/Tv';
import Notfound from './components/Notfound/Notfound.jsx'
import Login from './components/Login/Login.jsx';
import { Redirect, Route, Routes } from "react-router-dom"
import Register from './components/Register/Register.jsx';
import Protectedroutes from './components/protectedroutes/protectedroutes.jsx';
 class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* <ProtectedRoutes /> */}
        <Routes>
          {/* <Route path='/home'  element={<Home />}  /> */}
          {/* <Protectedroutes  path="/home" element={Home} /> */}

          <Route  path="/home" element={<Protectedroutes />} />

          <Route path='/movie' element={<Movies/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='*' element={<Notfound/>}/>



        </Routes>



      </>
    )
  }
}

export default App;