import React from 'react';
import Brand from "./Brand";
import {AvField, AvForm} from "availity-reactstrap-validation";
import axios from "axios";
import {API_PATH} from "../../../../tools/constants";
import {toast} from "react-toastify";
import {connect} from "react-redux";

const BrandEdit = (props) => {

    const [formData2, setFormData2 ]=React.useState()
    const [photo, setPhoto ]=React.useState("")

    const changeInput2 = (e) => {
        if (e.target.name==="file"){
            setFormData2(e.target.files[0]);
            setPhoto(URL.createObjectURL(e.target.files[0]))

        }
    };

    function addButton2(event, errors, values, history) {
       if (photo.length > 0){
           const data1= new FormData();
           data1.append('file', formData2);
           data1.append('name',values.name )
           data1.append('is_active',values.is_active)
           data1.append("id",props.selectedItem.id)


           axios.post(API_PATH + "upbrand", data1)
               .then((res) => {
                   toast.success("O'zgardi")
                   history.push("/admin/product/brand")
               })
               .catch(()=> {
                   toast.error("Xatoku brat")
                   history.push("/admin/product/brand")
               })
       } else {
           toast.error("brand rasmini qaytadan qo'shing")
       }
    }

    return (
        <Brand history={props.history}>

            <AvForm onSubmit={(event, errors, values)=>{addButton2(event, errors, values, props.history)}} model={props.selectedItem}>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Brand</div>
                            <div className="categoryadd"><button type="submit" className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">

                        <AvField type={"text"} label={"name"} name="brand_name"  placeholder={"Brand Name"} className="form-control"/>

                        {
                            photo.length > 0 ? <div className="default-rasm py-2"><img src={photo} width="100" height="100" alt=""/></div> : <div className="default-rasm py-2"><img src="/images/apple.svg" width="100" height="100" alt=""/></div>
                        }

                        <AvField type={"file"} onChange={changeInput2} name="file" />
                        <AvField type={"select"}  name="is_active">
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </AvField>

                    </div>
                </div>

            </AvForm>

        </Brand>
    );
};

const mapStateToProps = (state) => {
    return{
        selectedItem: state.product.selectedItem,
    }
}


export default connect(mapStateToProps, null)(BrandEdit);