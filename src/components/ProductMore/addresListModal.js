import React from 'react';
import "../../styles/addressListModal.scss";

function AddressListModal(props) {
    function switchAddress(id) {
        props.setModalList(false);
        props.addressList.forEach((item)=>{
            if (id===item.id)
                props.setDefaultAddress(item);
        })
    }
    return (
        <div className={`modalAddressList ${props.modalList? "modalAddressListBlock": ""}`}>
            <div className="modalContent">
                <div className="addressListCard">
                    <div className="cancelImg" onClick={()=>props.setModalList(false)}>
                        <img src="/images/cancel.svg" alt="no image"/>
                    </div>
                    <h3>Boshqa manzilni tanlang</h3>
                    <div className="addressList">
                        {props.addressList.map((item)=>{
                            return <div className="addressListItem" key={item.id}>
                                <div className="row">
                                    <div className="col-8">
                                        <div className="name">{item.name}, {item.phone}</div>
                                        <div className="village">{item.street}</div>
                                        <div className="region">{item.region_uz}, {item.district_uz}, {item.index}</div>
                                    </div>
                                    <div className="col-4">
                                        <button onClick={()=>switchAddress(item.id)}>Bu manzildan foydalaning</button>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressListModal;