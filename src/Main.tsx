import * as React from "react";
import { Routes, Route } from 'react-router-dom';
import {App} from './App';
import {AboutUs} from './aboutUs';
const Main = () => {
    return (         
        <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/about-us' element={<AboutUs/>} />
    </Routes>
    );
}

export default Main;