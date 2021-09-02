import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Collapse} from "reactstrap";
import "../../styles/admin.scss"

const AdminLayout = (props) => {

    const [collapse, setCollapse] = useState(false);
    const [collapse1, setCollapse1] = useState(false);
    const [collapse2, setCollapse2] = useState(false);
    const [collapse3, setCollapse3] = useState(false);
    const [collapse4, setCollapse4] = useState(false);
    const [collapse5, setCollapse5] = useState(false);
    const [icon, setIcon] = useState("icon-right");
    const [icon1, setIcon1] = useState("icon-right");
    const [icon2, setIcon2] = useState("icon-right");
    const [icon3, setIcon3] = useState("icon-right");
    const [icon4, setIcon4] = useState("icon-right");
    const [icon5, setIcon5] = useState("icon-right");
    const toggle = () => {
        setCollapse(!collapse)
        setCollapse1(false)
        setCollapse2(false)
        setCollapse3(false)
        setCollapse4(false)
        setCollapse5(false)
        if (!collapse){
            setIcon("icon-bottom")
            setIcon1("icon-right")
            setIcon2("icon-right")
            setIcon3("icon-right")
            setIcon4("icon-right")
            setIcon5("icon-right")
        } else{
            setIcon("icon-right")
            setIcon1("icon-right")
        }
    };
    const toggle1 = () => {
        setCollapse1(!collapse1)
        setCollapse(false)
        setCollapse5(false)
        setCollapse2(false)
        setCollapse3(false)
        setCollapse4(false)
        if (collapse1){
            setIcon("icon-right")
            setIcon1("icon-right")
        } else{
            setIcon3("icon-right")
            setIcon2("icon-right")
            setIcon4("icon-right")
            setIcon5("icon-right")
            setIcon("icon-right")
            setIcon1("icon-bottom")
        }
    };
    const toggle2 = () => {
        setCollapse2(!collapse2)
        setCollapse(false)
        setCollapse1(false)
        setCollapse3(false)
        setCollapse4(false)
        setCollapse5(false)
        if (!collapse2){
            setIcon2("icon-bottom")
            setIcon("icon-right")
            setIcon1("icon-right")
            setIcon5("icon-right")
            setIcon3("icon-right")
            setIcon4("icon-right")
        } else{
            setIcon2("icon-right")
        }
    };
    const toggle3 = () => {
        setCollapse3(!collapse3)
        setCollapse(false)
        setCollapse1(false)
        setCollapse2(false)
        setCollapse4(false)
        setCollapse5(false)
        if (!collapse3){
            setIcon3("icon-bottom")
            setIcon("icon-right")
            setIcon1("icon-right")
            setIcon2("icon-right")
            setIcon4("icon-right")
            setIcon5("icon-right")
        } else{
            setIcon3("icon-right")
        }
    };
    const toggle4 = () => {
        setCollapse4(!collapse4)
        setCollapse(false)
        setCollapse1(false)
        setCollapse2(false)
        setCollapse3(false)
        setCollapse5(false)
        if (!collapse4){
            setIcon4("icon-bottom")
            setIcon("icon-right")
            setIcon1("icon-right")
            setIcon2("icon-right")
            setIcon3("icon-right")
            setIcon5("icon-right")
        } else{
            setIcon4("icon-right")
        }
    };
    const toggle5 = () => {
        setCollapse5(!collapse5)
        setCollapse(false)
        setCollapse1(false)
        setCollapse2(false)
        setCollapse3(false)
        setCollapse4(false)
        if (!collapse5){
            setIcon5("icon-bottom")
            setIcon("icon-right")
            setIcon1("icon-right")
            setIcon2("icon-right")
            setIcon4("icon-right")
            setIcon3("icon-right")
        } else{
            setIcon5("icon-right")
        }
    };
   useEffect(()=>{
       if (props.history.location.pathname === "/admin/client/clients"){
           setCollapse4(true)
           setIcon4("icon-bottom")
       }  else if (props.history.location.pathname === "/admin/client/sellers"){
           setCollapse4(true)
           setIcon4("icon-bottom")
       }   else if (props.history.location.pathname === "/admin/product/brand" || props.history.location.pathname === "/admin/product/brand/add" || props.history.location.pathname === "/admin/product/brand/edit"){
           setCollapse(true)
           setIcon("icon-bottom")
       } else if (props.history.location.pathname === "/admin/product/model" || props.history.location.pathname === "/admin/product/model/add" || props.history.location.pathname === "/admin/product/model/edit"){
           setCollapse(true)
           setIcon("icon-bottom")}else if (props.history.location.pathname === "/admin/product/products" || props.history.location.pathname === "/admin/product/products/add"){
           setCollapse(true)
           setIcon("icon-bottom")} else if (props.history.location.pathname === "/admin/product/detail" || props.history.location.pathname === "/admin/product/detail/add" || props.history.location.pathname === "/admin/product/detail/edit"){
           setCollapse(true)
           setIcon("icon-bottom")} else if (props.history.location.pathname === "/admin/product/value" || props.history.location.pathname === "/admin/product/value/add" || props.history.location.pathname === "/admin/product/value/edit"){
           setCollapse(true)
           setIcon("icon-bottom")} else if (props.history.location.pathname === "/admin/payment/payments"){
           setIcon1("icon-bottom")
           setCollapse1(true)} else if (props.history.location.pathname === "/admin/payment/currency"){
           setIcon1("icon-bottom")
           setCollapse1(true)} else if (props.history.location.pathname === "/admin/payment/payment-system"){
           setIcon1("icon-bottom")
           setCollapse1(true)} else if (props.history.location.pathname === "/admin/addres/country" || props.history.location.pathname === "/admin/addres/country/add" || props.history.location.pathname === "/admin/addres/country/edit"){
           setIcon2("icon-bottom")
           setCollapse2(true)} else if (props.history.location.pathname === "/admin/addres/region" || props.history.location.pathname === "/admin/addres/region/add" || props.history.location.pathname === "/admin/addres/region/edit"){
           setIcon2("icon-bottom")
           setCollapse2(true)}else if (props.history.location.pathname === "/admin/addres/district" || props.history.location.pathname === "/admin/addres/district/add" || props.history.location.pathname === "/admin/addres/district/edit"){
           setIcon2("icon-bottom")
           setCollapse2(true)} else if (props.history.location.pathname === "/admin/order/orders"){
           setIcon3("icon-bottom")
           setCollapse3(true)} else if (props.history.location.pathname === "/admin/order/returns"){
           setIcon3("icon-bottom")
           setCollapse3(true)} else if (props.history.location.pathname === "/admin/system/role" || props.history.location.pathname === "/admin/system/role/add" || props.history.location.pathname === "/admin/system/role/edit"){
           setIcon5("icon-bottom")
           setCollapse5(true)} else if (props.history.location.pathname === "/admin/system/comments"){
           setIcon5("icon-bottom")
           setCollapse5(true)} else if (props.history.location.pathname === "/admin/system/blogs"){
           setIcon5("icon-bottom")
           setCollapse5(true)} else if (props.history.location.pathname === "/admin/system/statistics"){
           setIcon5("icon-bottom")
           setCollapse5(true)} else if (props.history.location.pathname === "/admin/system/settings"){
           setIcon5("icon-bottom")
           setCollapse5(true)}

   }, [])

    return (
        <div className="admin-layout">
            <div className="admin-layout-left">
                <div className="user-info d-flex justify-content-between align-items-center">
                    <div>
                        <img src="/images/iam.jpg" alt=""/>
                    </div>
                    <div>
                        <h5 className="mb-1">Xudayberdiyev Asadbek</h5>
                        <p className="mb-0">Admin</p>
                    </div>
                </div>
                <div className="menu">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/admin/profile" onClick={() => {
                                setCollapse(false)
                                setCollapse1(false)
                                setCollapse2(false)
                                setCollapse3(false)
                                setCollapse4(false)
                                setCollapse5(false)
                                setIcon("icon-right")
                                setIcon1("icon-right")
                                setIcon2("icon-right")
                                setIcon3("icon-right")
                                setIcon4("icon-right")
                                setIcon5("icon-right")
                            }} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/profile" ? 'active' : ""}`}>
                                <span className="icon icon-profile mr-2"></span>
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/category" onClick={() => {
                                setCollapse(false)
                                setCollapse1(false)
                                setCollapse2(false)
                                setCollapse3(false)
                                setCollapse4(false)
                                setCollapse5(false)
                                setIcon("icon-right")
                                setIcon1("icon-right")
                                setIcon2("icon-right")
                                setIcon3("icon-right")
                                setIcon4("icon-right")
                                setIcon5("icon-right")
                            }} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/category" || props.history.location.pathname === "/admin/category/add" || props.history.location.pathname === "/admin/category/edit:url" ? 'active' : ""}`}>
                                <span className="icon icon-category mr-2"></span>
                                Category
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link onClick={toggle} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/brand" || props.history.location.pathname === "/admin/product/brand/add" || props.history.location.pathname === "/admin/product/brand/edit" || props.history.location.pathname === "/admin/product/model" || props.history.location.pathname === "/admin/product/model/add" || props.history.location.pathname === "/admin/product/model/edit" || props.history.location.pathname === "/admin/product/products" || props.history.location.pathname === "/admin/product/products/add" || props.history.location.pathname === "/admin/product/detail" || props.history.location.pathname === "/admin/product/detail/add" || props.history.location.pathname === "/admin/product/detail/edit" || props.history.location.pathname === "/admin/product/value" || props.history.location.pathname === "/admin/product/value/add" || props.history.location.pathname === "/admin/product/value/edit" ? "active" : ""}`}>
                                <span className="icon icon-products mr-2"></span>
                                Product
                                <span className={`icon ${icon} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                                <ul className="nav">
                                    <li className="nav-item">
                                        <Link to="/admin/product/brand" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/brand" || props.history.location.pathname === "/admin/product/brand/add" || props.history.location.pathname === "/admin/product/brand/edit" ? "active2" : ""}`}>
                                            <span className="icon icon-tworight"></span>
                                            <p className="mb-0 ml-3">Brand</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/product/model" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/model" || props.history.location.pathname === "/admin/product/model/add" || props.history.location.pathname === "/admin/product/model/edit" ? "active2" : ""}`}>
                                            <span className="icon icon-tworight"></span>
                                            <p className="mb-0 ml-3">Model</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link  to="/admin/product/products" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/products" || props.history.location.pathname === "/admin/product/products/add" ? "active2" : ""}`}>
                                            <span className="icon icon-tworight"></span>
                                            <p className="mb-0 ml-3">Products</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/product/detail" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/detail" || props.history.location.pathname === "/admin/product/detail/add" || props.history.location.pathname === "/admin/product/detail/edit"   ? "active2" : ""}`}>
                                            <span className="icon icon-tworight"></span>
                                            <p className="mb-0 ml-3">Detail</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                       <Link to="/admin/product/value" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/product/value" || props.history.location.pathname === "/admin/product/value/add" || props.history.location.pathname === "/admin/product/value/edit" ? "active2" : ""}`}>
                                           <span className="icon icon-tworight"></span>
                                           <p className="mb-0 ml-3">Value</p>
                                       </Link>
                                    </li>
                                </ul>
                        </Collapse>
                        <li className="nav-item">
                            <Link onClick={toggle1} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/payment/payments" || props.history.location.pathname === "/admin/payment/currency" || props.history.location.pathname === "/admin/payment/payment-system" ? "active" : ""}`}>
                                <span className="icon icon-payments mr-2"></span>
                                Payment
                                <span className={`icon ${icon1} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse1}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/admin/payment/payments" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/payment/payments" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Payments</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/payment/currency" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/payment/currency" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Currency</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/payment/payment-system" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/payment/payment-system" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Payment System</p>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                        <li className="nav-item">
                            <Link onClick={toggle2} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/addres/country" || props.history.location.pathname === "/admin/addres/country/add" || props.history.location.pathname === "/admin/addres/country/edit" || props.history.location.pathname === "/admin/addres/region" || props.history.location.pathname === "/admin/addres/region/add" || props.history.location.pathname === "/admin/addres/region/edit" || props.history.location.pathname === "/admin/addres/district" || props.history.location.pathname === "/admin/addres/district/add" || props.history.location.pathname === "/admin/addres/district/edit" ? "active" : ""}`}>
                                <span className="icon icon-addres mr-2"></span>
                                Addres
                                <span className={`icon ${icon2} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse2}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/admin/addres/country" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/addres/country" || props.history.location.pathname === "/admin/addres/country/add" || props.history.location.pathname === "/admin/addres/country/edit" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Country</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/addres/region" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/addres/region" || props.history.location.pathname === "/admin/addres/region/add" || props.history.location.pathname === "/admin/addres/region/edit" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Region</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/addres/district" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/addres/district" || props.history.location.pathname === "/admin/addres/district/add" || props.history.location.pathname === "/admin/addres/district/edit" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">District</p>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                        <li className="nav-item">
                            <Link onClick={toggle3} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/order/orders" || props.history.location.pathname === "/admin/order/returns" ? "active" : ""}`}>
                                <span className="icon icon-orders mr-2"></span>
                                Order
                                <span className={`icon ${icon3} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse3}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/admin/order/orders" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/order/orders" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Orders</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/order/returns" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/order/returns" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Returns</p>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                        <li className="nav-item">
                            <Link onClick={toggle4} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/client/clients" || props.history.location.pathname === "/admin/client/sellers" ? "active" : ""}`}>
                                <span className="icon icon-client mr-2"></span>
                                Client
                                <span className={`icon ${icon4} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse4}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/admin/client/clients" onClick={toggle4} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/client/clients" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Clients</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/client/sellers" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/client/sellers" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Sellers</p>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                        <li className="nav-item">
                            <Link onClick={toggle5} className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/role" || props.history.location.pathname === "/admin/system/role/add" || props.history.location.pathname === "/admin/system/role/edit" || props.history.location.pathname === "/admin/system/comments" || props.history.location.pathname === "/admin/system/blogs" || props.history.location.pathname === "/admin/system/statistics" || props.history.location.pathname === "/admin/system/settings" ? "active" : "" }`}>
                                <span className="icon icon-system mr-2"></span>
                                System
                                <span className={`icon ${icon5} ml-auto`}></span>
                                {/*<span className="icon icon-bottom ml-5"></span>*/}
                            </Link>
                        </li>
                        <Collapse
                            isOpen={collapse5}
                            // onEntering={onEntering}
                            // onEntered={onEntered}
                            // onExiting={onExiting}
                            // onExited={onExited}
                        >
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link to="/admin/system/role" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/role" || props.history.location.pathname === "/admin/system/role/add" || props.history.location.pathname === "/admin/system/role/edit" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Role</p>
                                    </Link>
                                    <Link to="/admin/system/comments" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/comments" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Comments</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/system/blogs" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/blogs" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Blogs</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/system/statistics" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/statistics" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Statistics</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/system/settings" className={`nav-link d-flex align-items-center ${props.history.location.pathname === "/admin/system/settings" ? "active2" : ""}`}>
                                        <span className="icon icon-tworight"></span>
                                        <p className="mb-0 ml-3">Settings</p>
                                    </Link>
                                </li>
                            </ul>
                        </Collapse>
                    </ul>
                </div>
            </div>
            <div className="admin-layout-right">
                {props.children}
            </div>
        </div>
    );
};

export default AdminLayout;