import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App.js';
import "bootstrap/dist/css/bootstrap.min.css"
import "popper.js/dist/umd/popper.min.js"
import '@popperjs/core'
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import $ from 'jquery';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
// import Home from './components/Home/Home.jsx';
import './App.scss';
import Catalog from './pages/Catalog.jsx';
import Details from './pages/detail/Details';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

    <Routes>
      {/* <Route render={props => (
          <>
          <Header {...props }/>
          <CRoutes/>
          <Footer/>
          </>
        )}/> */}
      <Route path='/' element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/movie" element={<Catalog />} />
        <Route path="/tv" element={<Catalog tv/>} />

        <Route path="/category" element={<Catalog />} />
        <Route path="*" element={<h3>Sorry this page can't be found</h3>} />
      </Route>

    </Routes>
  </BrowserRouter>,
);


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

