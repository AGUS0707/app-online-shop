import React from 'react';
import Value from "./Value";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {getDetail, upValue} from "../../../../redux/actions/productAction";

const ValueEdit = (props) => {
    return (
        <Value history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upValue(event, errors, values, props.history)}} model={props.selectedItemvalue}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Value</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type="text" label="value_uz" placeholder="Value-uz" name="value_uz"/>
                        <AvField type="text" label="value_ru" placeholder="Value-ru" name="value_ru"/>
                        <AvField type="text" name="id" className="d-none"/>
                        <AvField type="select" label="detail-id" name="detail_id">
                            <option>Choose detail</option>
                            {
                                props.detaildata.map((item)=> {
                                    return <option value={item.id}>{item.detail_uz}</option>
                                })
                            }
                        </AvField>
                        <AvField type="select" label="is-active" name="is_active">
                            <option>Choose</option>
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </AvField>
                    </div>
                </div>

            </AvForm>

        </Value>
    );
};

const mapStateToProps = (state) => {

    return {
        detaildata: state.product.detaildata,
        selectedItemvalue: state.product.selectedItemvalue
    }

}

export default connect(mapStateToProps, {getDetail, upValue})(ValueEdit);