import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig.js";
// import React from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
 
import propTypes from "prop-types";
import "./movie-list.scss";
import Button from "../button/Button";
import tmdbApi, { category } from "../../api/tmdbApi";
// import { Link } from "react-router-dom";
const MovieList = (props) => {
const [items, setItems] = useState([]);

  useEffect(() => {
    SwiperCore.use([Autoplay]);

    const getList = async () => {
      let response = null;
      const params = {};
      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(props.type, { params });
            break;
          default:
            response = await tmdbApi.getTvList(props.type, { params });
        }
      } else {
        response = await tmdbApi.similar(props.category, props.id);
      }
      setItems(response.results);
    }
    getList();
}, []);
  return (
    <>
      {/* <OwlCarousel className="owl-theme" loop margin={10} nav>
        {
            items.map((item,i)=>(
                <div className="item" key={i}>

               <img src={apiConfig.w500Image(item.poster_path)} alt="" />
             <h1> {item.title} </h1> 

                </div>  
                

  
            
            ))
        }
          </OwlCarousel> */}
           <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
               <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>

      
      
    </>
  );
};

MovieList.propTypes = {
  category: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
};

export default MovieList;
