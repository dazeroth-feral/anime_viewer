import React from 'react';

import css from "./MainPage.module.css";

import RecommendationBlock from './RecommendationBlock/RecommendationBlock';
import NewAnimeBlock from "./NewAnimeBlock/NewAnimeBlock";
import TrendsBlocks from './TrendsBlocks/TrendsBlocks';

const MainPage = (props) => {
    return(
        <div>
            <RecommendationBlock state={props.state.recommendation_List} />
            <TrendsBlocks state={props.state.trends_list} />
            <NewAnimeBlock state={props.state.new_Animes_List} />
        </div>
    );
};

export default MainPage;