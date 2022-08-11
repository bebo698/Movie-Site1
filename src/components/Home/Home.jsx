import React, { Component } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';

import "./home.css";
export default class Home extends Component {
  // state حاجة بنخزن فيها بيانات ولما بتتغير الجزء اللى جواها بس اللى بيتعاد تحميله
  state = { movie: [], transform: 0 };
  transformX = 10;
  gettrending = async (mediatype) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );

    console.log(data.results);
    this.setState({ [mediatype]: data.results });
  };
  componentDidMount() {
    // حاجات بتحصل اول مرة لما افتح الصفحة ومش بتكرر تانى
    this.gettrending("movie");
//    const PixelsPerMove = 600;
//    // بتاخد الاستيت اللى فاتت وتحط عليه تعديل بقيمة معينة
//    const mover = () => {
//      this.setState((prev) => ({
//        ...prev,
//        transform:
//          prev.transform + PixelsPerMove >=190 * 20
//            ? 0
//            : prev.transform + PixelsPerMove,
//      }));
//    };
//    //يتكرر كل 1000 ثانيه
//    setInterval(mover, 1000);
  }
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log(this.props);
    return (
      <>
            <Swiper
      spaceBetween={1}
      slidesPerView={3}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay : 200
      }}
 

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
            {this.state.movie.slice(0, 20).map((value, index) => {
              return (
                <SwiperSlide style={{backgroundColor:"black",height:"400px"}} >
                  <div key={index} className="container col-md-2   my-5" style={{width : "400px"}}>
                    <div className="item">
                      <img
                         style={{borderRadius:"5px",width : "200px" }}
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          value.poster_path
                        }
                      />
                      
                      <div className="" style={{  fontSize:"15px" ,backgroundColor:"green"}}  >
                      <h3   style={{  fontSize:"15px" ,backgroundColor:"red",width : "200px" }}>
                        {value.name} {value.title}
                      </h3>
                      </div>
                      <span className="rate"> {value.vote_average}</span>
                    </div>
                  </div>
                  
                </SwiperSlide>
                
              );
            })}
       </Swiper>
      </>
    );
  }
}
