import React from 'react';

const Spesification = (props) => {
    return (
        <div className="row spesification">
            <div className="col-4 offset-4">
                <h4>{props.brand.product_uz}</h4>
            </div>

                     <div className="col-6">
                         <h2>Category Name: <b>{props.brand.category_uz}</b></h2>
                         <h2>Brand Name: <b>{props.brand.brand_name}</b></h2>
                         <h2>Xarakteristikasi: <b>{props.brand.xarakteristika}</b></h2>
                     </div>

            <div className="col-6">

                <h2>Product Price: <b>{props.brand.price} so'm</b></h2>
                <h2>Product Amount: <b>{props.brand.amount} dona</b></h2>
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