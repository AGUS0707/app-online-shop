import React, {useEffect} from 'react';
import AdminLayout from "../../AdminLayout";

import {addRole, set_state, getRole} from "../../../../redux/actions/categoryAction";

import {connect} from "react-redux";
import {Link} from "react-router-dom";


const Role = (props) => {

    useEffect(()=>{
        if (props.history.location.pathname === "/admin/system/role"){
            props.getRole()
        }
    }, [])

    return (
        <AdminLayout history={props.history}>

            <div className="role">

                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="d-flex align-items-center buyurtmalar">
                            <h3>Role</h3>
                            <div className="d-flex align-items-center ml-5">
                                <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                                <span className="icon icon-right mx-1"></span>
                                <Link className="text-decoration-none text-dark" to="/admin/system/role">role</Link>
                                {
                                    props.history.location.pathname === "/admin/system/role/add" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/system/role/add" ?  <Link className="text-decoration-none text-primary" to="/admin/system/role/add">role add</Link> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/system/role/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                                }
                                {
                                    props.history.location.pathname === "/admin/system/role/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/system/role/edit">role edit</Link> : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {
                    props.history.location.pathname === "/admin/system/role" ? <div className="row">
                        <div className="col-6 offset-3">
                            <div className="d-flex align-items-center justify-content-between brand">
                                <div>Role</div>
                                <div className="d-flex align-items-center buttn">
                                    <Link to="/admin/system/role/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>
                                </div>
                            </div>
                        </div>
                    </div> : ""
                }

                {
                    props.history.location.pathname === "/admin/system/role" ? <div className="row">
                        <div className="col-6 offset-3">
                            <table className="table table-hover table-striped mt-5">
                                <thead>
                                <tr>
                                    <th>№</th>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    props.rolename.map((item, index)=>{
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <Link to="/admin/system/role/edit">
                                                    <button className="btn btn-info" onClick={()=>
                                                    {
                                                        props.set_state({selectedItemrole: item, roleid2: item.id})
                                                    }
                                                    }><span className="icon icon-edit"></span></button>
                                                </Link>
                                                {/*<button className="btn btn-danger ml-2" onClick={() =>*/}
                                                {/*    {*/}
                                                {/*        props.set_state({selectedIndexrole: item.id, roleopen: true})*/}

                                                {/*    }*/}
                                                {/*}>Delete</button>*/}
                                            </td>
                                        </tr>
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>  : ""
                }

                {props.children}


                {/*<Modal isOpen={props.roleopen} toggle={() => props.set_state({roleopen: false})}>*/}
                {/*    <ModalHeader>*/}
                {/*        <h3>Rostdan xam o'chirmoqchimisiz ???</h3>*/}
                {/*    </ModalHeader>*/}
                {/*    <ModalBody className="d-flex justify-content-between">*/}
                {/*        <button type="button" className="btn btn-danger" onClick={props.deleteRole}>Ha</button>*/}
                {/*        <button type="button" className="btn btn-warning"*/}
                {/*                onClick={()=>props.set_state({roleopen:false})}>Yo'q*/}
                {/*        </button>*/}
                {/*    </ModalBody>*/}
                {/*</Modal>*/}



            </div>

        </AdminLayout>
    );

};

export const mapStateToProps = (state) => {
    return{
        rolename: state.category.rolename,
        selectedItemrole: state.category.selectedItemrole,
        roleid2: state.category.roleid2,
    }
}

export default connect(mapStateToProps, {addRole, set_state, getRole})(Role)  ;