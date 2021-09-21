
import React, {useEffect, useState} from 'react';
import AdminLayout from "../../AdminLayout";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {set_state2, getDistrict, saveDistrict, getRegion, deleteDistrict, upDistrict} from "../../../../redux/actions/addresAction";
import {Link} from "react-router-dom";


const District = (props) => {

    let user=props.userReducer;


    useEffect(()=>{
       if (user.role_id === "1"){
           if (props.history.location.pathname === "/admin/addres/district"){
               props.getDistrict()
           }
       }
    },[])

    return (
        <AdminLayout history={props.history}>

            <div className="addres-district">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>District</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/addres/district">district</Link>
                                {
                                    props.history.location.pathname === "/admin/addres/district/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/district/add" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/district/add">district add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/district/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/district/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/district/edit">district edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/addres/district" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>District</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/addres/district/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>

                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/addres/district" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>district-uz</th>
                                    <th>district-ru</th>
                                    <th>region-id</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.district.map((item, index)=> {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.district_uz}</td>
                                            <td>{item.district_ru}</td>
                                            <td>{item.region_id}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/addres/district/edit"><button className="btn btn-info" onClick={() => {props.set_state2({selectedItemDistrict: item})}}><span className="icon icon-edit"></span></button></Link>
                                                <button className="btn btn-danger ml-2" onClick={() => props.set_state2({selectedIndexDistrict: item.id, open1: true})}><span className="icon icon-delete"></span></button></td>
                                        </tr>
                                    })
                                }

                                <Modal isOpen={props.open1} toggle={() => props.set_state2({open1: false})}>
                                    <ModalHeader>
                                        <h3>Rostdan xam o'chirmoqchimisiz ???</h3>
                                    </ModalHeader>
                                    <ModalBody className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-danger" onClick={props.deleteDistrict}>Ha</button>
                                        <button type="button" className="btn btn-warning"
                                                onClick={() => props.set_state2({open1: false})}>Yo'q
                                        </button>
                                    </ModalBody>
                                </Modal>

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

export const mapStateToProps = (state) => {
    return {

        open1: state.address.open1,
        district: state.address.district,
        selectedIndexDistrict: state.address.selectedIndexDistrict,
        selectedItemDistrict: state.address.selectedItemDistrict,
        userReducer: state.userReducer.userObject


    }
}

export default connect(mapStateToProps, {set_state2, getRegion, saveDistrict, getDistrict, deleteDistrict, upDistrict})(District);