import React from 'react';

import parse from 'html-react-parser'

const Overview = (props) => {
    return (
        <div className="overview">
            <h1>Dropshipping</h1>

            <h3>{props.oneProduct.product_uz}</h3>

            {parse(props.htmlstring)}

            <div className="row">
               {
                   props.photo_list.map((item)=>{

                       return  <div className="col-4 offset-4"><img src={item.url} className="mt-4 w-100" alt=""/></div>

                   })
               }
                {/*<div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>*/}
                {/*<div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>*/}
                {/*<div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>*/}
                {/*<div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>*/}
            </div>
        </div>
    );
};

export default Overview;