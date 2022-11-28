import React from 'react';
import UseFetch from '../../utilities/Hooks/UseFetch';
import './HouseProperty.scss';

const HouseProperty = () => {
    const { data, loading, error } = UseFetch("http://localhost:30000/api/hotels?featured=true&limit=4");
    
    return (
        <div className='hProperty'>
            <h2>Houses Guests Love</h2>
            <div className="hproperty-content">

                {loading
                    ? "Loading.."
                    : <>{data && data.map((item) => (
                        <div className="hproperty-item" key={item._id}>
                            <img src={item.photos && item.photos[0]} alt="" />
                            <span className="name">{item.name}</span>
                            <span className="city">{item.city}</span>
                            <span className="price">Starting from ${item.cheapestPrice}</span>
                            {item.rating && <div className="rating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>

                    ))}</>
                }

            </div>
        </div>
    );
};

export default HouseProperty;