import React from 'react';
import Home from '../Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from '../../utilities/PrivateRoute/PrivateRoute';
import Page404 from '../Page404/Page404';
import ListHotels from '../ListHotels/ListHotels';
import Hotel from '../Hotel/Hotel';

const MainPage = () => {
    return (
        <Router>
            <Routes>
                
                <Route path='/' element={<Home />}></Route>
                <Route path='/hotels' element={<ListHotels />}></Route>
                <Route path='/hotels/:id' element={<Hotel />}></Route>
                <Route path='*' element={<Page404 />}></Route>
                
                {/* ============  RESTRICTED ROUTE  ============= */}
                <Route element={<PrivateRoute />}></Route>
                {/* ============  RESTRICTED ROUTE  ============= */}
            </Routes>
        </Router>
    );
};

export default MainPage;