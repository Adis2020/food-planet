import React from 'react';
import style from "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";

const App = () => {
    return (
        <div>
            <div>
                <Header/>
                <Banner/>
            </div>
        </div>
    );
};

export default App;