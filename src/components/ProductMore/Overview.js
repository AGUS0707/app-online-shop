import React from 'react';

import parse from 'html-react-parser'

const Overview = (props) => {
    return (
        <div className="overview">
            <h1>{props.oneProduct.product_uz}</h1>



            <p>{parse(props.htmlstring)}</p>

            <div className="row">
               {
                   props.photo_list.map((item)=>{

                       return  <div className="col-6 offset-3"><img src={item.url} className="mt-4 w-100" alt=""/></div>

                   })
               }
            </div>
        </div>
    );
};

export default Overview;