import React, {useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "../../../styles/mainRightComponentCarousel.scss";
const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};



function MainRightComponentCarousel() {
    const [list, setList]=React.useState(["ewfwe", "efwef", "efwef", "wefwe"])
    const [productList, setProductList]=React.useState([
        {
            url:"images/page.webp"
        },
        {
            url: "images/page1.webp"
        },
        {
            url:"images/page2.webp"
        },
        {
            url:"images/page2.webp"
        },
        {
            url:"images/page2.webp"
        },
        {
            url:"images/page2.webp"
        }
    ])
    let filterList=[]
    let items=[]
    items=productList.map((item, index)=>{
        if (index<3){
            {filterList=productList.slice((index+1)*2-2, (index+1)*2)}
            return  <div className="item" data-value={index.toString()}>
                {filterList.map((item2)=>{
                    return <div className="itemContent">
                        <div className="itemImgContent">
                            <img src={item2.url} alt="no images"/>
                        </div>
                        <div className="price">8.3$</div>
                        <div className="sold">9 Sold</div>
                    </div>

                })}
            </div>
        }
    })
    items=items.filter((item)=>{
        if (item!==undefined)
            return item
    })
    return (
        <div className="mainRightComponentCarousel1 __mainRightComponentCarousel1 ">
            <h6>Flash takliflari</h6>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}

export default MainRightComponentCarousel;