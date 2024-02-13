import React from "react";
import {tvDummy} from "../tvDummy";
import Tv from "../components/Tv.jsx";

function TvNow(){
    return(
        <div className="page">
            <div className="tv_wrap">
                {tvDummy.results.map((item)=>{
                    return(
                        <Tv
                            key={item.id}
                            name={item.name}
                            vote_average={item.vote_average}
                            poster_path={item.poster_path}
                            vote_count={item.vote_count}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default TvNow;
