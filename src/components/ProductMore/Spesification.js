import React from 'react';

const Spesification = (props) => {
    return (
        <div className="row spesification">

                     <div className="col-6">
                       <h2>Brand Name: <b>{props.brand.brand_name}</b></h2>
                       <h2>Categor Name: <b>{props.brand.category_uz}</b></h2>
                    </div>

            <div className="col-6">
                <h2>Xarakteristikasi: <b>{props.brand.xarakteristika}</b></h2>
            </div>



            {/*<div className="col-6">*/}
            {/*    <h2>Brand Name: <b>olevo</b></h2>*/}
            {/*</div>*/}
            {/*<div className="col-6">*/}
            {/*    <h2>Brand Name: <b>olevo</b></h2>*/}
            {/*</div>*/}
            {/*<div className="col-6">*/}
            {/*    <h2>Brand Name: <b>olevo</b></h2>*/}
            {/*</div>*/}
            {/*<div className="col-6">*/}
            {/*    <h2>Brand Name: <b>olevo</b></h2>*/}
            {/*</div>*/}
            {/*<div className="col-6">*/}
            {/*    <h2>Brand Name: <b>olevo</b></h2>*/}
            {/*</div>*/}
        </div>
    );
};

export default Spesification;