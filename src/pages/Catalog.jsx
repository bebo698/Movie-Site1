import React, { Component } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/page-header/PageHeader";
import { category as cate } from "../api/tmdbApi";
import MovieGrid from "../components/movie-grid/MovieGrid";
const Catalog = ({ tv }) => {
  // const { category } = useParams();
  return (
    <>
      <PageHeader>
        {tv ? "Tv Series" : "Movies"}

        {/* {category === cate.movie ? "Movies" : "TV series"} */}
        <MovieGrid check={tv ? true : false} />
      </PageHeader>
    </>
  );
  
};

export default Catalog;
