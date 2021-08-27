import React from 'react';
import Region from "./Region";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {upRegion} from "../../../../redux/actions/addresAction";

const RegionEdit = (props) => {
    return (
        <Region history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upRegion(event, errors, values, props.history)}} model={props.selectedItemRegion}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Region</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type="text" name="region_uz" label="region-uz" placeholder="Region-uz"/>
                        <AvField type="text" name="region_ru" label="region-ru" placeholder="Region-ru"/>
                        <AvField type="text" name="id" className="d-none"/>
                    </div>
                </div>

            </AvForm>

        </Region>
    );
};

export const mapStateToProps = (state) => {
    return {

        selectedItemRegion: state.address.selectedItemRegion

    }
}

export default connect(mapStateToProps, {upRegion})(RegionEdit) ;