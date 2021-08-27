import React from 'react';
import Value from "./Value";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {getDetail, saveValue} from "../../../../redux/actions/productAction";

const ValueAdd = (props) => {
    return (
        <Value history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveValue(event, errors, values, props.history)}}>

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
                            <AvField type="text" label="value_uz" placeholder="Value-uz" name="value_uz" required/>
                            <AvField type="text" label="value_ru" placeholder="Value-ru" name="value_ru" required/>
                            <AvField type="select" label="detail-id" name="detail_id" required>
                                <option>Choose detail</option>
                                {
                                    props.detaildata.map((item)=> {
                                        return <option value={item.id}>{item.detail_uz}</option>
                                    })
                                }
                            </AvField>
                            <AvField type="select" label="is-active" name="is_active" required>
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
    }

}

export default connect(mapStateToProps, {saveValue, getDetail})(ValueAdd) ;