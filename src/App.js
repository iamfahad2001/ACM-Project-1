import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from "./components/Banner";
import Help from "./components/Help";
import Social from "./components/Social";
import Card from "./components/Card";
import Email from "./components/Email";
import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";

function App() {
    return (
        <>

            <Navbar/>
            <Banner/>
            <Banner2/>
            <Help/>
            <Social/>
            <Card/>
            <Email/>
            <Footer/>
        </>

    );
}

export default App;
