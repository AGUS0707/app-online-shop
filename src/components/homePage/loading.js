import React from 'react';
import "../../styles/loading.scss";

function Loading(props) {
    return (
        <div className="loading">
            <div className="loadingImg">
                <img src="/images/loading.gif" alt="no gif"/>
            </div>
        </div>
    );
}

export default Loading;