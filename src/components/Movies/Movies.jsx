import React, { Component } from 'react';
import axios from "axios";
export default class Movies extends Component {

    state = { Movies: [] }
    gettrending = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`)
        console.log(data.results);
        this.setState({ Movies: data.results })
    }
    componentDidMount() {
        this.gettrending();
    };
    render() {
        return (
            <>
                <div className="className my-5">
                     
                        <div className="row   flex-row-reverse">

                            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center bg-danger">
                                <h2>     rending now </h2>
                                <p>most watche</p>
                            </div>

                            {
                                this.state.Movies.map((value, index) => {
                                    return (
                                        <>

                                            <div key={index} className="col-md-2 my-3">
                                                <div className='item'>
                                                    <img className='w-100' src={"https://image.tmdb.org/t/p/original/" + value.poster_path} />
                                                    <h1>{value.name} {value.title}</h1>
                                                </div>

                                            </div>
                                        </>
                                    )


                                })

                            }

                        </div>
                    
                </div>
            </>
        )
    }
}





