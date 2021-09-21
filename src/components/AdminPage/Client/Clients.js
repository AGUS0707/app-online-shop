import React, {useEffect} from 'react';
import AdminLayout from "../AdminLayout";
import {connect} from "react-redux";
import {getUsers, set_state, getRole} from "../../../redux/actions/categoryAction";
import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import Cookies from "js-cookie";



const Clients = (props) => {

    let user=props.userReducer;


    useEffect(()=> {

        if (user.role_id === "1"){
            props.getUsers()
            props.getRole()
        }

    }, [])



    return (
        <AdminLayout history={props.history}>
            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    <th>№</th>
                    <th>id</th>
                    <th>first-name</th>
                    <th>last-name</th>
                    <th>email</th>
                    <th>phone-number</th>
                    <th>photo</th>
                    <th>role</th>
                    <th>roleni-o'zgartirish</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.role.map((item, index) =>{
                        return <tr>
                            <th>{index+1}</th>
                            <th>{item.id}</th>
                            <th>{item.firstname}</th>
                            <th>{item.lastname}</th>
                            <th>{item.email}</th>
                            <th>{item.phone}</th>
                            <th><img src={item.photo} width="50" height="50" alt=""/></th>
                            <th>{item.role}</th>
                            <th>
                                <AvForm>
                                    <AvField type="select" name="role_id" onChange={(e)=>{
                                        // props.set_state({rolevalue: e.target.value})
                                        // props.set_state({roleid: item.id})
                                        console.log(e.target.value)
                                        console.log(item.id)
                                        axios.post(API_PATH + "upuserrole", {id: item.id, role_id: e.target.value}, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}})
                                            .then((res)=> {
                                                console.log(res)
                                                props.getUsers()
                                                props.getRole()
                                            })

                                    }}>
                                        <option>Roleni o'zgartirish</option>
                                        {
                                            props.rolename.map((item)=>{
                                                return <option value={item.id}>{item.name}</option>
                                            })
                                        }
                                        {/*<option value={item.role === "Admin" ? "1" : item.role === "Manager" ? "2" : item.role === "Seller" ? "3" : item.role === "User" ? "4" : ""}>{item.role}</option>*/}

                                        {/*{*/}
                                        {/*    item.role === "Admin" ?*/}
                                        {/*        <option value="2">Manager</option> : item.role === "Manager" ? <option value="1">Admin</option> : item.role === "Seller" ? <option value="1">Admin</option> : item.role === "User" ? <option value="1">Admin</option> : ""*/}
                                        {/*}*/}
                                        {/*{*/}
                                        {/*    item.role === "Admin" ?*/}
                                        {/*        <option value="3">Seller</option> : item.role === "Manager" ? <option value="3">Seller</option> : item.role === "Seller" ? <option value="2">Manager</option> : item.role === "User" ? <option value="2">Manager</option> : ""*/}
                                        {/*}*/}
                                        {/*{*/}
                                        {/*    item.role === "Admin" ?*/}
                                        {/*        <option value="4">User</option> : item.role === "Manager" ? <option value="4">User</option> : item.role === "Seller" ? <option value="4">User</option> : item.role === "User" ? <option value="3">Seller</option> : ""*/}
                                        {/*}*/}

                                    </AvField>
                                </AvForm>
                            </th>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        role: state.category.role,
        rolevalue: state.category.rolevalue,
        roleid: state.category.roleid,
        rolename: state.category.rolename,
        userReducer: state.userReducer.userObject

    }
}

export default connect(mapStateToProps, {getUsers, set_state, getRole})(Clients) ;