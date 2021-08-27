import React from 'react';
import Country from "./Country";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";

import {upCountry} from "../../../../redux/actions/addresAction";

const CountryEdit = (props) => {
    return (
        <Country history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upCountry(event, errors, values, props.history)}} model={props.selectedItemCountry}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Country</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type="text" name="country_uz" label="Country" placeholder="Country name"/>
                        <AvField type="text" name="country_ru" label="Country" placeholder="Country name"/>
                        <AvField type="text" name="id" className="d-none"/>
                    </div>
                </div>

            </AvForm>

        </Country>
    );
};

export const mapStateToProps = (state) => {
    return {

        selectedItemCountry: state.address.selectedItemCountry

    }
}

export default connect(mapStateToProps, {upCountry})(CountryEdit) ;