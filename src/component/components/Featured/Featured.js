import React from 'react';
import UseFetch from '../../utilities/Hooks/UseFetch';
import './Featured.scss';

const Featured = () => {
    const { data, loading, error } = UseFetch("http://localhost:30000/api/hotels/countByCity?cities=milan,london,New York");

    return (
        <div className="featured">
            {loading
                ? "Loading.."
                : <>
                    <div className="featured-item">
                        <img src="https://images.pexels.com/photos/158316/kinzig-fischer-bach-black-forest-water-158316.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="featured-title">
                            <h1>Milan</h1>
                            <h4>{data[0]} Properties</h4>
                        </div>
                    </div>
                    <div className="featured-item">
                        <img src="https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="featured-title">
                            <h1>London</h1>
                            <h4>{data[1]} Properties</h4>
                        </div>
                    </div>
                    <div className="featured-item">
                        <img src="https://images.pexels.com/photos/70846/netherlands-landscape-sky-clouds-70846.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        <div className="featured-title">
                            <h1>New York</h1>
                            <h4>{data[2]} Properties</h4>
                        </div>
                    </div>
                </>}
        </div>
    );
};

export default Featured;