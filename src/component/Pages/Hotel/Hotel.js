import React, { useContext, useState } from 'react';
import './Hotel.scss';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Paper } from '@mui/material';
import MailList from '../../components/MailList/MailList';
import Footer from '../../components/Footer/Footer';
import UseFetch from '../../utilities/Hooks/UseFetch';
import { useLocation, useNavigate } from 'react-router-dom';
import DataContext from '../../utilities/ContextAPI/DataContext';
import BookingModal from '../../components/BookingModal/BookingModal';
import AuthContext from '../../utilities/ContextAPI/AuthContext';

const Hotel = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[3];
    const { data, loading, error, reFetch } = UseFetch(`http://localhost:30000/api/hotels/find/${id}`);
    const { date, options } = useContext(DataContext);
    const { user } = useContext(AuthContext);
    const [openModal, setOpenModal] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () => {
        setOpenModal(true)
        // if(user){}
        // else{
        //     navigate('/login');
        // }
    };
    const handleClose = () => setOpenModal(false);

    const MILISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    const dayDifferance = (date1, date2) => {
        const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
        const diffDays = Math.ceil(timeDiff / MILISECONDS_PER_DAY);
        return diffDays;
    }
    const nights = dayDifferance(date[0]?.endDate, date[0]?.startDate);


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
                {loading
                    ? "Loading"
                    : <><div className="hotel-content">
                        <h1>{data.name}</h1>
                        <button onClick={handleOpen} className="booking brand-btn">Reserve or Book Now</button>
                        <div className="hotel-address">
                            <FaMapMarkerAlt />
                            <span>{data.address}</span>
                        </div>
                        <span className='distance'>Excellent location - {data.distance}m from center</span>
                        <span className='offer'>Book a stay over ${data.cheapestPrice} at this property and get a free airport texi</span>
                        <div className="hotel-img row g-3">
                            {
                                (data.photos?.length > 0)
                                    ? data.photos?.map((photo) => (
                                        <div className="img-wrapper col-md-4">
                                            <img src={photo.src} alt="" />
                                        </div>
                                    ))
                                    : photos.map((photo) => (
                                        <div className="img-wrapper col-md-4">
                                            <img src={photo.src} alt="" />
                                        </div>
                                    ))
                            }
                        </div>
                        <div className="hotel-details">
                            <div className="hotel-desc">
                                <h1>{data.title}</h1>
                                <p>{data.desc}</p>
                            </div>
                            <Paper elevation={3} className="hotel-price">
                                <h2>Perfect for a {nights}-night stay</h2>
                                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, magni!</span>
                                <h3>${nights * data.cheapestPrice * options.room}<span>- {nights} Nights</span></h3>
                                <button onClick={handleOpen} className="brand-btn">Reserve or Book Now!</button>
                            </Paper>
                        </div>
                    </div>
                    <BookingModal handleClose={handleClose} openModal={openModal} hotelId={id} ></BookingModal>
                    </>}
                <MailList></MailList>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Hotel;