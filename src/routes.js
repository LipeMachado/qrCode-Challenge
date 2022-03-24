import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { QrCodeBox } from './Components/QrCodeBox/';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<QrCodeBox />}/>
        </Routes>
    );
}