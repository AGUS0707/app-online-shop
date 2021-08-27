import React, {useEffect} from 'react';
import Detail from "./Detail";
import {AvField, AvForm} from "availity-reactstrap-validation";

import {connect} from "react-redux";
import {getCategory} from "../../../../redux/actions/categoryAction";
import {saveDetail} from "../../../../redux/actions/productAction";

const DetailAdd = (props) => {

    useEffect(()=>{
        props.getCategory()
    },[])

    return (
        <Detail history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{props.saveDetail(event, errors, values, props.history)}}>

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
                        <AvField type="text" label="detail-uz" placeholder="detail_uz" name="detail_uz" required/>
                        <AvField type="text" label="detail-ru" placeholder="detail-ru" name="detail_ru" required/>
                        <AvField type="select" label="category-id" name="category_id" required>
                            <option>Categorys</option>
                            {
                                props.category.map((item)=>{
                                    return <option value={item.id}>{item.category_uz}</option>
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

        </Detail>
    );
};

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
    }
}

export default connect(mapStateToProps, {getCategory, saveDetail})(DetailAdd);