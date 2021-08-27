import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};



function AliceCarouselComponent() {
    const items = [
        <div className="item" data-value="1"><img
            src="https://ae01.alicdn.com/kf/Hd4ea14c2d6ba4308a347cd11990d2d8dK/750x300.jpg_Q90.jpg_.webp" alt="no images"/></div>,
        <div className="item" data-value="2"><img
            src="https://ae01.alicdn.com/kf/H372188b191f54920a99d9b906023bd99o/750x300.png_.webp" alt="no image"/></div>,
        <div className="item" data-value="3"><img
            src="https://ae01.alicdn.com/kf/H5dc72e5268b943e1b4883821307fd753J.jpg_Q90.jpg_.webp" alt="no image"/></div>,
        <div className="item" data-value="4"><img
            src="https://ae01.alicdn.com/kf/Hb6aeebcd52c243818fbc931e231b57290.jpg_Q90.jpg_.webp" alt="no image"/></div>,
        <div className="item" data-value="5"><img
            src="https://ae01.alicdn.com/kf/H5dc72e5268b943e1b4883821307fd753J.jpg_Q90.jpg_.webp" alt="no image"/></div>,
    ];
    return (
        <div className="aliceCarousel">
            <AliceCarousel
                autoPlay
                infinite
                autoPlayInterval={1500}
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            />
        </div>
    );
}

export default AliceCarouselComponent;