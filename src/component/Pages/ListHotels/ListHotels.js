import { format } from 'date-fns';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './ListHotels.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import SearchedHotel from '../../components/SearchedHotel/SearchedHotel';
import UseFetch from '../../utilities/Hooks/UseFetch';

const ListHotels = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);
    const [min, setMin] = useState(undefined);
    const [max, setMax] = useState(undefined);
    const [openDate, setOpenDate] = useState(false);
    const { data, loading, error, reFetch } = UseFetch(`http://localhost:30000/api/hotels?city=${destination}&min=${min || 0}&max=${max || 999}`);

    const handleSearch = () =>{
        reFetch();
    }
    return (
        <>
            <Navbar></Navbar>
            <Header type="list"></Header>
            <div className="container">
                <div className="list-content">
                    <div className="search">
                        <h3>Search</h3>
                        <div className="search-item">
                            <label className='lebel'>Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="search-item">
                            <label className='lebel'>Check-In Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{format(date[0].startDate, "dd.MM.yyyy")} to {format(date[0].endDate, "dd.MM.yyyy")}</span>
                            {openDate && <DateRange
                                onChange={item => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />}
                        </div>
                        <div className="search-item">
                            <label className='lebel'>Options</label>
                            <div className="option-item">
                                <span>Min Price <small>per night</small></span>
                                <input type="number" onChange={(e)=> setMin(e.target.value)} />
                            </div>
                            <div className="option-item">
                                <span>Max Price <small>per night</small></span>
                                <input type="number" onChange={(e)=> setMax(e.target.value)} />
                            </div>
                            <div className="option-item">
                                <span>Adult</span>
                                <input type="number" min={1} placeholder={options.adult} />
                            </div>
                            <div className="option-item">
                                <span>Children</span>
                                <input type="number" min={0} placeholder={options.children} />
                            </div>
                            <div className="option-item">
                                <span>Room</span>
                                <input type="number" min={1} placeholder={options.room} />
                            </div>
                        </div>
                        <button className="brand-btn" onClick={handleSearch}>Search</button>
                    </div>
                    <div className="result">
                        {loading
                            ? <span style={{ color: '#000' }}>Loading</span>
                            : <>{data.map(item => (
                                <SearchedHotel item={item} key={item._id}></SearchedHotel>
                            ))}</>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListHotels;