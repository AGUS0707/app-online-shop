import React from 'react';
import Brand from "./Brand";

import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {API_PATH} from "../../../../tools/constants";
import {toast} from "react-toastify";

const BrandAdd = (props) => {

    const [formData, setFormData ]=React.useState()
    const [photo, setPhoto ]=React.useState("")
    const [object, setObject]=React.useState({
            file: "",
            brand_name: "",
            is_active: ""
        })

    const changeInput = (e) => {
        if (e.target.name==="file"){
            setFormData(e.target.files[0]);
            setPhoto(URL.createObjectURL(e.target.files[0]))

        }else{
            setObject({
                ...object,
                [e.target.name]:e.target.value,
            })
        }
    };

    function addButton(event, errors, values, history) {
        console.log(history)

        if (object.brand_name.length > 0 && object.is_active.length !== undefined){
            const data= new FormData();
            data.append('file', formData);
            data.append('brand_name',object.brand_name)
            data.append('is_active',object.is_active)

            axios.post(API_PATH + "crbrand", data)
                .then((res) => {
                    toast.success("Qo'shildi")
                    history.push("/admin/product/brand")
                })
                .catch(()=> {
                    toast.error("tizim ishlamay qoldi")
                    history.push("/admin/product/brand")
                })
        }
    }

    return (
        <Brand history={props.history}>
            <AvForm>

                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="d-flex align-items-center justify-content-between brand">
                            <div>Brand</div>
                            <div className="categoryadd"><button type="submit" onClick={(event, errors, values)=>{addButton(event, errors, values, props.history)}} className="btn btn-success d-block ml-auto"><span className="icon icon-save"></span></button></div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-10 offset-1">
                        <AvField type={"text"} label={"name"} name="brand_name" onChange={changeInput} placeholder={"Brand Name"} required/>
                        

                        {
                            photo.length > 0 ? <div className="default-rasm py-2"><img src={photo} width="100" height="100" alt=""/></div> : <div className="default-rasm py-2"><img src="/images/apple.svg" width="100" height="100" alt=""/></div>
                        }
                        
                        <AvField type={"file"} name="file" onChange={changeInput} required/>
                        <AvField type={"select"} onChange={changeInput} name="is_active">
                            <option>Change</option>
                            <option value="1">Active</option>
                            <option value="0">NoActive</option>
                        </AvField>
                    </div>
                </div>

            </AvForm>
        </Brand>
    );
};

export default BrandAdd;