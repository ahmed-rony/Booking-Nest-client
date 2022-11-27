import React from 'react';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HouseProperty from '../../components/HouseProperty/HouseProperty';
import MailList from '../../components/MailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Header></Header>
            <div className="container">
                <Featured></Featured>
                <PropertyList></PropertyList>
                <HouseProperty></HouseProperty>
                <MailList></MailList>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Home;