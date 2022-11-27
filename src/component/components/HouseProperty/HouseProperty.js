import React from 'react';
import UseFetch from '../../utilities/Hooks/UseFetch';
import './HouseProperty.scss';

const HouseProperty = () => {
    const { data, loading, error } = UseFetch("http://localhost:30000/api/hotels/countByType");

    return (
        <div className='hProperty'>
            <h2>Houses Guests Love</h2>
            <div className="hproperty-content">
                <div className="hproperty-item">
                    <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="name">Apart Maistro</span>
                    <span className="city">Milan</span>
                    <span className="price">Starting from $120</span>
                    <div className="rating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className="hproperty-item">
                    <img src="https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="name">Apart Maistro</span>
                    <span className="city">Milan</span>
                    <span className="price">Starting from $120</span>
                    <div className="rating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className="hproperty-item">
                    <img src="https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="name">Apart Maistro</span>
                    <span className="city">Milan</span>
                    <span className="price">Starting from $120</span>
                    <div className="rating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                <div className="hproperty-item">
                    <img src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span className="name">Apart Maistro</span>
                    <span className="city">Milan</span>
                    <span className="price">Starting from $120</span>
                    <div className="rating">
                        <button>8.9</button>
                        <span>Excellent</span>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default HouseProperty;