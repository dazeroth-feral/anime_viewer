import React from "react";
import { Route, Routes } from 'react-router-dom';

import MainPage from '../Content/MainPage/MainPage';

const RoutesBlock = ({state}) => {
    return(
        <Routes>
            <Route path="/" element={<MainPage state={state} />} />
        </Routes>
    );
};

export default RoutesBlock;