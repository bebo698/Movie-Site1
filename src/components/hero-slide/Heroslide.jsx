import React, { useEffect, useRef, useState } from "react";
import apiConfig from "../../api/apiConfig.js";
import { Swiper, SwiperSlide } from "swiper/react";

// swipercore هيا اللى بتشغل التشغيل الالى 
import SwiperCore, { Autoplay } from 'swiper';
import tmdbApi, { category, MovieType } from "../../api/tmdbApi";
import { useNavigate } from "react-router-dom";
import "swiper/swiper.min.css";
import Modal , { ModelContent } from '../model/Modal'
import "./hero-slide.scss";

import Button,{OutlineButton} from "../button/Button.jsx";
const Heroslide = () => {
// ودا اللى بيشغلها
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getmovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(MovieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 20));
        console.log(response);
      } catch {
        console.log("error");
      }
    };
    getmovies();
  }, []);

  return (
   <div className="hero-slide">
    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 600 }}
    >
      {movieItems.map((item, i) => (
        <SwiperSlide key={i}>{({ isActive }) => <HeroslideItem item={item} className={`${isActive ? 'active':''}`} />}</SwiperSlide>
      ))}
    </Swiper>
    {
      movieItems.map((item,i)=> <TrailerModel key={i} item={item} />)
    }
    </div>
  );

};

const HeroslideItem = (props) => {
  let history = useNavigate();
  const item = props.item;
  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

   

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
        const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
        modal.querySelector('.model__content > iframe').setAttribute('src', videSrc);
    } else {
        modal.querySelector('.model__content').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
}
  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info container">
            <h2 className="title">
                {item.title}
            </h2>
            <div className="overview">
              {item.overview}
            </div>
            <div className="btns m-3">
              <Button onClick={()=> history.push('/movie/'+item.id)}>
                WaTCH Now 
              </Button>
              <OutlineButton onClick={setModalActive}>
                Watch Tailer
              </OutlineButton>

            </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
        </div>`
    </div>
  );
};

const TrailerModel = props => {
    const item = props.item;
    const iframeRef = useRef (null);
    const onClose = () => iframeRef.current.setAttribute('src','')
    return (
      <Modal active={false} id={`modal_${item.id}`}>
        <ModelContent onClose={onClose}>
          <iframe  ref={iframeRef } width="100%" height="500px" title="trailer" frameborder="0"></iframe>
        </ModelContent>
      </Modal>
    )
}

export default Heroslide;
