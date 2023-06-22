import React from 'react';

import css from "./MainPage.module.css";

import RecommendationBlock from './RecommendationBlock/RecommendationBlock';
import NewAnimeBlock from "./NewAnimeBlock/NewAnimeBlock";
import TrendsBlocks from './TrendsBlocks/TrendsBlocks';

const MainPage = ({state}) => {
    return(
        <div>
            <RecommendationBlock state={state.recommendation_List} />
            <TrendsBlocks state={state.trends_list} />
            <NewAnimeBlock state={state.new_Animes_List} />
        </div>
    );
};

export default MainPage;