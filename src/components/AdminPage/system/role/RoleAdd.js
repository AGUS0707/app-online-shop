import React from 'react';
import Role from "./Role";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {addRole} from "../../../../redux/actions/categoryAction";

const RoleAdd = (props) => {
    return (
        <Role history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.addRole(event, errors, values, props.history)}}>

                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Role</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <AvField type="text" name="name" label="Role" placeholder="Role qo'shish" required/>
                    </div>
                </div>

            </AvForm>

        </Role>
    );
};

export default connect(null, {addRole})(RoleAdd) ;