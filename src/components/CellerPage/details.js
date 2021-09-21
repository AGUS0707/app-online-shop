import React, {useState} from 'react';
import {connect} from "react-redux";
function Details(props) {

    const [idObject, setIdObject]=useState([]);
    const [valuesFilterList, setValuesFilterList]=useState([]);
    function detailsTanlash(e) {
        let newArray=[];
        props.valuesListReducer.valuesList.forEach((item)=>{
            if (item.detail_id==e.target.value){
                newArray=newArray.concat(item);
            }
        });
        setValuesFilterList(newArray);
    }
    function handleInputChangeValue(e) {
        if (e.target.checked===true){
            setIdObject((prev)=>prev.concat(e.target.name));
            props.updateValuesList(e.target.name);
        }
        if (e.target.checked===false){
           let newArray=[];
           let idArray=[];
           newArray=props.valueChangeListReducer.valueList.filter((item)=>{
               if (e.target.name!==item){
                   return item
               }
           });
            props.deleteValueList(newArray);
            idArray=idObject.filter((item)=>{
                if (e.target.name!==item)
                    return item
            });
            setIdObject(idArray);
        }
    }
    function handleInputChangeDetails(e) {
        detailsTanlash(e);
        if (e.target.value!==""){
            let newArray=[];
            newArray=props.detailsListReducer.detailsList.filter((item) => {
                if (item.id!==e.target.value){
                    return item
                }
            });
            props.detailsUpdateList(newArray);
            props.updateDetailsList(e.target.value);
        }
    }
    function deleteDetails(id) {
        let newArray=[];
        let newValueList=[];
        newArray=props.detailsHtmlListReducer.detailsHtmlList.map((item, index)=>{
            if (index!==id)
                return item;
        });
        newValueList=props.valueChangeListReducer.valueList.map((item)=>{
            idObject.forEach((item2)=>{
                if (item!==item2){
                 return item
                }
            })
        });
        props.deleteValueList(newValueList);
        props.updateDetailsHtmlList(newArray)
    }
    return (
        <>
            <div className="row">
                <div className="col-5">
                    <select className="form-control"  onChange={handleInputChangeDetails} >
                        <option value="">Choose</option>
                        {props.detailsListReducer.detailsList.map((item)=>{
                            return <option value={item.id}>{item.detail_uz}</option>
                        })}
                    </select>
                </div>
                <div className="col-5 d-flex align-items-center">
                    <div className="input-group d-flex align-items-center">
                        {valuesFilterList.map((item)=>{
                            return <>
                                <label htmlFor=""  className="mb-0">{item.value_uz}
                                </label>
                                <input type="checkbox" name={item.id} onClick={handleInputChangeValue} className="form-check-inline"/>
                            </>
                        })}
                    </div>
                </div>
                <div className="col-2">
                    <button onClick={()=>deleteDetails(props.count)} >
                    <span className="minusImgg">
                    </span>
                    </button>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        updateDetailsHtmlList:function (array) {
            dispatch({
                type:"DETAILS_UPDATE_HTML_LIST",
                payload:array
            })
        },
        updateDetailsList:function (detailsId) {
            dispatch({
                type: "DETAILS_CHANGE_LIST",
                payload: detailsId
            })
        },
        updateValuesList:function (valueId) {
            dispatch({
                type: "VALUE_CHANGE_LIST",
                payload: valueId
            })
        },
        deleteValueList:function (valueList) {
            dispatch({
                type: "VALUE_DELETE_LIST",
                payload:valueList
            })
        },
        detailsUpdateList:function (update_list) {
            dispatch({
                type:"DETAILS_UPDATE_LISTT",
                payload:update_list
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)  (Details);