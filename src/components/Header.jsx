import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="main_header">
            <div className="inner">
                <div className="logo">
                    <Link to={"/"}>
                        {/* 로고 클릭시 홈으로 이동 */}
                        <img style={{
                            width:"150px",
                            height:"25px"
                        }} src="https://files.readme.io/29c6fee-blue_short.svg" alt="로고" />
                    </Link>
                </div>
                <ul className="navi">
                    <li>
                        <Link className="nav_item" to="/tv">TV프로그램</Link>
                    </li>
                    <li>
                        <Link className="nav_item" to="/movies">영화</Link>
                    </li>
                    <li>
                        <Link className="nav_item" to="/person">인물</Link>
                    </li>
                    <li>
                        <Link className="nav_item" to="/more">더보기</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;