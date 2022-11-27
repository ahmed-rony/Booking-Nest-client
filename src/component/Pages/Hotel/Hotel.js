import React from 'react';
import './Hotel.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Paper } from '@mui/material';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';

const Hotel = () => {
    const photos = [
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { src: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=600" },
    ]
    return (
        <>
            <Navbar></Navbar>
            <Header type="list"></Header>
            <div className="container">
                <div className="hotel-content">
                    <h1>Grand Hotel</h1>
                    <button className="booking brand-btn">Reserve or Book Now</button>
                    <div className="hotel-address">
                        <FaMapMarkerAlt />
                        <span>Banani, sector-4, Dhaka</span>
                    </div>
                    <span className='distance'>Excellent location - 500m from center</span>
                    <span className='offer'>Book a stay over $114 at this property and get a free airport texi</span>
                    <div className="hotel-img row g-3">
                        {
                            photos.map((photo) => (
                                <div className="img-wrapper col-md-4">
                                    <img src={photo.src} alt="" />
                                </div>
                            ))
                        }
                    </div>
                    <div className="hotel-details">
                        <div className="hotel-desc">
                            <h1>Stay in the heart of Dhaka</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit at aliquam voluptatem, ducimus nihil labore fugiat ullam reiciendis quam, modi voluptate minus blanditiis aliquid dolorum sed recusandae ut quod explicabo quidem magnam quia, asperiores quae incidunt. Consectetur facilis accusantium ducimus dolor quas magnam modi voluptas, nam dicta, doloribus ea doloremque iste officiis, porro quo veritatis atque cum voluptatem minima. Non deleniti error debitis saepe, ipsam dolores similique incidunt nihil, ipsa placeat velit corporis, enim quisquam praesentium magnam possimus assumenda?</p>
                        </div>
                        <Paper elevation={3} className="hotel-price">
                            <h2>Perfect for a 9-night stay</h2>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, magni!</span>
                            <h3>$977<span>- 9 Nights</span></h3>
                            <button className="brand-btn">Reserve or Book Now!</button>
                        </Paper>
                    </div>
                </div>
                <MailList></MailList>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Hotel;