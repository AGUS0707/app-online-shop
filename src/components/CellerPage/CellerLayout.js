import React, {useState} from 'react';
import {Link , Switch, Route} from "react-router-dom";
import "../../styles/celler.scss";
import Statistics from "./Statistics";
import Market from "./Market";
import Products from "./Products";
import Comments from "./Comments";
import Orders from "./Orders";
import Returns from "./Returns";
import Settings from "./Settings";
import Brand from "../CellerPage/brand"
import {connect} from "react-redux";
import NotFound from "../homePage/NotFound";

const CellerLayout = (props) => {
    let user=props.userReducer.userObject;
    const [check, setCheck]=useState(false);
    return (
        <>
            {
                user.role_id === "3" ? <div className="celler-layout">
                    <div className="celler-layout-left">
                        <div className="user-info d-flex align-items-center">
                            <div className="celler-img">
                                <img src={user.photo===undefined?"https://tezchange.ru/online-shop/storage/app/user/profile.png": user.photo} alt=""/>
                            </div>
                            <div className="seller1">
                                <div className="h5">
                                    <h5 className="mb-1">{user.email}</h5>
                                </div>
                                <p className="mb-0">Seller</p>
                            </div>
                            <div className="menuButton d-none" onClick={()=>setCheck(!check)}>
                                <img src={check? "/images/cancel.svg": "/images/menu (2).svg"} alt="no image"/>
                            </div>
                            <div className={`menu2 d-none ${check? "open": ''}`}>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><Link to="/seller" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller" || props.history.location.pathname === "/seller/statistics/mijozlar" ||  props.history.location.pathname === "/seller/statistics/buyurtmalar" ? 'active' : ""}`}><span className="icon icon-statistics mr-2"></span>Statistika</Link></li>
                                    <li className="nav-item"><Link to="/seller/market" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/market" || props.history.location.pathname==="/seller/market/form" ? 'active' : ""}`}><span className="icon icon-sale mr-2"></span>Chegirmalar</Link></li>
                                    <li className="nav-item"><Link to="/seller/products" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/products" ||props.history.location.pathname==="/seller/products/form" || props.history.location.pathname==="/seller/products/form/edit"? 'active' : ""}`}><span className="icon icon-products mr-2"></span>Mahsulot</Link></li>
                                    <li className="nav-item"><Link to="/seller/brand" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/brand" || props.history.location.pathname==="/seller/brand/form" ? 'active' : ""}`}><span className="icon icon-brand mr-2"></span>Brand</Link></li>
                                    {/*<li className="nav-item"><Link to="/seller/comments" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/comments" ? 'active' : ""}`}><span className="icon icon-comments mr-2"></span>Comments</Link></li>*/}
                                    <li className="nav-item"><Link to="/seller/orders" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/orders" ? 'active' : ""}`}><span className="icon icon-orders mr-2"></span>Buyurtmalar</Link></li>
                                    <li className="nav-item"><Link to="/seller/returns" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/returns" ? 'active' : ""}`}><span className="icon icon-returns mr-2"></span>Qaytarilganlar</Link></li>
                                    <li className="nav-item"><Link to="/seller/settings" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/settings" ? 'active' : ""}`}><span className="icon icon-settings mr-2"></span>Sozlamalar</Link></li>
                                    <li className="nav-item"><Link to="/" className={`nav-link d-flex align-items-center`}><span className="icon icon-home1 mr-2"></span>HomePage</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="menu">
                            <ul className="nav flex-column">
                                <li className="nav-item"><Link to="/seller" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller" || props.history.location.pathname === "/seller/statistics/mijozlar" ||  props.history.location.pathname === "/seller/statistics/buyurtmalar" ? 'active' : ""}`}><span className="icon icon-statistics mr-2"></span>Statistika</Link></li>
                                <li className="nav-item"><Link to="/seller/market" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/market" || props.history.location.pathname==="/seller/market/form" ? 'active' : ""}`}><span className="icon icon-sale mr-2"></span>Chegirmalar</Link></li>
                                <li className="nav-item"><Link to="/seller/products" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/products" ||props.history.location.pathname==="/seller/products/form" || props.history.location.pathname==="/seller/products/form/edit"? 'active' : ""}`}><span className="icon icon-products mr-2"></span>Mahsulot</Link></li>
                                <li className="nav-item"><Link to="/seller/brand" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/brand" || props.history.location.pathname==="/seller/brand/form" ? 'active' : ""}`}><span className="icon icon-brand mr-2"></span>Brand</Link></li>
                                {/*<li className="nav-item"><Link to="/seller/comments" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/comments" ? 'active' : ""}`}><span className="icon icon-comments mr-2"></span>Comments</Link></li>*/}
                                <li className="nav-item"><Link to="/seller/orders" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/orders" ? 'active' : ""}`}><span className="icon icon-orders mr-2"></span>Buyurtmalar</Link></li>
                                <li className="nav-item"><Link to="/seller/returns" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/returns" ? 'active' : ""}`}><span className="icon icon-returns mr-2"></span>Qaytarilganlar</Link></li>
                                <li className="nav-item"><Link to="/seller/settings" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/settings" ? 'active' : ""}`}><span className="icon icon-settings mr-2"></span>Sozlamalar</Link></li>
                                <li className="nav-item"><Link to="/" className={`nav-link d-flex align-items-center`}><span className="icon icon-home1 mr-2"></span>HomePage</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="celler-layout-right">
                        <Switch>
                            <Route path="/seller" exact   component={Statistics}/>
                            <Route path="/seller/market" component={Market}/>
                            <Route path="/seller/brand"  component={Brand}/>
                            <Route path="/seller/products"  component={Products}/>
                            <Route path="/seller/comments" exact component={Comments}/>
                            <Route path="/seller/orders"  exact component={Orders}/>
                            <Route path="/seller/returns" exact component={Returns}/>
                            <Route path="/seller/settings" exact  component={Settings}/>
                        </Switch>
                    </div>
                </div> : <NotFound/>
            }
        </>
    );
};
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, null) (CellerLayout);