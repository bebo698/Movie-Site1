import React , {Component} from "react";
 
import {NavLink} from "react-router-dom" ;
 
export default class Navbar extends Component 
{

    constructor ()
    {
        super ();
        this.state = { show : true , }
    }
    render ()
    {
        return (
        <>


<nav className="navbar navbar-expand-lg navbar-light bg-light ">
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
    {/* قبل ما تحتاج تحرك خانة البحث فى النص خلى الخانة واخدة لون فى الخلفية علشان تشوف مساحتها وبعد كدا نديها فليكس 1 علشان تاخد المساحة اعمل فليسكس سنتر واديها مساحة  */}
    <form className="form-inline my-2 my-lg-0 d-flex justify-content-center"  style={{ flex:1 }} >
      {/* المساحة فى الاستايل هنا لو واخدة نسبة لازم بين كوتيشين مارك  */}
      <input className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search" />
    </form>
  </div>
</nav> 

        </>
        )
    }
}
 


 