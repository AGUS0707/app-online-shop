import React from 'react';

const Overview = () => {
    return (
        <div className="overview">
            <h1>Dropshipping</h1>

            <h3>Hi Dear,
                Welcome to our store, we can provide dropshipping and wholesale,if you have any request,
                please contact us, we will give you the best price and service!</h3>

            <p>
                Warning, because different countries have different import regulations, our price does not include any
                taxes. Buyers are responsible for customs clearance. We do not accept orders that are unwilling to clear
                customs by themselves. ,Thank you for your cooperation.</p>

            <div className="row">
                <div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>
                <div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>
                <div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>
                <div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>
                <div className="col-6"><img src="/images/cardimg2.webp" className="mt-4 w-100" alt=""/></div>
            </div>
        </div>
    );
};

export default Overview;