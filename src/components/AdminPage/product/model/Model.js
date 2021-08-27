import React, {useEffect, useState} from 'react';
import AdminLayout from "../../AdminLayout";

import {connect} from "react-redux"

import {getModel, set_state1} from "../../../../redux/actions/productAction";
import {Link} from "react-router-dom";


const Model = (props) => {



    useEffect(()=>{
        if (props.history.location.pathname === "/admin/product/model"){
            props.getModel()
        }
    },[])

    return (
        <AdminLayout history={props.history}>

            <div className="product-model">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Model</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/product/model">model</Link>
                                {
                                    props.history.location.pathname === "/admin/product/model/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/model/add" ?  <Link className="text-decoration-none text-primary" to="/admin/product/model/add">model add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/model/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/model/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/brand/edit">model edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/product/model" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>Model</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/product/model/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/model" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>model-name</th>
                                    <th>brand-id</th>
                                    <th>is-active</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.modeldata.map((item, index)=> {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.model_name}</td>
                                            <td>{item.brand_id}</td>
                                            <td>{item.is_active}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/product/model/edit"><button className="btn btn-info" onClick={() => {props.set_state1({selectedItemModel: item, open2: true})}}><span className="icon icon-edit"></span></button></Link></td>
                                            {/*<button className="btn btn-danger ml-2" onClick={() => props.set_state1({selectedIndex: item.id, open1: true})}><span className="icon icon-delete"></span></button></td>*/}
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>  : ""
                }

                {props.children}

            </div>


        </AdminLayout>
    );

};

const mapStateToProps = (state) => {
    return{
        open1:state.product.open1,
        open2:state.product.open2,
        data:state.product.data,
        modeldata:state.product.modeldata,
        selectedItemModel: state.product.selectedItemModel
    }
}

export default connect(mapStateToProps, {getModel, set_state1})(Model)  ;