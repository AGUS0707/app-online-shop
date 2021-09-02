import React, {useEffect, useState} from 'react';
// es modules
import { Editor } from '@tinymce/tinymce-react';
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {connect} from "react-redux";

function ProductFormEdit(props) {

    let product=props.productReducerSeller.productObject;
    let { Editor } = require('@tinymce/tinymce-react');
    const [count, setCount] = useState(1);
    const [imgList, setImgList]=useState([]);
    const [imgCheck, setImgCheck]=useState(false);
    const [categoryList, setCategoryList]=useState([]);
    const [brandList, setBrandList]=useState([]);
    const [saleCheck, setSaleCheck]=useState(false);
    const [product_uzCheck, setProduct_uzCheck]=useState(false); // bularni barchasi validatsiya uchun
    const [product_ruCheck, setProduct_ruCheck]=useState(false);
    const [priceCheck, setPriceCheck]=useState(false);
    const [sale_priceCheck, setSale_priceCheck]=useState(false);
    const [xarakteristikaCheck, setXarakteristikaCheck]=useState(false);
    const [amountCheck, setAmountCheck]=useState(false);
    const [min_orderCheck, setMin_orderCheck]=useState(false);
    const [serial_numberCheck, setSerial_numberCheck]=useState(false);
    const [description_uzCheck, setDescription_uzCheck]=useState(false);
    const [description_ruCheck, setDescription_ruCheck]=useState(false);
    const [category_idCheck, setCategory_idCheck]=useState(false);
    const [brand_idCheck, setBrand_idCheck]=useState(false);
    const [is_saleCheck, setIs_saleCheck]=useState(false);
    const [is_activeCheck, setIs_activeCheck]=useState(false);
    const [photosCheck, setPhotosCheck]=useState(false);
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select1id, setSelect1id] = useState("");
    const [select2id, setSelect2id] = useState("");
    useEffect(()=>{
        axios.get(API_PATH+'categorys').then((response)=>{
            setCategoryList(response.data);
        });
        axios.get(API_PATH+'brand').then((response)=>{
            setBrandList(response.data)
        })
    }, []);

    const change=(e)=> {
        setSelect1(true);
        setSelect1id(e.target.value)
    };
    const handleInputChange=(e)=> {
        if (e.target.name==="is_sale"){    // chegirmalar oynasi chiqishini tekshirdim
            if (e.target.value==="1"){
                setSaleCheck(true);
            }else{
                setSaleCheck(false);
            }
        }
        if (imgList.length<6){    // rasmni 6 ta dan kop yubormaslikka tekshirdim
            if (e.target.name==="file"){
                let img=imgList.concat(e.target.files[0]);
                setImgList(img);
                setImgCheck(true);
            }else{
                let newProduct={
                    ...product,
                    [e.target.name]:e.target.value,
                };
                props.changeProduct(newProduct);
            }
        }else{
            if (e.target.name==="file")
                toast.error("Boldi brat qoshormang")
        }
    };
    const [deleteButton, setDeleteButton ]=useState(false);
    function deleteImg(id) {
        let newArray;
        newArray=imgList.filter((item, index)=>{
            if (id!==index)
                return item
        });
        setImgList(newArray);
    }
    function clickButton(e) {
        console.log(e.currentTarget.childNodes[0]);
        imgList.forEach((item, index)=>{
            if (e.currentTarget.id==index){
                if (e.currentTarget.childNodes[0].className.includes("blockButton")){
                    e.currentTarget.childNodes[0].classList.remove("blockButton")
                }else {
                    e.currentTarget.childNodes[0].classList.add("blockButton")
                }
            }
        })

    }
    const imgListFunction=()=> {
        if (imgCheck){
            return <>
                {imgList.map((item, index)=>{
                    return <div id={index}  onClick={clickButton} className="productImgListItem">
                        <div id={index}   className={" positionAbsolute"}>
                            <div  className="positionRelative" onClick={()=>deleteImg(index)}>
                                <i className="fas fa-trash-alt"></i>
                                <div className="before"></div>
                            </div>
                        </div>
                        <img  src={`${URL.createObjectURL(item)}`} alt="no image"/>
                    </div>
                })}
            </>
        }else {
            return <div className="productImgListItem">
                <img src="/images/page.webp" alt="no images"/>
            </div>
        }
    };
    const addProduct=()=> {
        // product_uz niki, min_order, serial_numbuer 1
        // bulerni barchasi validatsiyani ishga tushirish uchun
        if (product.product_uz.length<1){
            setProduct_uzCheck(true);
        }
        if (props.productReducerSeller.productObject.product_ru.length<1)
            setProduct_ruCheck(true);
        if (props.productReducerSeller.productObject.price.length<1)
            setPriceCheck(true);
        if (props.productReducerSeller.productObject.amount<1)
            setAmountCheck(true);
        if (props.productReducerSeller.productObject.min_order<1)
            setMin_orderCheck(true);


        if (product.description_uz.length<1)
            setDescription_uzCheck(true);
        if (product.description_ru.length<1)
            setDescription_ruCheck(true);


        if (product.serial_number<1)
            setSerial_numberCheck(true);
        if (product.sale_price<1)
            setSale_priceCheck(true);
        if (product.xarakteristika.length<1)
            setXarakteristikaCheck(true);
        if (product.category_id.length<1)
            setCategory_idCheck(true);
        if (product.brand_id.length<1)
            setBrand_idCheck(true);
        if (product.is_sale.length<1)
            setIs_saleCheck(true);
        if (imgList.length<1)
            setPhotosCheck(true);




        // bularni barchasi validatsiyani yoqotish uchun
        if (product.product_uz.length>0){
            setProduct_uzCheck(false);
        }
        if (product.product_ru.length>0)
            setProduct_ruCheck(false);
        if (product.price.length>0)
            setPriceCheck(false);
        if (product.amount>0)
            setAmountCheck(false);
        if (product.min_order>0)
            setMin_orderCheck(false);

        if (product.description_uz.length>0)
            setDescription_uzCheck(false);
        if (product.description_ru.length>0)
            setDescription_ruCheck(false);


        if (product.serial_number>0)
            setSerial_numberCheck(false);
        if (product.sale_price>0)
            setSale_priceCheck(false);
        if (product.xarakteristika.length>0)
            setXarakteristikaCheck(false);
        if (product.category_id.length>0)
            setCategory_idCheck(false);
        if (product.brand_id.length>0)
            setBrand_idCheck(false);
        if (product.is_sale.length>0)
            setIs_saleCheck(false);
        if (imgList.length>0)
            setPhotosCheck(false);

        if (imgList.length>0&&product.product_uz.length>0&&product.product_ru.length>0&&product.price.length>0&&product.amount.length>0&&product.min_order.length>0&&product.description_uz.length>0&&product.description_ru.length>0&&product.category_id.length>0&&product.brand_id.length>0&&product.is_sale.length>0&&product.sale_price.length>0&&product.serial_number.length>0&&product.xarakteristika.length>0&&imgList.length>0){
            const formDate=new FormData();
            formDate.append('id', product.id);
            formDate.append('product_uz', product.product_uz);
            formDate.append('product_ru', product.product_ru);
            formDate.append('price', product.price);
            formDate.append('amount', product.amount);
            formDate.append('min_order', product.min_order);
            formDate.append('description_uz', product.description_uz);
            formDate.append('description_ru', product.description_ru);
            formDate.append('category_id', product.category_id);
            formDate.append('brand_id', product.brand_id);
            formDate.append('is_sale', product.is_sale);
            formDate.append('sale_price', product.sale_price);
            formDate.append('serial_number', product.serial_number);
            formDate.append('xarakteristika', product.xarakteristika);
            let a=[];
            imgList.forEach((item, index)=>{
                formDate.append(`file${+index}`, item);
            });
            axios.post(API_PATH+'upproduct', formDate)
                .then((response)=>{
                    console.log(response);
                    toast.success("Muvofiqiyatli qoshildi")
                })

        }else{
            toast.error("Malumotlarni toliq kiritishingiz shart")
        }
    };
    const editorChangeUz=(e)=>{
        let newObject={
            ...product,
            description_uz:e
        };
        props.changeProduct(newObject)
    };
    const editorChangeRu=(e)=>{
        let newObject={
            ...product,
            description_ru:e
        };
        props.changeProduct(newObject)
    };
    function menusContent() {
        switch (count) {
            case 1 :
                return <div className={`menu1 `}>
                    <div className={`form-group ${product_uzCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Mahsulot nomi_uz</div>
                            </div>
                            <div className="col-sm-10">
                                <input defaultValue={product.product_uz} type="text" className="form-control" name="product_uz" placeholder="Mahsulot nomi_uz" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${product_ruCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Mahsulot nomi_ru</div>
                            </div>
                            <div className="col-sm-10">
                                <input defaultValue={product.product_ru} type="text" className="form-control" name="product_ru" placeholder="Mahsulot nomi_ru" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${description_uzCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Description_uz</div>
                            </div>
                            <div className="col-sm-10">
                                <Editor
                                    id="uz"
                                    onEditorChange={editorChangeUz}
                                    tagName="textarea"
                                    initialValue={product.description_uz}
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${description_ruCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Description_ru</div>
                            </div>
                            <div className="col-sm-10">
                                <Editor
                                    initialValue={product.description_ru}
                                    id="ru"
                                    onEditorChange={editorChangeRu}
                                    tagName="textarea"
                                />
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${priceCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Narxi</div>
                            </div>
                            <div className="col-sm-10">
                                <input defaultValue={product.price} type="number" name="price" className="form-control" placeholder="Narxi" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${amountCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Miqdor</div>
                            </div>
                            <div className="col-sm-10">
                                <input defaultValue={product.amount} type="number" className="form-control" name="amount" placeholder="Miqdor" onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${min_orderCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Minimal miqdor</div>
                            </div>
                            <div className="col-sm-10">
                                <input defaultValue={product.min_order} type="number" className="form-control" onChange={handleInputChange} name="min_order" placeholder="minimal miqdor"/>
                            </div>
                        </div>
                    </div>
                </div>
                break;
            case 2 :
                return <div className={`menu2 `}>
                    <div className={`productImgList ${photosCheck? "photoValid": ""}`}>
                        <div className="productImgListHeader">
                            <h3>Mahsulotlar rasmlari</h3>
                        </div>
                        <div className="productImgListMain d-flex">
                            {imgListFunction()}
                        </div>
                        <div className={`form-group `}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-xl-end">
                                    <div>Rasm yuklash</div>
                                </div>
                                <div className="col-sm-10">
                                    <input type="file" name="file" onChange={handleInputChange} className="form-control"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                break;
            case 3 :
                return <div className={`menu3 `}>
                    <div className={`form-group ${category_idCheck? "menusValid": " "}`}>
                        <div className="row">

                            <div className="col-sm-2 d-flex align-items-center justify-content-end mb-2">
                                <div><span>*</span>Head Category_uz</div>
                            </div>
                            <div className="col-sm-10 mb-2">
                                <select  className="form-control"   onChange={change}>
                                    <option>Choose</option>
                                    {categoryList.map((item)=>{
                                        return item.category_id     == 0 ? <option value={item.id}>{item.category_uz}</option> : ""
                                    })}
                                </select>
                            </div>
                            {
                                select1 ? <div className="col-sm-2 d-flex align-items-center justify-content-end mb-2">
                                    <div><span>*</span>Sub Category_uz</div>
                                </div> : ""
                            }
                            {
                                select1 ? <div className="col-sm-10 mb-2">
                                    <select  className="form-control" onChange={(e)=>{
                                        setSelect2(true);
                                        setSelect2id(e.target.value)
                                    }}>
                                        <option>Choose</option>
                                        {categoryList.map((item)=>{
                                            return item.category_id == select1id ? <option value={item.id}>{item.category_uz}</option> : ""
                                        })}
                                    </select>
                                </div> : ""
                            }
                            {
                                select2 ? <div className="col-sm-2 d-flex align-items-center justify-content-end mb-2">
                                    <div><span>*</span>Sub sub Category_uz</div>
                                </div> : ""
                            }
                            {
                                select2 ? <div className="col-sm-10 mb-2">
                                    <select  className="form-control" defaultValue={product.category_id}  name="category_id" onChange={handleInputChange}>
                                        <option value="">Choose</option>
                                        {categoryList.map((item)=>{
                                            return item.category_id == select2id ? <option value={item.id}>{item.category_uz}</option> : ""
                                        })}
                                    </select>
                                </div> : ""
                            }
                        </div>
                    </div>
                    <hr/>
                    <div className={`form-group ${brand_idCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Brand</div>
                            </div>
                            <div className="col-sm-10">
                                <select  className="form-control" defaultValue={product.brand_id} name="brand_id" onChange={handleInputChange}>
                                    <option value="">Choose</option>
                                    {brandList.map((item)=>{
                                        return <option value={item.id}>{item.brand_name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
                break;
            case 4 :
                return <div className={`menu4`}>
                    <div className={`form-group ${is_saleCheck? "menusValid": " "}`}>
                        <div className="row">
                            <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                <div><span>*</span>Chegirma qoshaszmi</div>
                            </div>
                            <div className="col-sm-10">
                                <select  className="form-control" name="is_sale" defaultValue={product.is_sale} onChange={handleInputChange}>
                                    <option value="">Choose</option>
                                    <option value="0" >yoq</option>
                                    <option value="1">ha </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className={`${saleCheck? "": "saleGroupNone"}`}>
                        <div className={`form-group ${sale_priceCheck? "menusValid": " "}`}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <div><span>*</span>Chegirma narxi</div>
                                </div>
                                <div className="col-sm-10">
                                    <input type="number" defaultValue={product.sale_price} onChange={handleInputChange} name="sale_price" className="form-control" placeholder="chegirma narxi"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={`form-group ${xarakteristikaCheck? "menusValid": " "}`}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <div><span>*</span>Harakteristika</div>
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={product.xarakteristika} onChange={handleInputChange} name="xarakteristika" className="form-control" placeholder="xarakteristikasi"/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className={`form-group ${serial_numberCheck? "menusValid": " "}`}>
                            <div className="row">
                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                    <div><span>*</span>Serial number</div>
                                </div>
                                <div className="col-sm-10">
                                    <input type="text" defaultValue={product.serial_number} onChange={handleInputChange} name="serial_number" className="form-control" placeholder="serial number" required={true}/>
                                </div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
                break
            default :
                return <div>

                </div>
                break
        }
    }
    return (
        <div className="product">
            <div className="productHeader d-flex justify-content-between">
                <div className="productHeaderLeft d-flex align-items-center">
                    <h2>Tovarlar</h2>
                    <div className="homeIcon">
                        <img src="/images/home.svg" alt="no image"/>
                    </div>
                    <div className="nextIcon">
                        <img src="/images/next.svg" alt="no image"/>
                    </div>
                    <Link to="/">tovarlar</Link>
                </div>
                <div className="productHeaderRight d-flex justify-content-end">
                    <div className="productHeaderRightContent d-flex ">
                        <button onClick={addProduct}  className="saveImg">
                            <span className="img"></span>
                        </button>
                        <Link to="/seller/products" className="previosImg">
                            <span className="img"></span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="productMain">
                <div className="productForm">
                    <div className="productFormHeader d-flex align-items-center">
                        <img src="/images/pen.svg" alt="no images"/>
                        <h3>Qoshish </h3>
                    </div>
                    <div className="productFormMain">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <a  className={`nav-link ${count===1? "active": ""}`} data-toggle="tab" onClick={()=>setCount(1)} >Asosiy</a>
                            </li>
                            <li className="nav-item">
                                <a  className={`nav-link ${count===2? "active": ""}`} data-toggle="tab" onClick={()=>setCount(2)} >Rasmlar</a>
                            </li>
                            <li className="nav-item">
                                <a  className={`nav-link ${count===3? "active": ""}`} data-toggle="tab" onClick={()=>setCount(3)} >Category</a>
                            </li>
                            <li className="nav-item">
                                <a  className={`nav-link ${count===4? "active": ""}`} data-toggle="tab" onClick={()=>setCount(4)} >Brand</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            {menusContent()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        changeProduct:function (product) {
            dispatch({
                type: "UP_PRODUCT",
                payload:product
            })
        }
    }
}
function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductFormEdit);