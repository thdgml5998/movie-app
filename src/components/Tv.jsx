import React from "react";
import {useNavigate} from "react-router-dom";


export const TV_IMG_URL="http://image.tmdb.org/t/p/w300/";
// function Movie({title,vote_average,poster_path}){
export default function Tv(props){
    

    const navigate = useNavigate();


    const onClickTvItem=()=>{
        navigate(`/tv/${props.name}`,
        // 이동url로 데이터의 타이틀을 지정
        {state : props})
        // 이동시 props를 넘겨줌

    }

    return(
        <div className="con" onClick={onClickTvItem}>
            <img src={TV_IMG_URL+props.poster_path} alt="포스터"/>
            <div className="info">
                <h4 className="tit">{props.name}</h4>
                <span>{props.vote_average}</span>
                <p style={{display:"none"}}>{props.vote_count}</p>
            </div>
        </div>
    );
}
