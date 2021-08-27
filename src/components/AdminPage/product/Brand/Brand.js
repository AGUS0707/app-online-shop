import React, {useEffect, useState} from 'react';
import AdminLayout from "../../AdminLayout";

import {connect} from "react-redux";

import {set_state1, getBrand, deleteBrand} from "../../../../redux/actions/productAction";

import {Modal, ModalBody, ModalHeader} from "reactstrap";

import {Link} from "react-router-dom";

const Brand = (props) => {

    useEffect(() => {
        if (props.history.location.pathname === "/admin/product/brand"){
            props.getBrand()
        }
    }, [])


    return (
        <AdminLayout history={props.history}>

            <div className="brand1">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Brand</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/product/brand">brand</Link>
                                {
                                    props.history.location.pathname === "/admin/product/brand/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/brand/add" ?  <Link className="text-decoration-none text-primary" to="/admin/product/brand/add">brand add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/brand/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/product/brand/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/product/brand/edit">brand edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/product/brand" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>Brand</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/product/brand/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>

                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/product/brand" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-striped table-hover mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>photo-id</th>
                                    <th>brand-name</th>
                                    <th>is-active</th>
                                    <th>photo</th>
                                    <th>alt-name</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.data.map((item, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.photo_id}</td>
                                            <td>{item.brand_name}</td>
                                            <td>{item.is_active}</td>
                                            <td><img src={item.url} width="30" height="30" alt=""/></td>
                                            <td>{item.alt_name}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/product/brand/edit"><button className="btn btn-info" onClick={() => {props.set_state1({selectedItem: item})}}><span className="icon icon-edit"></span></button></Link>
                                                <button className="btn btn-danger ml-2" onClick={() => props.set_state1({selectedIndex: item.id, open1: true})}><span className="icon icon-delete"></span></button></td>
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>  : ""
                }

                <Modal isOpen={props.open1} toggle={() => props.set_state1({open1: false})}>
                    <ModalHeader>
                        <h3>Rostdan xam o'chirmoqchimisiz ???</h3>
                    </ModalHeader>
                    <ModalBody className="d-flex justify-content-between">
                        <button type="button" className="btn btn-danger" onClick={props.deleteBrand}>Ha</button>
                        <button type="button" className="btn btn-warning"
                                onClick={() => props.set_state1({open1: false})}>Yo'q
                        </button>
                    </ModalBody>
                </Modal>

                {props.children}

            </div>

        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return{
        open1: state.product.open1,
        data: state.product.data,
        selectedIndex: state.product.selectedIndex,
        selectedItem: state.product.selectedItem,
    }
}

export default connect(mapStateToProps, {set_state1, getBrand, deleteBrand})(Brand) ;