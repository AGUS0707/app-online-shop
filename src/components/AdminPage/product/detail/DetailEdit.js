import React from 'react';
import Detail from "./Detail";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";
import {getCategory} from "../../../../redux/actions/categoryAction";
import {upDetail} from "../../../../redux/actions/productAction";

const DetailEdit = (props) => {
    return (
        <Detail history={props.history}>
            <AvForm onSubmit={(event, errors, values)=>{props.upDetail(event, errors, values, props.history)}} model={props.selectedItemDetail}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Detail</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type="text" label="detail_uz" placeholder="Detail-Name" name="detail_uz"/>
                        <AvField type="text" label="detail_ru" placeholder="Detail-Name" name="detail_ru"/>
                        <AvField type="text" placeholder="Detail-Name" name="id" className="d-none"/>
                        <AvField type="select" label="category_id" name="category_id">
                            <option>Categorys</option>
                            {
                                props.category.map((item)=>{
                                    return <option value={item.id}>{item.category_uz}</option>
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
        </Detail>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
        selectedItemDetail: state.product.selectedItemDetail
    }
}

export default connect(mapStateToProps, {getCategory, upDetail})(DetailEdit);