import React, { useContext, useState } from 'react';
import './Header.scss';
import { FaBed, FaCar, FaCarSide, FaHotel, FaPlane } from 'react-icons/fa';
import { RiHotelFill } from 'react-icons/ri';
import { BsCalendar4Range, BsFillPeopleFill } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../utilities/ContextAPI/DataContext';
import AuthContext from '../../utilities/ContextAPI/AuthContext';

const Header = ({ type }) => {
    const [destination, setDestination] = useState('');
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    });
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const {dispatch} = useContext(DataContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleSearch = () => {
        dispatch({ type: "NEW_SEARCH", payload: { destination, date, options } });
        navigate('/hotels', { state: { destination, date, options } });
    }

    return (
        <div className="header">
            <div className="container">
                <div className="header-list">
                    <div className="header-item">
                        <FaHotel />
                        <span>Stays</span>
                    </div>
                    <div className="header-item active">
                        <FaPlane />
                        <span>Stays</span>
                    </div>
                    <div className="header-item">
                        <FaCar />
                        <span>Stays</span>
                    </div>
                    <div className="header-item">
                        <FaBed />
                        <span>Stays</span>
                    </div>
                    <div className="header-item">
                        <FaCarSide />
                        <span>Stays</span>
                    </div>
                </div>

                {type !== "list" &&
                    <>
                        <div className="header-content">
                            <h1>A life time of discounts? It's Genius</h1>
                            <p>Get rewarded for your travels - unlock instant savings of 10% with a free account</p>
                            {!user && <button className='brand-btn'>Register</button>}
                        </div>
                        <div className="header-search">
                            <div className="search-content">
                                <div className="search-item">
                                    <RiHotelFill className='icon' />
                                    <TextField onChange={(e) => setDestination(e.target.value)} className='text-field' id="outlined-search" label="Where are you going?" type="search" size='small' />
                                </div>
                                <div className="search-item" >
                                    <BsCalendar4Range onClick={() => setOpenDate(!openDate)} className='icon' />
                                    <span onClick={() => setOpenDate(!openDate)}>{format(date[0].startDate, "dd.MM.yyyy")} to {format(date[0].endDate, "dd.MM.yyyy")}</span>
                                    {openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                        className='date'
                                    />}
                                </div>
                                <div className="search-item">
                                    <BsFillPeopleFill onClick={() => setOpenOptions(!openOptions)} className='icon' />
                                    <span onClick={() => setOpenOptions(!openOptions)}>{options.adult} adult {options.children} children {options.room} room</span>
                                    {openOptions && <Paper elevation={3} className="options">
                                        <div className="option-item">
                                            <span className='option-text'>Adult:</span>
                                            <div className="option-counter">
                                                <button disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                                                <span>{options.adult}</span>
                                                <button onClick={() => handleOption("adult", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="option-item">
                                            <span className='option-text'>Children:</span>
                                            <div className="option-counter">
                                                <button disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                                                <span>{options.children}</span>
                                                <button onClick={() => handleOption("children", "i")}>+</button>
                                            </div>
                                        </div>
                                        <div className="option-item">
                                            <span className='option-text'>Room:</span>
                                            <div className="option-counter">
                                                <button disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                                                <span>{options.room}</span>
                                                <button onClick={() => handleOption("room", "i")}>+</button>
                                            </div>
                                        </div>
                                    </Paper>}
                                </div>
                                <div className="search-item">
                                    <button className='brand-btn' onClick={handleSearch}>Search</button>
                                </div>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
};

export default Header;