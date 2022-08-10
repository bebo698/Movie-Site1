import React, { Component } from "react";
import axios from "axios";

import './home.css'
export default class Home extends Component {
  state = { movie: [] }
  gettrending = async (mediatype) => {
      let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=52bbcddeda849047525b51d6f8a12361`);

      console.log(data.results);
      this.setState({ [mediatype]: data.results })
  }
  componentDidMount() {
      this.gettrending('movie');

  };
  constructor(props) {
    super(props);
  }
  render(props) {
    console.log(this.props);
    return (
      <>
      <div className="red"></div>
        <div style={{ overflow: "hidden", width: "600px" }}>
          <div style={{ display: "flex", gap: "1rem",width : "1000px" , }}>
             {
                            this.state.movie.slice(0, 20).map((value, index) => {
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
        </div>
      </>
    );
  }
}
