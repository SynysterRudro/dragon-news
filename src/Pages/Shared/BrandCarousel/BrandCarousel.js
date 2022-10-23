import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={200}
                        src={'https://lh5.googleusercontent.com/e2DnlBNCwzPCP8cWmPF_eJ4EkTGlCF_fqjxJP4g0_w4lcoWKoIMY9cJ2o4SClZTxsF7oRJHvLb_tKX3yiHVwQRdhm8fZ3WvLgB9x5j-DS66fIfq33rJV8BdeKkcNF2tnlSPdNZOn'}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        height={200}
                        src={'https://www.marketing91.com/wp-content/uploads/2015/10/brand-7592.jpg'}
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousel;