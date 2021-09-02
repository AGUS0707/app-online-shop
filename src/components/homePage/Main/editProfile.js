import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {API_PATH} from '../../../tools/constants';

function EditProfile(props) {
    const [editUser, setEditUser]=React.useState({});

    const firstNameRef=useRef(null);
    const lastNameRef=useRef(null);
    const maleGenderRef=useRef(null);
    const femaleGenderRef=useRef(null);
    const phoneRef=useRef(null);
    const dateRef=useRef(null);

    const [check, setCheck]=useState(false);


    const [firstNameValid, setFirstNameValid]=useState(false);
    const [lastNameValid, setLastNameValid]=useState(false);
    const [phoneValid, setPhoneValid]=useState(false);
    const [dateValid, setDateValid]=useState(false);
    const [genderValid, setGenderValid]=useState(true);
    function handleInputChange(e) {
        const user={
            ...editUser,
            [e.target.name]:e.target.value
        };
        setEditUser(user);
        if (firstNameRef.current.value.length>0)
            setFirstNameValid(false);
        if (lastNameRef.current.value.length>0)
            setLastNameValid(false);
        if (phoneRef.current.value.length>0)
            setPhoneValid(false);
        if (dateRef.current.value.length>0)
            setDateValid(false);
    }

    function updateUser() {
        if (firstNameRef.current.value.length<=0)
            setFirstNameValid(true);
        if (lastNameRef.current.value.length<=0)
            setLastNameValid(true);
        if (phoneRef.current.value.length<=0)
            setPhoneValid(true);
        if (dateRef.current.value.length<=0)
            setDateValid(true);
        let id=props.userReducer.userObject.id;
        if (firstNameRef.current.value.length>0&&lastNameRef.current.value.length>0&&phoneRef.current.value.length>0&&dateRef.current.value.length>0&&(maleGenderRef.current.checked===true||femaleGenderRef.current.checked===true)){
            axios.post(API_PATH+'upuser', {id:id, fristname:editUser.fristname, lastname:editUser.lastname, gender:editUser.gender, phone:editUser.phone, birthdate:editUser.birthdate})
                .then((response)=>{
                    console.log(response.data);
                    props.userUpdateFunction(response.data);
                    setCheck(true);
                })
        }
    }

    let user=props.userReducer.userObject;

    return (
        <div className="editProfile">
            <div className="container">
                <h3>Profile sozlamalari</h3>
                <hr/>
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className={`success ${check? "": "successNone"}`}>
                            <div className="successImg">
                                <img src="/images/checked.svg" alt="no image"/>
                            </div>
                            <div className="successText">
                                Profil muvofiqiyatli ynagilandi
                            </div>
                        </div>
                        <div className="form"    >
                            <div className={`nameInput ${firstNameValid? "nameInputValid": " "}`}>
                                <label htmlFor="name"><span>*</span>Ism</label>
                                <input ref={firstNameRef} type="text" name="fristname" id="name" onChange={handleInputChange} className="form-control" defaultValue={user.fristname===null?" ": user.fristname}  />
                            </div>
                            <div className={`lastNameInput ${lastNameValid? "lastNameInputValid":" "}`}>
                                <label htmlFor="lastname"><span>*</span>Familya</label>
                                <input ref={lastNameRef} type="text" name="lastname" id="lastname" onChange={handleInputChange} className="form-control" defaultValue={user.lastname===null?"": user.lastname} />
                            </div>
                            <div className={`checkbox ${genderValid? "checkboxValid": " "}`}>
                                <div className="checkboxLeft">
                                    <span>*</span>Jinsi
                                </div>
                                <div className="checkboxRight">
                                    <label htmlFor="male">Erkak
                                        <input  ref={maleGenderRef} type="radio" id="male" value="1" onChange={handleInputChange}   className="form-check-inline" name="gender" defaultChecked={user.gender===null? false: user.gender==="1"? true: false} />
                                    </label>
                                    <label htmlFor="female">Ayol
                                        <input  ref={femaleGenderRef} type="radio" value="0" id="female" onChange={handleInputChange} className="form-check-inline" name="gender" defaultChecked={user.gender===null? false: user.gender==="0"? true: false} />
                                    </label>
                                </div>
                            </div>
                            <div className="electronPochta">
                               <div className="electronText">
                                   <span>*</span>Asosiy elektron pochta
                               </div>
                                <div className="userNameElectron">
                                    {props.userCheckReducer.userCheck===true? props.userReducer.userObject.email: " " }
                                </div>
                            </div>
                            <div className={`phoneNumberInput ${phoneValid? "phoneNumberInputValid": " "}`}>
                                <label htmlFor="phone"><span>*</span>Tel</label>
                                <input  ref={phoneRef} type="number" id="phone" onChange={handleInputChange} name="phone" className="form-control" defaultValue={user.phone===null?"": user.phone} />
                            </div>
                            <div className={`birthday ${dateValid? "birthdayValid": " "}`}>
                                <label htmlFor="date"><span>*</span>Tugilgan sanasi</label>
                                <input  ref={dateRef} type="date" onChange={handleInputChange} name="birthdate" id="date" defaultValue={user.birthdate===null?"": user.birthdate} />
                            </div>
                            <div className="submitButton" >
                                <button type="submit" onClick={updateUser}  >
                                    Tayyor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
function  mapDispatchToProps(dispatch) {
    return {
        userUpdateFunction:function (update_user) {
            dispatch({
                type:"UPDATE_USER",
                payload:update_user
            })
        }
    }
}
function mapStateToProps(state) {
    return state
}
export default connect(mapStateToProps, mapDispatchToProps) (EditProfile);