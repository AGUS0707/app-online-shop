import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";

function BrandForm(props) {
    const [brand, setBrand]=useState({
        brand_name:"",
        is_active:""
    });
    const brandNameRef=useRef(null);
    const activeRef=useRef(null);
    const fileRef=useRef(null);
    const [brandImg, setBranchImg]=useState('/images/page.webp')
    function handleInputChange(e) {
        if (e.target.name==="file"){
            let newUrl=URL.createObjectURL(e.target.files[0]);
            setBranchImg(newUrl);
            let newBrand={
                ...brand,
                [e.target.name]:e.target.files[0]
            };
            setBrand(newBrand);
        }else {
            let newBrand={
                ...brand,
                [e.target.name]:e.target.value
            };
            setBrand(newBrand);
        }
    }
    function addBrand() {
        const formData= new FormData();
        formData.append('brand_name', brand.brand_name);
        formData.append('is_active', brand.is_active);
        formData.append('file', brand.file);
        if (brand.brand_name.length>0&&brand.is_active!==""&&brand.file!==undefined){
            axios.post(API_PATH+'crbrand', formData).then((response)=>{
                toast.success("Brand muvofiqiyatli qoshildi")
            })
        }else {
            toast.error("Malumotlar toliq kiritilmagan")
        }
    }
    return (
        <div className="brand">
            <div className="brandHeader d-flex justify-content-between">
                <div className="brandHeaderLeft d-flex align-items-center">
                    <h2>Brandlar</h2>
                    <div className="homeIcon">
                        <img src="/images/home.svg" alt="no image"/>
                    </div>
                    <div className="nextIcon">
                        <img src="/images/next.svg" alt="no image"/>
                    </div>
                    <Link to="/">Brandlar</Link>
                </div>
                <div className="brandHeaderRight d-flex justify-content-end">
                    <div className="brandHeaderRightContent d-flex ">
                        <button type="submit" onClick={addBrand}>
                            <span className="img"></span>
                        </button>
                        <button>
                            <span className="img"></span>
                        </button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="brandMain">
                <div className="brandForm">
                    <div className="brandFormHeader d-flex">
                        <img src="/images/pen.svg" alt="no image"/>
                        <h3>Qoshish</h3>
                    </div>
                    <div className="brandFormMain">
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Brand nomi
                                </div>
                                <div className="col-sm-10">
                                    <input ref={brandNameRef} type="text" defaultValue={props.filterBrandObject.brand_name} placeholder="Brand nomi" onChange={handleInputChange} name="brand_name"  className="form-control"  />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Is_active
                                </div>
                                <div className="col-sm-10">
                                    <select ref={activeRef} name="is_active" defaultValue={props.filterBrandObject.is_active}  className="form-control" onChange={handleInputChange}  >
                                        <option value="1">Activ</option>
                                        <option value="0">Activ emas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="brandImgDiv">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    Brand rasmi
                                </div>
                                <div className="col-sm-10">
                                    <div className="brandImg">
                                        <img src={brandImg} alt="no image"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Brand rasmini yuklash
                                </div>
                                <div className="col-sm-10">
                                    <input ref={fileRef} onChange={handleInputChange} type="file" className="form-control" name="file"   />
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandForm;