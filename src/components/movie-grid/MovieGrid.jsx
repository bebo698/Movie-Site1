// el useEffect kant mktoba 8alt
// import React, { useState, useEffectٍ } from "react";
import React, { useState, useEffect, useCallback } from "react";
import Input from "../input/Input";
import Catalog from "../../pages/Catalog";
import MovieCard from "../movie-card/MovieCard";
import tmdbApi, { category, MovieType, tvType } from "../../api/tmdbApi";
import "./movie-grid.scss";
import { OutlineButton } from "../button/Button";
import { useNavigate } from 'react-router-dom';


const MovieGrid = ({ check }) => {
  const [items, setitems] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpage, settotalpage] = useState(0);
  let keyword = check ? "tv" : "movie";

  useEffect(() => {

    const getList = async () => {
      // 3lshan el check value mara true w mara undefined fa keda msh htnf3 fel search 
      // leh el check b undefined m4 b false heb2a undefined lma ykon 3la el movie 
      let response = null;
      // يمكنك استخدام معامل المطابقة (===) مع 
      // undefined لمعرفة إذا امتلك متغيرٌ ما قيمةً،
      //  ففي الشيفرة الآتية لم تُعرَّف قيمةٌ للمتغير 
      //  x، وستكون نتيجة التعبير البرمجي if هي true:
      if (keyword === undefined) {
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
    }
    getList();
  }, [check, keyword]);

  const loadMore = async () => {
    let response = null;
      let keyword = check ? "tv" : "movie";

    if (keyword === undefined) {
      const params = {
        page: page + 1

      };
      switch (check) {
        case true:
          response = await tmdbApi.getMoviesList(MovieType.upcoming, { params});
          break;
        default:
          response = await tmdbApi.getMoviesList(tvType.popular, { params });
      }

    } else {
      const params = {
        page: page + 1,
        query: keyword
      }
      response = await tmdbApi.search(keyword, { params });
    }
    setitems([...items, ...response.results]);
    setpage(page + 1)
  }
   

  return (
    <>
    <div className="section-mb3">
      {/* <MovieSearch category={check} keyword={keyword} /> */}
    </div>
      <div className="movie-grid">
        {items.map((item, i) =>
          <MovieCard category={keyword} item={item} key={i} />
        )}
      </div>
      {
        page < totalpage ? (
          <div class="movie-grid__loadmore" >
            <OutlineButton className="small" onClick={loadMore}>Load More</OutlineButton>
          </div>
        ) : null
      }
    </>
  );
};

 
const MovieSearch = () => {

  const history = useNavigate();

  const [keyword, setKeyword] = useState(keyword ? keyword : '');

  const gotosearch = useCallback(
      () => {
          if (keyword.trim().length > 0) {
              history.push(`/${category[keyword]}/search/${keyword}`);
          }
      },
      [keyword, history]
  );

useEffect(() => {
  const enterEvent = (e) => {
    e.preventDefault();
    if (e.keyCode === 13) 
    {
      gotosearch();
    }

  }
  document.addEventListener('keyup', enterEvent);
  return () => {
      document.removeEventListener('keyup', enterEvent);
  };
  },[keyword,gotosearch]);



  return (
    <div className="movie-search" >
      <Input 
       type="text"
       placeholder="Enter keyword"
       value={keyword}
       onChange={(e) => setKeyword(e.target.value)}
      />
                  {/* <Button className="small" onClick={gotosearch}>Search</Button> */}

    </div>
  )
}
export default MovieGrid;
