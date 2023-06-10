import css from "./InformationBlock.module.css";

import React from 'react';

import Details from "./Details/Details";

const InformationBlock = ({props}) => {
    return(
        <div className={css.content}>
            <div className={css.anime_Name}>
                {props.name_and_title_props.name}
            </div>

            <Details props={props.details_props} />

            <div className={css.anime_Description}>
                {props.name_and_title_props.description}
            </div>      
        </div>
    )
};

export default InformationBlock;
