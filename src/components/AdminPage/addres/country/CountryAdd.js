import React from 'react';
import Country from "./Country";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {saveCountry} from "../../../../redux/actions/addresAction";

const CountryAdd = (props) => {
    return (
        <Country history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveCountry(event, errors, values, props.history)}}>

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
                        <AvField type="text" name="country_uz" label="country-uz" placeholder="Country-uz" required/>
                        <AvField type="text" name="country_ru" label="country-ru" placeholder="Country-ru" required/>
                    </div>
                </div>

            </AvForm>

        </Country>
    );
};


export default connect(null, {saveCountry})(CountryAdd);