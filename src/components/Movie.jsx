import React from "react";
import {useNavigate} from "react-router-dom";


export const IMG_URL="http://image.tmdb.org/t/p/w1280/";
// function Movie({title,vote_average,poster_path}){
export default function Movie(props){
    

    const navigate = useNavigate();


    const onClickMovieItem=()=>{
        navigate(`/movies/${props.title}`,
        // 이동url로 데이터의 타이틀을 지정
        {state : props})
        // 이동시 props를 넘겨줌

    }

    return(
        <div className="con" onClick={onClickMovieItem}>
            <img src={IMG_URL+props.poster_path} alt="포스터" />
            <div className="info">
                <h4 className="tit">{props.title}</h4>
                <span>{props.vote_average}</span>
                <p style={{display:"none"}}>{props.overview}</p>
            </div>
        </div>
    );
}
