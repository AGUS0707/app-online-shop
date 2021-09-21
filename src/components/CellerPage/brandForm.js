import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {toast} from "react-toastify";
import {connect} from "react-redux";
import Cookies from "js-cookie";

function BrandForm(props) {
    const [brand, setBrand]=useState({
        brand_name:"", is_active:""
    });

    const [brandImg, setBranchImg]=useState('/images/page.webp');
    const [brandNameCheck, setBrandNameCheck]=useState(false);
    const [activeCheck, setActiveCheck]=useState(false);
    const [imgCheck, setImgCheck]=useState(false);
    function handleInputChange (e ) {
        if (e.target.name==="brand_name"&&e.target.value.length>0){
            setBrandNameCheck(false);
        }
        if (e.target.name==="is_active"&&e.target.value.length>0) {
            setActiveCheck(false);
        }



        if (e.target.name === "file"){
            if (e.target.files[0]!==undefined){
                let newBrand;
                let imgUrl;
                imgUrl=URL.createObjectURL(e.target.files[0]);
                setBranchImg(imgUrl);
                newBrand={
                    ...brand,
                    [e.target.name]:e.target.files[0]
                };
                setBrand(newBrand);
                setImgCheck(false);
            }
        }else if (e.target.name !== "file") {
            let newBrand={
                ...brand,
                [e.target.name]:e.target.value
            };
           setBrand(newBrand);
        }
    }
    const addBrand=()=> {
        const formData= new FormData();
        formData.append('brand_name', brand.brand_name);
        formData.append('is_active', brand.is_active);
        formData.append('file', brand.file);
        if (brand.brand_name.length<=0){
            setBrandNameCheck(true);
        }
        if (brand.is_active.length<=0)
            setActiveCheck(true);
        if (brand.file===undefined)
            setImgCheck(true);
        if (brand.brand_name.length>0&&brand.is_active.length>0&&brand.file!==undefined){
            axios.post(API_PATH+'crbrand', formData, {headers:{"Authorization": "Bearer " + Cookies.get('jwt')}}).then((response)=>{
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
                        <button type="submit" onClick={addBrand} className="saveImg">
                            <span className="img"></span>
                        </button>
                        <Link to="/seller/brand" className="previosImg">
                            <span className="img"></span>
                        </Link>
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
                        <div className={`form-group ${brandNameCheck? "validBrand": " "}`}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Brand nomi
                                </div>
                                <div className="col-sm-10">
                                    <input  type="text"  placeholder="Brand nomi" onChange={handleInputChange} name="brand_name"  className="form-control"  />
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={`form-group ${activeCheck? "validBrand": " "}`}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <span>*</span> Is_active
                                </div>
                                <div className="col-sm-10">
                                    <select  name="is_active"    className="form-control" onChange={handleInputChange}  >
                                        <option value="">choose</option>
                                        <option value="1">Activ</option>
                                        <option value="0">Activ emas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={`brandImgDiv ${imgCheck? "validBrand": ""}`}>
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
                                    <input  onChange={handleInputChange} type="file" className="form-control" name="file"   />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps) (BrandForm);