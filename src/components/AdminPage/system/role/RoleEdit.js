import React from 'react';
import Role from "./Role";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {upRole} from "../../../../redux/actions/categoryAction";

const RoleEdit = (props) => {
    return (
        <Role history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upRole(event, errors, values, props.history)}} model={props.selectedItemrole}>

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
                        <AvField type="text" name="name" label="Role" placeholder="Role qo'shish"/>
                    </div>
                </div>

            </AvForm>

        </Role>
    );
};

export const mapStateToProps = (state) => {
    return{
        selectedItemrole: state.category.selectedItemrole
    }
}


export default connect(mapStateToProps, {upRole})(RoleEdit) ;