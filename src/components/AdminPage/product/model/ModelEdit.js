import React, {useEffect} from 'react';
import Model from "./Model";
import {AvField, AvForm} from "availity-reactstrap-validation";
import {connect} from "react-redux";
import {getBrand, upModel} from "../../../../redux/actions/productAction";

const ModelEdit = (props) => {
    
    useEffect(()=>{
        if (user.role_id === "1"){
            props.getBrand()
        }
    },[])

    let user=props.userReducer;

    return (
        <Model history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.upModel(event, errors, values, props.history)}} model={props.selectedItemModel}>

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
                        <AvField type={"text"} label={"model"} name="model_name" placeholder={"Model Name"}/>
                        <AvField type={"text"} name="id" placeholder={"Model Name"} className="d-none"/>
                        <AvField type={"select"} name="brand_id">
                            <option>Change</option>
                            {
                                props.data.map((item)=> {
                                    return <option value={item.id}>{item.brand_name}</option>
                                })
                            }

                        </AvField>
                        <AvField type="select" name="is_active">
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
        selectedItemModel: state.product.selectedItemModel,
        userReducer: state.userReducer.userObject
    }
}

export default connect(mapStateToProps, {getBrand, upModel})(ModelEdit);