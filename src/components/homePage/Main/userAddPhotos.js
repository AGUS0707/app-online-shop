import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {API_PATH} from "../../../tools/constants";
function UserAddPhotos(props) {
    const [checkButton, setCheckButton]=React.useState(false);
    const [check, setCheck]=React.useState(false);
    const [fff, setFff]=React.useState();
   const [url, setUrl]=React.useState("https://is.alicdn.com/images/eng/style/css_images/myalibaba/mempic_nophoto.gif");
   function photoChange(e) {
       if (e.target.files[0]!==undefined){
           setUrl(URL.createObjectURL(e.target.files[0]));
           setFff(e.target.files[0]);
           if (e.target.files[0]!==null){
               setCheckButton(true);
           }
       }else{
          setUrl("https://is.alicdn.com/images/eng/style/css_images/myalibaba/mempic_nophoto.gif")
       }
   }
    function addPhotos() {
       const data= new FormData();
       data.append('file', fff );
       let id=props.userReducer.userObject.id;
       data.append("id", id);
       axios.post(API_PATH+'upphoto', data).then((response)=>{
           props.updateUserPhoto(response.data);
           setCheck(true);
           props.history.push("/home/profile")
       });

   }
    return (
        <div className={"userAddPhotos"}>
           <div className="container">
               <h3>Rasm yuklash</h3>
               <hr/>
               <div className={`${check?"alertContentBlock": "alertContent"}`}>
                   <div className="alert">
                       <div className="alertLeft">
                           <img src="/images/checked.svg" alt="no images"/>
                       </div>
                       <div className="alertRight">
                           Rasm muvofiqiyatli yuklandi
                       </div>
                   </div>
               </div>
               <div className="row">
                   <div className="col-md-8">
                       <div className="uploadImg">
                           <img src={url} alt=""/>
                       </div>
                       <form  >
                           <label className="custom-file-upload">
                               <input type="file" name={"file"} onChange={photoChange}/>
                           </label>
                       </form>
                   </div>
                   <div className="col-md-4">

                   </div>
               </div>
               <div className="updateButtonPhotos">
                   <button className={`btn ${checkButton?"addPhotosBlock" : "addPhotosNone"}`}  onClick={addPhotos}>Rasmni Saqlash</button>
               </div>
           </div>
        </div>
    );
}
function mapDispatchToProps(dispatch) {
    return {
        updateUserPhoto:function (url) {
            dispatch({
                type:"UPDATE_PHOTO",
                payload:url
            })
        }
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps) (UserAddPhotos);