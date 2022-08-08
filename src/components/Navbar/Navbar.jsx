import React , {Component} from "react";
import {NavLink} from "react-router-dom" 
export default class Navbar extends Component {
    render ()
    {
        return (
        <>
            <nav className="navbar container navbar-expand-lg navbar-dark bg-light bg-transparent">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
     
      <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>
      <li classname="nav-item">
        <NavLink className="nav-link" to="/tv">TV</NavLink>
      </li>
      <li classname="nav-item">
        <NavLink className="nav-link" to="/movie">Movies</NavLink>

      </li>
    
    </ul>
    
  </div>
</nav>
        </>
        )
    }
}
 


 