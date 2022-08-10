 import React, { Component } from 'react';
 import axios from "axios";

 
 class Tv extends Component {
  state = {  tv: [] }
  gettrending = async (mediatype) => {
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=52bbcddeda849047525b51d6f8a12361`);

      console.log(data.results);
      this.setState({ [mediatype]: data.results })
  }
  componentDidMount() {
       this.gettrending('tv');

  };
    render() {
        return (
            <>
              <div className="row   flex-row-reverse">

<div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
    <h2>Trending Seris now </h2>
    <p>Most watched </p>
</div>

{
    this.state.tv.slice(0, 20).map((value, index) => {
        return (
            <>

                <div key={index} className="container col-md-2   my-5">
                    <div className='item'>

                        <img className='w-100' src={"https://image.tmdb.org/t/p/original/" + value.poster_path} />
                        <h3>{value.name} {value.title}</h3>
                        <span className='rate'> {value.vote_average}</span>

                    </div>

                </div>
            </>
        )


    })

}

</div>

              
            </>
        );
    }
 }
 
 export default Tv;