import React from 'react';
import {Link , Switch, Route} from "react-router-dom";
import "../../styles/celler.scss"
import Statistics from "./Statistics";
import Market from "./Market";
import Products from "./Products";
import Comments from "./Comments";
import Orders from "./Orders";
import Returns from "./Returns";
import Settings from "./Settings";
import Brand from "../CellerPage/brand"
const CellerLayout = (props) => {
    return (
        <div className="celler-layout">
            <div className="celler-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="/images/iam.jpg" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1">Xudayberdiyev Asadbek</h5>
                        <p className="mb-0">Seller</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item"><Link to="/seller" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller" || props.history.location.pathname === "/seller/statistics/mijozlar" ||  props.history.location.pathname === "/seller/statistics/buyurtmalar" ? 'active' : ""}`}><span className="icon icon-statistics mr-2"></span>Statistics</Link></li>
                        <li className="nav-item"><Link to="/seller/market" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/market" ? 'active' : ""}`}><span className="icon icon-market mr-2"></span>Chegirmalar</Link></li>
                        <li className="nav-item"><Link to="/seller/products" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/products" ? 'active' : ""}`}><span className="icon icon-products mr-2"></span>Products</Link></li>
                        <li className="nav-item"><Link to="/seller/brand" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/brand" ? 'active' : ""}`}><span className="icon icon-settings mr-2"></span>Brand</Link></li>
                        <li className="nav-item"><Link to="/seller/comments" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/comments" ? 'active' : ""}`}><span className="icon icon-comments mr-2"></span>Comments</Link></li>
                        <li className="nav-item"><Link to="/seller/orders" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/orders" ? 'active' : ""}`}><span className="icon icon-orders mr-2"></span>Orders</Link></li>
                        <li className="nav-item"><Link to="/seller/returns" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/returns" ? 'active' : ""}`}><span className="icon icon-returns mr-2"></span>Returns</Link></li>
                        <li className="nav-item"><Link to="/seller/settings" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/seller/settings" ? 'active' : ""}`}><span className="icon icon-settings mr-2"></span>Settings</Link></li>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
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
        </div>
    );
};

export default CellerLayout;