import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <div className="page">
            <h2 className="page_tit">페이지를 찾을 수 없습니다.</h2>
            <div className="home_btn">
                <Link className="go_home" to={"/"}>홈으로 돌아가기</Link>
            </div>
        </div>
    );
}

export default NotFound;