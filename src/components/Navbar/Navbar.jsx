import React , {Component} from "react";
 
import {NavLink} from "react-router-dom" ;
 
export default class Navbar extends Component {

    constructor ()
    {
        super ();
        this.state = { show : true , }
    }
    render ()
    {
        return (
        <>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse  " id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/movie">Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/tv">TV</NavLink>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0 ">
      <input className="form-control mr-sm-2 d-flex justify-content-center" type="search" placeholder="Search" aria-label="Search" />
    </form>
  </div>
</nav>

        </>
        )
    }
}
 


 