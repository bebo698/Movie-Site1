import React, { Component } from 'react';
// import _index from './scss/_index.scss';
import './App.scss';
  
// import Movies from './components/Movies/Movies.jsx';
// import Navbar from './components/Navbar/Navbar.jsx';
// import Tv from './components/Tv/Tv';
// import Notfound from './components/Notfound/Notfound.jsx'
import Login from './components/Login/Login.jsx';
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import Register from './components/Register/Register.jsx';
// import Protectedroutes from './components/protectedroutes/protectedroutes.jsx';
// import 'bootstrap/dist/js/bootstrap';
// import './App.scss'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.min.css';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import CRoutes from './config/CRoutes.jsx';
// import { Autoplay, Pagination, Navigation } from "swiper";
import './assets/boxicons-2.0.7/css/boxicons.min.css'
class App extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* <ProtectedRoutes /> */}
        {/* <Routes> */}
        {/* <Route path='/home'  element={<Home />}  /> */}
        {/* <Protectedroutes  path="/home" element={Home} /> */}

        {/* <Route  path="/home" element={<Protectedroutes />} /> */}

        {/* <Route path='/movie' element={<Movies/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login  />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='*' element={<Notfound/>}/>

      

        </Routes>
 */}
        <Header />
{/* 
        <Routes>
          <Route path='/*' element={<CRoutes />} />
          
        </Routes> */}
{/* علشان اخلى جزء ثابت وجزء متحرك لازم اوت ليت  */}
<Outlet />
        <Footer />
      </>
    )
  }
}

export default App;