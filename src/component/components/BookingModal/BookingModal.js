import { useContext, useState } from 'react';
import { Fade, Modal, Paper } from '@mui/material';
import UseFetch from '../../utilities/Hooks/UseFetch';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../utilities/ContextAPI/DataContext';
import './BookingModal.scss';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: "50px",
    width: '800px',
    minHeight: '400px',
    background: "#fff2cd",
    border: 'none',
    color: "#000",
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openModal, handleClose, hotelId }) => {
    const [selectedRoom, setSelectedRoom] = useState([]);
    const { data, loading, error } = UseFetch(`http://localhost:30000/api/hotels/room/${hotelId}`);
    const { date } = useContext(DataContext);
    const navigate = useNavigate();
    
    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRoom(checked ? [...selectedRoom, value] : selectedRoom.filter(item => item !== value))
    }

    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const date = new Date(start.getTime());
        let list = [];

        while (date <= end) {
            list.push(new Date(date).getTime());
            date.setDate(date.getDate() + 1);
        }
        return list;
    }
    const allDates = getDatesInRange(date[0]?.startDate, date[0]?.endDate);
    const availableRoom = (roomNumber) =>{
        const isFound = roomNumber.unavailableDates.some((date)=> allDates.includes(new Date(date).getTime()));
        return !isFound;
    }

    const handleClick = async () => {
        try {
            await Promise.all(selectedRoom.map( async (roomId)=>{
                const res = await axios.put(`http://localhost:30000/api/rooms/availability/${roomId}`, {dates: allDates});
                return res.data;
            }));
            handleClose();
            navigate('/');
        } catch (error) {
            
        }
    };

    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Paper elevation={3} sx={style}>
                        <div className="modal-content ">
                            <span>Select your room</span>
                            {loading
                                ? "Loading"
                                : <>{data && data.map(item => (
                                    <div className="item">
                                        <div className="info">
                                            <h4>{item?.title}</h4>
                                            <span>{item?.desc}</span>
                                            <span>Max People: <b>{item?.maxPeople}</b></span>
                                            <span>Price: {item?.price}</span>
                                        </div>
                                        <div className="rooms">
                                            {item?.roomNumbers.map(roomN => (
                                                <div className="room">
                                                    <lebel>{roomN?.number}</lebel>
                                                    <input disabled={!availableRoom(roomN)} type="checkbox" value={roomN?._id} onChange={handleSelect} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}</>
                            }
                            <button onClick={handleClick} className="brand-btn">Reserve Now</button>
                        </div>
                    </Paper>
                </Fade>
            </Modal>
        </>
    );
};

export default BookingModal;