import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AdminLayout from "../AdminLayout";

import {Modal, ModalBody, ModalHeader} from "reactstrap";

import {set_state, deleteCategory, getCategory} from "../../../redux/actions/categoryAction";

import {Link} from "react-router-dom";


const Category = (props) => {

    useEffect(() => {
        if (props.history.location.pathname === "/admin/category"){
            props.getCategory()
        }
    }, [])

    return (
        <AdminLayout history={props.history}>
           <div className="category">

               <div className="row">
                   <div className="col-10 offset-1">
                       <div className="d-flex align-items-center buyurtmalar">
                           <h3>Category</h3>
                           <div className="d-flex align-items-center ml-5">
                               <Link to="/admin/profile"><span className="icon icon-home"></span></Link>
                               <span className="icon icon-right mx-1"></span>
                               <Link className="text-decoration-none" to="/admin/category">Category</Link>
                               {
                                   props.history.location.pathname === "/admin/category/add" ?  <span className="icon icon-right mx-1"></span> : ""
                               }
                               {
                                   props.history.location.pathname === "/admin/category/add" ?  <Link className="text-decoration-none text-primary" to="/admin/category/add">category add</Link> : ""
                               }
                               {
                                   props.history.location.pathname === "/admin/category/edit" ?  <span className="icon icon-right mx-1"></span> : ""
                               }
                               {
                                   props.history.location.pathname === "/admin/category/edit" ?  <Link className="text-decoration-none text-primary" to="/admin/category/edit">category edit</Link> : ""
                               }
                           </div>
                       </div>
                   </div>
               </div>

               {
                   props.history.location.pathname === "/admin/category" ? <div className="row">
                       <div className="col-10 offset-1">
                           <div className="d-flex align-items-center justify-content-between brand">
                               <div>Category</div>
                               <div className="d-flex align-items-center buttn">
                                   <Link to="/admin/category/add"> <button type="button" className={`btn btn-success`}><span className="icon icon-plus"></span></button></Link>
                                   {/*<button type="button" className={`btn btn-success mx-2`}><span className="icon icon-refresh"></span></button>*/}

                               </div>
                           </div>
                       </div>
                   </div> : ""
               }

               {
                   props.history.location.pathname === "/admin/category" ? <div className={`categorylist`}>
                       <div className="row">
                           <div className="col-10 offset-1">
                               <table className="table table-striped table-hover mt-5">
                                   <thead>
                                   <tr>
                                       <th>№</th>
                                       <th>id</th>
                                       <th>category-uz</th>
                                       <th>category-ru</th>
                                       <th>category-id</th>
                                       <th>index</th>
                                       <th>action</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                   {
                                       props.category.map((item, index) => {
                                           return  <tr>
                                               <td>{index+1}</td>
                                               <td>{item.id}</td>
                                               <td>{item.category_uz}</td>
                                               <td>{item.category_ru}</td>
                                               <td>{item.category_id}</td>
                                               <td>{item.index}</td>
                                               <td className="d-flex align-items-center border-0">
                                                  <Link to="/admin/category/edit"> <button className="btn btn-info" onClick={()=>props.set_state({selectedItem: item})}><span className="icon icon-edit"></span></button></Link>
                                                   <button className="btn btn-danger ml-2" onClick={() => props.set_state({open3: true, selectedIndex: item.id})}><span className="icon icon-delete"></span></button>
                                               </td>
                                           </tr>
                                       })
                                   }
                                   </tbody>
                               </table>
                           </div>
                       </div>
                   </div> : ""
               }

               <Modal isOpen={props.open3} toggle={() => props.set_state({open3: false})}>
                   <ModalHeader>
                       <h3>Rostdan ham o'chirmoqimisiz ?</h3>
                   </ModalHeader>
                   <ModalBody className="d-flex justify-content-between">
                       <button type="button" className="btn btn-danger" onClick={props.deleteCategory}>Ha</button>
                       <button type="button" className="btn btn-light"
                               onClick={() => props.set_state({open3: false})}>Yo'q
                       </button>
                   </ModalBody>
               </Modal>



               {props.children}



           </div>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open3: state.category.open3,
        selectedIndex: state.category.selectedIndex,
        selectedItem: state.category.selectedItem,
        category: state.category.category
    }
};

export default connect(mapStateToProps, {set_state, deleteCategory, getCategory})(Category) ;




