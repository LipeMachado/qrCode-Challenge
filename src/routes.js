import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { InitialPage } from './Pages/InitialPage/InitialPage';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<InitialPage />}/>
        </Routes>
    );
}