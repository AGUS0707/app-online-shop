import React, {useEffect, useState} from 'react';
import AdminLayout from "../AdminLayout";

import img1 from "../../../images/product.png"


import {connect} from "react-redux";
import {set_state1, getBrand} from "../../../redux/actions/productAction";
import {getCategory, getUsers} from "../../../redux/actions/categoryAction";

import {AvForm, AvField} from "availity-reactstrap-validation"
import axios from "axios";
import {API_PATH} from "../../../tools/constants";
import {toast} from "react-toastify";






const Products = (props) => {

    useEffect(()=>{
        props.getCategory()
        props.getBrand()
        props.getUsers()
    },[])

    const [open, setOpen] = useState(false)

    const [count, setCount] = useState("")

    const [count1, setCount1] = useState("")

    const [del, setDel] = useState("")

    // const [array, setArray] = useState([])

    const [formData, setFormData] = useState([])

    const [a, seta] = useState([])

    const [none, setNone] = useState(false)


    const [object, setObject]=React.useState({})

    const changeInput = (e) => {
        if (e.target.name==="photo_list"){
            // console.log(e.target.files[0])

            let newFormData= formData.concat(e.target.files[0]);
            setFormData(newFormData);


            if (a.length < 5) {
                let newa= a.concat(URL.createObjectURL(e.target.files[0]));
                seta(newa);
            } else {
                toast.error("Boshqa qo'shib bo'lmaydi")
                let newa= a.concat(URL.createObjectURL(e.target.files[0]));
                seta(newa);
                setNone(true)
            }



            // seta(a.push(URL.createObjectURL(e.target.files[0])))

            // seta(a=>a.concat((URL.createObjectURL(e.target.files[0]))))
            setCount(1)




        }else
            {
            setObject({
                ...object,
                [e.target.name]:e.target.value,
            })
        }
    };

    // console.log(a)
    console.log(formData)
    function addButton() {
        const data= new FormData();
        {
            formData.map((item, index)=>{
                return data.append("file" + index, item);
            })
        }
        data.append('id', object.id);
        data.append('product_uz', object.product_uz);
        data.append('product_ru', object.product_ru);
        data.append('description_uz',object.description_uz)
        data.append('description_ru',object.description_ru)
        data.append('price',object.price)
        data.append('category_id',object.category_id)
        data.append('brand_id',object.brand_id)
        data.append('is_sale',object.is_sale)
        data.append('amount',object.amount)
        data.append('min_order',object.min_order)
        data.append('serial_number',object.serial_number)
        data.append('sale_price',object.sale_price)
        data.append('xarakteristika',object.xarakteristika)

        axios.post(API_PATH + "crproduct", data)
            .then((res) => {
                toast.success("saqlandi")
                console.log(res)
            })
            .catch(()=> {
                toast.error("Xatoku brat")
            })

    }


    return (
        <AdminLayout history={props.history}>

            <div className="container admin-products">
                <div className="d-flex align-items-center justify-content-between brand">
                    <div>Products</div>
                    <div className="d-flex align-items-center buttn">
                        <button type="button" className={`btn btn-success`} onClick={()=>{setOpen(true)}}><span className="icon icon-plus"></span></button>
                    </div>
                </div>

                {
                   open ? <div className="mt-5">

                       {/*<div className="d-flex align-items-center">*/}
                       {/*    <div className={`menu ${count === 1  ? "borderone" : ""}`} onClick={() => {*/}
                       {/*        setCount(1)*/}
                       {/*    }}>*/}
                       {/*        <h3>Asosiy</h3>*/}
                       {/*    </div>*/}
                       {/*    <div className={`menu ${count === 2  ? "borderone" : ""}`} onClick={() => {*/}
                       {/*        setCount(2)*/}
                       {/*    }}>*/}
                       {/*        <h3>Ma'lumotlar</h3>*/}
                       {/*    </div>*/}
                       {/*    <div className={`menu ${count === 3  ? "borderone" : ""}`} onClick={() => {*/}
                       {/*        setCount(3)*/}
                       {/*    }}>*/}
                       {/*        <h3>Aksiya</h3>*/}
                       {/*    </div>*/}
                       {/*    <div className={`menu ${count === 4  ? "borderone" : ""}`} onClick={() => {*/}
                       {/*        setCount(4)*/}
                       {/*    }}>*/}
                       {/*        <h3>Rasmlar</h3>*/}
                       {/*    </div>*/}
                       {/*</div>*/}
                       <AvForm onSubmit={addButton}>


                           <AvField type="select" onChange={changeInput} name="id" placeholder="Users" label="user">
                               <option>Choose</option>
                               {
                                   props.role.map((item)=>{
                                       return <option value={item.id}>{item.email}</option>
                                   })
                               }
                           </AvField>
                           <AvField type="text" onChange={changeInput} name="product_uz" placeholder="Product_uz" label="Product_uz"/>
                           <AvField type="text" onChange={changeInput} name="product_ru" placeholder="Product_ru" label="Product_ru"/>
                           <AvField type="textarea" onChange={changeInput} rows="8" cols="100" name="description_uz" placeholder="Description_uz" label="Description_uz"/>
                           <AvField type="textarea" onChange={changeInput} rows="8" cols="100" name="description_ru" placeholder="Description_ru" label="Description_ru"/>

                           <AvField type="text" onChange={changeInput} name="price" placeholder="Price" label="Price"/>

                           <AvField type="select" onChange={changeInput} name="category_id" placeholder="Category" label="Category">

                               <option>Choose</option>
                               {
                                   props.category.map((item)=> {
                                       return <option value={item.id}>{item.category_uz}</option>
                                   })
                               }

                           </AvField>
                           <AvField type="select" onChange={changeInput} name="brand_id" placeholder="Brand" label="Brand">

                               <option>Choose</option>
                               {
                                   props.data.map((item)=> {
                                       return <option value={item.id}>{item.brand_name}</option>
                                   })
                               }


                           </AvField>
                           <AvField type="select" onChange={changeInput} label="is-active"  name="is_sale" style={{width: "20%"}}  onClick={(e)=> setCount1(e.target.value)}>
                               <option>Choose</option>
                               <option value="1">Active</option>
                               <option value="0">NoActive</option>
                           </AvField>

                           {count1 === "1" ? <AvField type="text" onChange={changeInput} name="sale_price" placeholder="Sale Price" label="Sale-price"/> : ""}

                           {count1 === "1" ? <AvField type="text" onChange={changeInput} name="xarakteristika" placeholder="Xarakteristika" label="Xarakteristika"/> : ""}

                          <div className="py-3">
                              <p>Mahsulot rasmi</p>
                              {
                                  count !== "1" ? <div className="d-flex">
                                      {
                                          a.map((item, index)=> {
                                              return  <div className="default-rasm">

                                                 <div className="delhover">
                                                     <div className="delete" onClick={()=> {

                                                         seta(a.slice(index, index + 1))
                                                     }
                                                     }><span className="icon icon-delete"></span></div>
                                                 </div>

                                                  <img src={item} alt=""/>
                                              </div>
                                          })
                                      }
                                  </div> : ""
                              }
                          </div>

                           <AvField type="file" className={`${none ? "d-none" : ""}`} onChange={changeInput} name="photo_list"/>

                           <AvField type="number" onChange={changeInput} name="amount" placeholder="Amount" label="Amount"/>
                           <AvField type="number" onChange={changeInput} name="min_order" placeholder="Min-order" label="Min-order"/>
                           <AvField type="number" onChange={changeInput} name="serial_number" placeholder="serial-number" label="serial-number"/>


                           <button type="submit" className={`btn btn-success ml-auto save`}><span className="icon icon-save"></span></button>

                           {/*{*/}
                           {/*    count === 1 ? <div className="bg-white p-5">*/}
                           {/*        */}
                           {/*        <AvField type="text" onChange={changeInput} name="name" placeholder="Mahsulot nomi" label="Mahsulot nomi"/>*/}
                           {/*        <AvField type="textarea" onChange={changeInput} rows="8" cols="100" name="description" placeholder="Description" label="Description"/>*/}

                           {/*    </div> : count === 2 ? <div className="bg-white p-5">*/}
                           {/*        */}
                           {/*        <AvField type="text" onChange={changeInput} name="price" placeholder="Price" label="Price"/>*/}

                           {/*        <AvField type="select" onChange={changeInput} name="category_id" placeholder="Category" label="Category">*/}

                           {/*            <option>Choose</option>*/}
                           {/*            <option>Choose</option>*/}
                           {/*            <option>Choose</option>*/}


                           {/*        </AvField>*/}
                           {/*        <AvField type="select" onChange={changeInput} name="brand_id" placeholder="Brand" label="Brand">*/}

                           {/*            <option>Choose</option>*/}
                           {/*            <option>Choose</option>*/}
                           {/*            <option>Choose</option>*/}


                           {/*        </AvField>*/}

                           {/*    </div> : count === 3 ? <div className="bg-white p-5">*/}

                           {/*        <AvField type="select" onChange={changeInput} label="is-active"  name="is_sale" style={{width: "20%"}}  onClick={(e)=> setCount1(e.target.value)}>*/}
                           {/*            <option>Choose</option>*/}
                           {/*            <option value="1">Active</option>*/}
                           {/*            <option value="0">NoActive</option>*/}
                           {/*        </AvField>*/}

                           {/*        {*/}

                           {/*            count1 === "1" ?  <AvField type="text" onChange={changeInput} name="sale_price" placeholder="Sale Price" label="Sale-price"/> : ""*/}
                           {/*        }*/}
                           {/*        {*/}

                           {/*            count1 === "1" ?  <AvField type="text" onChange={changeInput} name="xarakteristika" placeholder="Xarakteristika" label="Xarakteristika"/> : ""*/}
                           {/*        }*/}

                           {/*    </div> : count === 4 ? <div className="bg-white p-5">*/}
                           {/*        <p>Mahsulot rasmi</p>*/}
                           {/*        <div className="d-flex">*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*            <div className="default-rasm"><img src={img1} alt=""/></div>*/}
                           {/*        </div>*/}


                           {/*        <AvField type="file" onChange={changeInput} name="photo_list"/>*/}


                           {/*        <button type="submit" className={`btn btn-success ml-auto save`}><span className="icon icon-save"></span></button>*/}
                           {/*    </div> : ""*/}
                           {/*}*/}
                       </AvForm>


                   </div> : <div className="row pt-5">
                       <div className="col-9">
                           <div className="d-flex align-items-center bg-light p-3 shadow">
                               <span className="icon icon-category1 mr-2"></span>
                               <div><p>Tovarlar royhati</p></div>
                           </div>
                           <table className="table table-hover table-striped">
                               <thead>
                               <tr>
                                   <th>№</th>
                                   <th>Rasm</th>
                                   <th>Mahsulot nomi</th>
                                   <th>Model</th>
                                   <th>Narx</th>
                                   <th>Miqdor</th>
                                   <th>action</th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                   <td>1</td>
                                   <td>img</td>
                                   <td>telefon</td>
                                   <td>MI</td>
                                   <td>12000000</td>
                                   <td>10</td>
                                   <td className="d-flex align-items-center border-0"><button className="btn btn-info"><span className="icon icon-edit"></span></button>
                                       <button className="btn btn-danger ml-2"><span className="icon icon-delete"></span></button></td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                       <div className="col-3 border py-2 bg-light">
                           <div className="d-flex align-items-center shadow p-3 mb-2">
                               <span className="icon icon-filtr mr-2"></span>
                               <div><p>Filtrlash</p></div>
                           </div>

                           <AvForm>
                               <AvField type="text" name="product_uz" label="Mahsulot nomi" placeholder="Mahsulot nomi"/>
                               <AvField type="text" name="brand_id" label="Brand nomi" placeholder="Brand nomi"/>
                               <AvField type="text" name="price" label="Narx" placeholder="Narx"/>
                               <AvField type="text" name="count" label="Miqdor" placeholder="Miqdor"/>
                               <AvField type="select" name="is_active" label="Holat">
                                   <option>Choose</option>
                                   <option value="1">Active</option>
                                   <option value="0">NoActive</option>
                               </AvField>

                               <button type="submit" className="d-block ml-auto">
                                   <div className="d-flex align-items-center">
                                       <span className="icon icon-filtr mr-1"></span>
                                       <p>Filtrlash</p>
                                   </div>
                               </button>
                           </AvForm>
                       </div>
                   </div>
                }



            </div>

        </AdminLayout>
    );

};

const mapStateToProps = (state) => {

    return{
        open: state.product.open,
        formData: state.product.formData,
        a:state.product.a,
        category:state.category.category,
        data:state.product.data,
        role: state.category.role
    }

}

export default connect(mapStateToProps, {set_state1, getCategory, getBrand, getUsers})(Products)  ;