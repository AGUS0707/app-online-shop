import React, {useEffect} from 'react';
import useStateRef from 'react-usestateref';
function PasswordUpdate(props) {
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, []);
    const [userPassword, setUserPassword, userPasswordRef]=useStateRef({
        password:"",
        password_1:"",
        password_2:""
    });
    function handleInputChange(e) {
      let newObject;
      newObject={
          ...userPassword,
          [e.target.name]:e.target.value
      };
      setUserPassword(newObject);
      if (e.target.id==="3"){
          if (userPasswordRef.current.password_2===userPasswordRef.current.password_1){
              e.target.classList.remove("red")
          }else {
              e.target.classList.add("red");
          }
      }
    }
    return (
        <div className="passwordUpdate">
            <div className="container">
                <h3>Parolni ozgartirish</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <div className="passwordInputGroup">
                            <div className="old-password a">
                                <label htmlFor="old-password">Eski password</label>
                                <input type="password" id="1" onChange={handleInputChange} className="form-control" name="password" placeholder="Eski passwordni kiriting"/>
                            </div>
                            <div className="new-password-1 a">
                                <label htmlFor="new-password-1">Yangi Password</label>
                                <input type="password" id="2" onChange={handleInputChange} className="form-control" name="password_1" placeholder="Ynagi passwordni kiriting"/>
                            </div>
                            <div className="new-password-2" a>
                                <label htmlFor="new-password-2">Yangi Password</label>
                                <input type="password" id="3" onChange={handleInputChange} className="form-control" name="password_2" placeholder="Yangi passwordni kiriting"/>
                            </div>
                            <div className="updatePasswordButton">
                                <button>Saqlash</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordUpdate;