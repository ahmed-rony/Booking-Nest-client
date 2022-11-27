import React from 'react';
import UseFetch from '../../utilities/Hooks/UseFetch';
import './PropertyList.scss';

const PropertyList = () => {
    const { data, loading, error } = UseFetch("http://localhost:30000/api/hotels/countByType");

    const images = [
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
    return (
        <div className='pList'>
            <h2>Browse by property type</h2>
            <div className="pList-content">
                {loading
                    ? "Loading.."
                    : <>{data && images.map((img, i) => (
                        <div className="pList-item" key={i}>
                            <img src={img} alt="" />
                            <div className="pList-title">
                                <h3>{data[i]?.type}</h3>
                                <h4>{data[i]?.count} {data[i]?.type}</h4>
                            </div>
                        </div>
                    ))}
                    </>}
            </div>
        </div>
    );
};

export default PropertyList;