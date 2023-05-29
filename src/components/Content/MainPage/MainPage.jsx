import React from 'react';

import css from "./MainPage.module.css";

import RecommendationBlock from './RecommendationBlock/RecommendationBlock';
import NewAnimeBlock from "./NewAnimeBlock/NewAnimeBlock";

const MainPage = (props) => {
    return(
        <div>
            <RecommendationBlock state={props.state.recommendation_List} className={css.RecommendationBlock} />
            <NewAnimeBlock state={props.state.new_Animes_List} className={css.NewAnimeBlock} />
        </div>
    );
};

export default MainPage;