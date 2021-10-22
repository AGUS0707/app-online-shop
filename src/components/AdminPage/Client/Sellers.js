import React, {useEffect, useState} from 'react';
import AdminLayout from "../AdminLayout";
import {connect} from "react-redux";
import {getUsers} from "../../../redux/actions/categoryAction";


const Sellers = (props) => {

    let user=props.userReducer;
    useEffect(()=> {

        if (user.role_id === "1"){
            props.getUsers()
        }

    }, [])

    return (
        <AdminLayout history={props.history}>

            <table className="table table-hover table-striped">
                <thead>
                <tr>
                    {/*<th>№</th>*/}
                    <th>id</th>
                    <th>first-name</th>
                    <th>last-name</th>
                    <th>email</th>
                    <th>phone-number</th>
                    <th>photo</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.role.map((item, index) =>{
                        return item.role === "Seller" ? <tr>
                            {/*<th>{index+1}</th>*/}
                            <th>{item.id}</th>
                            <th>{item.firstname}</th>
                            <th>{item.lastname}</th>
                            <th>{item.email}</th>
                            <th>{item.phone}</th>
                            <th><img src={item.photo} width="50" height="50" alt=""/></th>
                        </tr> : ""
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
        userReducer: state.userReducer.userObject
    }
}

export default connect(mapStateToProps, {getUsers})(Sellers)  ;