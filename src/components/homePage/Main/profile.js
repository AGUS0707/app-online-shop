import React from 'react';
import Navbar from "../navbar";
import Search from "../Search";
import ProfileContent from "./profileContent";
import Footer from "../footer";

function Profile(props) {
    return (
        <div className="profile">
            <Navbar/>
            <Search/>
            <ProfileContent/>
            <Footer/>
        </div>
    );
}

export default Profile;