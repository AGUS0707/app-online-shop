import React from 'react';
import {Link} from "react-router-dom";

function ShippingAddress(props) {
    return (
        <div className="shippingAddressAdd">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/home/profile/shipping-address/form" className="addAddressLink">
                           <button>
                               <div className="plusImg"></div>
                               Manzil qoshish
                           </button>
                        </Link>
                        <h3>Manzil kitobida hali manzillar yo'q.</h3>
                        <p>Xarid qilish jarayonini yanada osonlashtirish uchun manzillarni qo'shing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShippingAddress;