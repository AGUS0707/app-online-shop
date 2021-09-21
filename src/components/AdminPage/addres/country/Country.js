import React, {useEffect, useState} from 'react';
import AdminLayout from "../../AdminLayout";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {saveCountry, getCountry, set_state2, deleteCountry, upCountry} from "../../../../redux/actions/addresAction";
import {Link} from "react-router-dom";


const Country = (props) => {

    let user=props.userReducer;

    useEffect(()=> {
        if (user.role_id === "1"){
            if (props.history.location.pathname === "/admin/addres/country"){
                props.getCountry()
            }
        }
    },[])

    return (
        <AdminLayout history={props.history}>

            <div className="addres-country">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Country</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/addres/country">country</Link>
                                {
                                    props.history.location.pathname === "/admin/addres/country/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/country/add" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/country/add">country add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/country/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/country/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/country/edit">country edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/addres/country" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>Country</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/addres/country/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>

                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/addres/country" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>country-uz</th>
                                    <th>country-ru</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.country.map((item, index)=> {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.country_uz}</td>
                                            <td>{item.country_ru}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/addres/country/edit"><button className="btn btn-info" onClick={() => {props.set_state2({selectedItemCountry: item})}}><span className="icon icon-edit"></span></button></Link>
                                                <button className="btn btn-danger ml-2" onClick={() => props.set_state2({selectedIndexCountry: item.id, open1: true})}><span className="icon icon-delete"></span></button></td>
                                        </tr>
                                    })
                                }

                                <Modal isOpen={props.open1} toggle={() => props.set_state2({open1: false})}>
                                    <ModalHeader>
                                        <h3>Rostdan xam o'chirmoqchimisiz ?</h3>
                                    </ModalHeader>
                                    <ModalBody className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-danger" onClick={props.deleteCountry}>Ha</button>
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

                <Modal isOpen={props.open2} toggle={()=>props.set_state2({open2:false})}>
                    <ModalBody>
                        <AvForm onSubmit={props.upCountry} model={props.selectedItemCountry}>
                            <AvField type="text" name="country_uz" label="Country" placeholder="Country name"/>
                            <AvField type="text" name="country_ru" label="Country" placeholder="Country name"/>
                            <AvField type="text" name="id" className="d-none"/>

                            <button type="submit" className="btn btn-success d-block ml-auto">Add</button>
                        </AvForm>
                    </ModalBody>
                </Modal>

                {props.children}


            </div>

        </AdminLayout>
    );

};

export const mapStateToProps = (state) => {
    return {

        open1: state.address.open1,
        country: state.address.country,
        selectedIndexCountry: state.address.selectedIndexCountry,
        selectedItemCountry: state.address.selectedItemCountry,
        userReducer: state.userReducer.userObject

    }
}

export default connect(mapStateToProps, {set_state2, saveCountry, getCountry, deleteCountry, upCountry})(Country)  ;