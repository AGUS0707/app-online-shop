import React, {useEffect} from 'react';
import Region from "./Region";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";
import {getCountry, saveRegion,} from "../../../../redux/actions/addresAction";

const RegionAdd = (props) => {

    useEffect(()=>{
        props.getCountry()
    }, [])

    return (
        <Region history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveRegion(event, errors, values, props.history)}}>

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
                        <AvField type="text" name="region_uz" label="region-uz" placeholder="District-uz" required/>
                        <AvField type="text" name="region_ru" label="region-ru" placeholder="District-ru" required/>
                        <AvField type="select" name="country_id" label="Country-id" required>
                            <option>Tanlang</option>
                            {
                                props.country.map((item)=> {
                                    return <option value={item.id}>{item.country_uz}</option>
                                })

                            }
                        </AvField>
                    </div>
                </div>

            </AvForm>

        </Region>
    );
};

export const mapStateToProps = (state) => {
    return {

        country: state.address.country,

    }
}

export default connect(mapStateToProps,{getCountry, saveRegion})(RegionAdd) ;