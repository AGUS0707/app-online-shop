import React, {useEffect} from 'react';
import Model from "./Model";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {getBrand, saveModel} from "../../../../redux/actions/productAction";

const ModelAdd = (props) => {

    useEffect(()=>{
        props.getBrand()
    },[])

    return (
        <Model history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveModel(event, errors, values, props.history)}}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Model</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type={"text"} label={"model"} name="model_name" placeholder={"Model Name"} required/>
                        <AvField type={"select"} name="brand_id" label="brand" required>
                            <option>Change</option>
                            {
                                props.data.map((item)=> {
                                    return <option value={item.id}>{item.brand_name}</option>
                                })
                            }

                        </AvField>
                        <AvField type="select" name="is_active" label="active" required>
                            <option>Choose</option>
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </AvField>
                    </div>
                </div>

            </AvForm>

        </Model>
    );
};

const mapStateToProps = (state) => {
    return{
        data:state.product.data,
    }
}

export default connect(mapStateToProps, {getBrand, saveModel})(ModelAdd);