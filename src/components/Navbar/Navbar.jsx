import React, { Component, useState } from "react";

import { NavLink } from "react-router-dom";
import axios from "axios";
export default class Navbar extends Component
{
  constructor() 
  {
    super();
    this.state = { Search:[] ,  type: 'movie' };
  }

  getSearch = async (e) => {
    if (e.target.value == '') {
        this.setState({ Search: [] })
    } else {
        let { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${e.target.value}&api_key=52bbcddeda849047525b51d6f8a12361`);
        this.setState({ Search: data.results });
    }

}

  render()
    {
  return (
    <>
      <nav className="navbar container-fluid navbar-expand-lg  navbar-light bg-light ">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/movie">
                Movies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tv">
                TV
              </NavLink>
            </li>
          </ul>
          {/* قبل ما تحتاج تحرك خانة البحث فى النص خلى الخانة واخدة لون فى الخلفية علشان تشوف مساحتها وبعد كدا نديها فليكس 1 علشان تاخد المساحة اعمل فليسكس سنتر واديها مساحة  */}
          {/* <form
            className="form-inline my-2 my-lg-0 d-flex justify-content-center"
            style={{ flex: 1 }}
          > */}
            {/* المساحة فى الاستايل هنا لو واخدة نسبة لازم بين كوتيشين مارك  */}
            {/* علشان نعمل سيرش يا جميل بنروح على خانة البحث دى ونحط  */}
            {/* onChange   onChange={this.getSearch} */}
            {/* فيها معلومات فى استيت معينة  */}
 {/* <input
              className="form-control mr-sm-2 "
              onChange={this.getSearch}
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>                               */}
              {/* <div className="search_list">{this.state.search.slice(0, 5).map((value, index) => {return ( <h1>{value.name} </h1>)  })}</div> */}


          
          <form className="d-flex justify-content-center align-items-center col-md-5 m-0  " style={{position:"relative" }}>
                                <input className="form-control mx-2 " type="search" placeholder="Search" aria-label="Search" onChange={this.getSearch}></input>
                                <div className="search_list">{this.state.Search.slice(0, 5).map((value, index) => {
                                    return (
                                        <>
                                            <button className="btn d-flex align-items-center" onClick={() => { this.props.test(value); this.props.mediatype('movie'); ; this.props.getpath(value.title );this.state.Search = []; }}>
                                                <div className="w-7">
                                                    <img src={'https://image.tmdb.org/t/p/original' + value.poster_path} className="w-100 rounded" />
                                                </div>
                                                <div className="col-10 d-flex align-items-center font-weight-bold text-white">
                                                    <h6>{value.name} {value.title}</h6>
                                                </div>
                                            </button>
                                        </>
                                    )
                                })}</div>


                            </form>


       
       
        </div>
      </nav>
    </>
  );

            }
          }