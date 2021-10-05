import React, {useState} from 'react';
import Search from "./Search";
import HomePageFixed from "./homePageFixed";
import Footer from "./footer";

const Cabinet = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Search/>



            <Footer/>
            <HomePageFixed count={count}/>
        </div>
    );
};

export default Cabinet;