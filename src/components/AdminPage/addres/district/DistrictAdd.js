import React, {useEffect} from 'react';
import District from "./District";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {saveDistrict, getRegion} from "../../../../redux/actions/addresAction";

const DistrictAdd = (props) => {

    let user=props.userReducer;


    useEffect(()=>{
        if (user.role_id === "1"){
            props.getRegion()
        }
    },[])

    return (
        <District history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveDistrict(event, errors, values, props.history)}}>

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
                        <AvField type="text" name="district_uz" label="district-uz" placeholder="District-uz" required/>
                        <AvField type="text" name="district_ru" label="district-ru" placeholder="District-ru" required/>
                        <AvField type="select" name="region_id" label="Region-id" required>
                            <option>Tanlang</option>
                            {
                                props.region.map((item)=> {
                                    return <option value={item.id}>{item.region_uz}</option>
                                })

                            }
                        </AvField>

                    </div>
                </div>

            </AvForm>

        </District>
    );
};

export const mapStateToProps = (state) => {
    return {

        region: state.address.region,
        userReducer: state.userReducer.userObject


    }
}

export default connect(mapStateToProps, {getRegion, saveDistrict})(DistrictAdd) ;