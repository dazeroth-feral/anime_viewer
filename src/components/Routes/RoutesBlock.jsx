import React from "react";
import { Route, Routes } from 'react-router-dom';

import MainPage from '../Content/MainPage/MainPage';
import PlayerPage from "../Content/PlayerPage/PlayerPage";

const RoutesBlock = ({state}) => {
    return(
        <Routes>
            <Route path="/" element={<MainPage state={state} />} />
            <Route path="/player_page/:anime_Name" element={<PlayerPage state={state} />} />
        </Routes>
    );
};

export default RoutesBlock;