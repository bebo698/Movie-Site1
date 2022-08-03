import React, { Component } from 'react';
import Home from './components/Home/Home.jsx';
import Movies from './components/Movies/Movies.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Tv from './components/Tv/Tv';
import Notfound from './components/Notfound/Notfound.jsx'
 
import { Redirect, Route, Routes } from "react-router-dom"
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path='*' element={<Notfound/>}/>

        </Routes>



      </div>
    )
  }
}

export default App;