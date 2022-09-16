import React from 'react';
import Header from '../header/Header';
import Banner from '../banner/Banner';
import Burgers from '../burgers/Burgers';
import News from '../news/News';
import Menu from '../menu/Menu';
import Pizzas from "../pizza/Pizza";
import About from "../about/About";
import Reviews from "../reviews/Reviews";
import Footer from '../footer/Footer';

const Main = () => {
    return (
        <>
            <Header/>
            <div className="main">
                <Banner/>
                <News/>
                <Burgers/>
                <Menu/>
                <Pizzas/>
                <About/>
                <Reviews/>
            </div>
            <Footer/>
        </>
    );
};

export default Main;