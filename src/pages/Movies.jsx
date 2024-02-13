import React from "react";
import { movieDummy } from "../movieDummy.js";
import Movie from "../components/Movie.jsx";

function Movies(){
    return(
        <div className="page">
            <div className="movie_wrap">
                {movieDummy.results.map((item)=>{
                    return(
                        <Movie
                            key={item.id}
                            title={item.title}
                            vote_average={item.vote_average}
                            poster_path={item.poster_path}
                            overview={item.overview}
                        />
                    );
                })}
            </div>
            
        </div>
    );
}

export default Movies;