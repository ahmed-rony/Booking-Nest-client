import React from 'react';
import { Link } from 'react-router-dom';
import './SearchedHotel.scss';

const SearchedHotel = ({item}) => {
    
    return (
        <div className='sHotel'>
            <div className="sHotel-content">
                <img src={item.photos[0] ? item.photos[0] : "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" />
                <div className="sHotel-desc">
                    <h3>{item.name}</h3>
                    <span className='distance'>{item.distance}m from center</span>
                    <span className="texi-service">Free airport texi</span>
                    <span className='subtitle'>Studio Apartment with Air conditioning</span>
                    <span className='features'>{item.desc}</span>
                    <span className="cancel">Free cancellation</span>
                    <span className='cancel-sub'>You can cancel later, so lock in this great price today!</span>
                </div>
                <div className="sHotel-detail">
                    {item.rating && <div className="rating">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>}
                    <div className="details">
                        <span>${item.cheapestPrice}</span>
                        <span className='tax'>Includes taxes and fees</span>
                        <Link to={`/hotels/find/${item._id}`}>
                            <button className='brand-btn'>See availability</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchedHotel;