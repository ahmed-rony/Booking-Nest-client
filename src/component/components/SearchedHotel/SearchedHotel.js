import React from 'react';
import './SearchedHotel.scss';

const SearchedHotel = () => {
    return (
        <div className='sHotel'>
            <div className="sHotel-content">
                <img src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="sHotel-desc">
                    <h3>Apart Miastro</h3>
                    <span className='distance'>500m from center</span>
                    <span className="texi-service">Free airport texi</span>
                    <span className='subtitle'>Studio Apartment with Air conditioning</span>
                    <span className='features'>Entire studio, 1 bathroom, 21m<sup>2</sup> full bed</span>
                    <span className="cancel">Free cancellation</span>
                    <span className='cancel-sub'>You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="sHotel-detail">
                    <div className="rating">
                        <span>Excellent</span>
                        <button>8.9</button>
                    </div>
                    <div className="details">
                        <span>$123</span>
                        <span className='tax'>Includes taxes and fees</span>
                        <button className='brand-btn'>See availability</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchedHotel;