import React from 'react';
import "../../styles/topRanking.scss";
import {Link} from 'react-router-dom';
function TopRanking() {
    return (
        <div className="topRanking">
            <div className="container">
                <div className="topRankingSection">
                    <div className="topRankingLeft">

                    </div>
                    <div className="topRankingRight">
                        <Link to="/">Top Rankings</Link>
                        <Link to="/">Flash Deals</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopRanking;