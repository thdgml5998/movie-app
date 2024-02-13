import React from "react";
import {useParams,useLocation} from "react-router-dom";
import { TV_IMG_URL } from "../components/Tv";

function TvDetail(){
    const {name}=useParams();
    const {state}=useLocation();

    return(
        <div className="page">
            <div className="page_in">
                <img style={{
                    maxWidth:"500px"
                }} src={TV_IMG_URL+state.poster_path} alt="포스터"/>
                <div className="detail_info">
                    <h3 className="detail_tit">{name}</h3>
                    <p className="detail_in">추천수 : {state.vote_count}</p>
                </div>
            </div>
        </div>
    );
}

export default TvDetail;