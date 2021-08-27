
import React, {useEffect} from 'react';
import AdminLayout from "../../AdminLayout";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

import {connect} from "react-redux";

import {set_state2, getRegion, deleteRegion} from "../../../../redux/actions/addresAction";
import {Link} from "react-router-dom";


const Region = (props) => {

    useEffect(()=>{
        if (props.history.location.pathname === "/admin/addres/region"){
            props.getRegion()
        }
    },[])

    return (
        <AdminLayout history={props.history}>

            <div className="addres-district">

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Region</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/addres/region">region</Link>
                                {
                                    props.history.location.pathname === "/admin/addres/region/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/region/add" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/region/add">region add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/region/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/addres/region/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/addres/region/edit">region edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/addres/region" ? <div className="row">
                        <div className="col-10 offset-1">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>Region</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/addres/region/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>

                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/addres/region" ? <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>region-uz</th>
                                    <th>region-ru</th>
                                    <th>country-id</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.region.map((item, index)=> {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.region_uz}</td>
                                            <td>{item.region_ru}</td>
                                            <td>{item.country_id}</td>
                                            <td className="d-flex align-items-center border-0"><Link to="/admin/addres/region/edit"><button className="btn btn-info" onClick={() => {props.set_state2({selectedItemRegion: item})}}><span className="icon icon-edit"></span></button></Link>
                                                <button className="btn btn-danger ml-2" onClick={() => props.set_state2({selectedIndexRegion: item.id, open1: true})}><span className="icon icon-delete"></span></button></td>
                                        </tr>
                                    })
                                }

                                <Modal isOpen={props.open1} toggle={() => props.set_state2({open1: false})}>
                                    <ModalHeader>
                                        <h3>Rostdan xam o'chirmoqchimisiz ???</h3>
                                    </ModalHeader>
                                    <ModalBody className="d-flex justify-content-between">
                                        <button type="button" className="btn btn-danger" onClick={props.deleteRegion}>Ha</button>
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
        region: state.address.region,
        selectedIndexRegion: state.address.selectedIndexRegion,
        selectedItemRegion: state.address.selectedItemRegion

    }
}

export default connect(mapStateToProps, {set_state2, getRegion, deleteRegion})(Region);