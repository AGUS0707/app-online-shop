import React from 'react';
import District from "./District";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";
import {upDistrict} from "../../../../redux/actions/addresAction";

const DistrictEdit = (props) => {
    return (
        <District history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upDistrict(event, errors, values, props.history)}} model={props.selectedItemDistrict}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>District</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type="text" name="district_uz" label="district-uz" placeholder="District-uz"/>
                        <AvField type="text" name="district_ru" label="district-ru" placeholder="District-ru"/>
                        <AvField type="text" name="id" className="d-none"/>
                    </div>
                </div>

            </AvForm>

        </District>
    );
};

export const mapStateToProps = (state) => {
    return {
        selectedItemDistrict: state.address.selectedItemDistrict

    }
}

export default connect(mapStateToProps, {upDistrict})(DistrictEdit);