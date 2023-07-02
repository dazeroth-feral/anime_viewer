import css from "./InformationBlock.module.css";

import React from 'react';

import Details from "./Details/Details";

const InformationBlock = ({props, info_blocks_style}) => {
    return(
        <div className={info_blocks_style}>
            <div className={css.content}>
                <div className={css.name}>
                    {props.name_and_title_props.name}
                </div>

                <Details props={props.details_props} />

                <div className={css.description}>
                    {props.name_and_title_props.description}
                </div> 
            </div>
        </div>
    )
};

export default InformationBlock;
