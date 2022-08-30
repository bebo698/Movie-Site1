// el useEffect kant mktoba 8alt
// import React, { useState, useEffectٍ } from "react";
import React, { useState, useEffect } from "react";
import Input from "../input/Input";
import Catalog from "../../pages/Catalog";
import MovieCard from "../movie-card/MovieCard";
import tmdbApi, { MovieType, tvType } from "../../api/tmdbApi";
import "./movie-grid.scss";
import { OutlineButton } from "../button/Button";
const MovieGrid = ({ check }) => {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  useEffect(() => {
    const getList = async () => {
      // 3lshan el check value mara true w mara undefined fa keda msh htnf3 fel search 
      let keyword = check ? "tv" : "movie";
      let response = null;
      if (check === undefined) {
        const params = {};
        switch (check) {
          case true:
            response = await tmdbApi.getMoviesList(MovieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getMoviesList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: check,
        };
        response = await tmdbApi.search(keyword, { params });
      }
      setitems(response.results);
      settotalpage(response.total_pages);
    };
    getList();
  });

  return (
    // <div>
    //   <h1>{check ? "Tv" : "Movies"}</h1>
    // </div>
    <>
      <div className="movie-grid">
        {items.map((item, i) =>
          <MovieCard category={check} item={item} key={i} />
        )}
      </div>
      {/* {{
        page<totalpage ? (
        <div class="movie-grid__loadmore" >
          <OutlineButton className="small">Load More</OutlineButton>
        </div>
      )
       } } */}
    </>
  );
};

const MovieSearch = props => {
  return (
    <div className="movie-search" >
      <Input />
    </div>
  )
}
export default MovieGrid;
