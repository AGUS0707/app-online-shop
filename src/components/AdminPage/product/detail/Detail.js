import React, {useEffect, useState} from 'react';
import AdminLayout from "../../AdminLayout";

import {connect} from "react-redux";
import {getDetail, set_state1} from "../../../../redux/actions/productAction";
import {Link} from "react-router-dom";


const Detail = (props) => {
    let user=props.userReducer;

    useEffect(() => {
       if (user.role_id === "1"){
           if (props.history.location.pathname === "/admin/product/detail"){
               props.getDetail()
           }
       }
    }, [])

    return (
        <AdminLayout history={props.history}>
            <div className="admin-detail">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Detail</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/product/detail">detail</Link>
                                {
                                    props.history.location.pathname === "/admin/product/detail/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/detail/add" ?  <Link className="text-decoration-none text-primary" to="/admin/product/detail/add">detail add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/detail/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/detail/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/category/edit">detail edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {
                    props.history.location.pathname === "/admin/product/detail" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>detail</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/product/detail/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/detail" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>detail-uz</th>
                                    <th>detail-ru</th>
                                    <th>category-id</th>
                                    <th>active</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {

                                    props.detaildata.map((item, index)=>{
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.detail_uz}</td>
                                            <td>{item.detail_ru}</td>
                                            <td>{item.category_id}</td>
                                            <td>{item.is_active}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/product/detail/edit"><button className="btn btn-info" onClick={() => {props.set_state1({selectedItemDetail: item})}}><span className="icon icon-edit"></span></button></Link>
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
        detaildata: state.product.detaildata,
        selectedItemDetail: state.product.selectedItemDetail,
        userReducer: state.userReducer.userObject
    }
}

export default connect(mapStateToProps, {getDetail, set_state1})(Detail)  ;