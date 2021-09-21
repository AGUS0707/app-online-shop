import React, {useEffect} from 'react';
import AdminLayout from "../../AdminLayout";

import {connect} from "react-redux";

import {set_state1, getValue} from "../../../../redux/actions/productAction";
import {Link} from "react-router-dom";

const Value = (props) => {

    let user=props.userReducer;

    useEffect(()=>{
        if (user.role_id === "1"){
            if (props.history.location.pathname === "/admin/product/value") {
                props.getValue()
            }
        }
    }, [])

    return (
        <AdminLayout history={props.history}>

            <div className="container admin-value">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Value</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/product/value">value</Link>
                                {
                                    props.history.location.pathname === "/admin/product/value/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/value/add" ?  <Link className="text-decoration-none text-primary" to="/admin/product/value/add">value add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/value/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/value/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/brand/edit">value edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/product/value" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>value</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/product/value/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>

                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/value" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>value-uz</th>
                                    <th>value-ru</th>
                                    <th>detail-id</th>
                                    <th>active</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {

                                    props.valuedata.map((item, index)=>{
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.value_uz}</td>
                                            <td>{item.value_ru}</td>
                                            <td>{item.detail_id}</td>
                                            <td>{item.is_active}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/product/value/edit"><button className="btn btn-info" onClick={() => {props.set_state1({selectedItemvalue: item})}}><span className="icon icon-edit"></span></button></Link>
                                                </td>
                                        </tr>
                                    })

                                }
                                </tbody>
                            </table>
                        </div>
                    </div> : ""
                }


                {props.children}

            </div>

        </AdminLayout>
    );

};

const mapStateToProps = (state) => {

    return {
        valuedata:state.product.valuedata,
        selectedItemvalue: state.product.selectedItemvalue,
        userReducer: state.userReducer.userObject
    }

}

export default connect(mapStateToProps, {set_state1, getValue})(Value)  ;


