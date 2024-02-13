import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IMG_URL } from "../components/Movie";

function MovieDetail(){
    const {title}=useParams();
    const {state}=useLocation();

    return( 
        <div className="page">
            <div className="page_in">
                <img style={{
                    maxWidth:"500px"
                }} src={IMG_URL+state.poster_path} alt="포스터"/>
                <div className="detail_info">
                    <h3 className="detail_tit">{title}</h3>
                    <p className="detail_in">{state.overview}</p>
                </div>
            </div>
            
        </div>
    );
}

export default MovieDetail;