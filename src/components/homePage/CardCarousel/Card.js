import React from 'react';
import "../../../styles/cardCarouselHomePage.scss"

const Card = (props) => {
    return (


                    <div className="card border-0 cardCarousel">
                        <div className="card-body p-2">
                            <img className="carouselimg" src={props.img} height="150" width="150" alt=""/>
                            {/*<div className="d-flex align-items-center mt-2">*/}
                                {/*<div className="price d-flex align-items-center">*/}
                                {/*    <img src="/images/diagramma.webp" alt=""/>*/}
                                {/*    <p>-49%</p>*/}
                                {/*</div>*/}
                                {/*<i><del className="ml-2">{Math.abs(props.price) + 500} so'm</del></i>*/}
                            {/*</div>*/}

                            <i><h3 className="mt-2 text-center">{props.price} so'm</h3></i>
                            <p className="text-center">{props.amount} dona</p>
                            {/*<h1>{props.url}</h1>*/}
                        </div>
                    </div>


    );
};

export default Card;