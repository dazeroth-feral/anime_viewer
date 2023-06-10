import css from "./Rec_Blocks.module.css";

import React from 'react';

import SwitcherBlock from "./SwitcherBlock/SwitcherBlock";
import BackgorundImg from "./BackgorundImg/BackgorundImg";
import InformationBlock from "./InformationBlock/InformationBlock";
import Links from "./Links/Links";

// raiting, name, description, navLink_path, date_present, genre, view_type, series_length, img_path, quality ▶

const Rec_Blocks = ({props, state, set_recommendation_block}) => {
    const information_props = {
        details_props: {
            view_type: props.view_type,
            series_length: props.series_length,
            date_present: props.date_present,
            raiting: props.raiting,
            quality: props.quality
        },
        name_and_title_props: {
            name: props.name,
            description: props.description
        }
    };

    const links_props = {
        navLink_playerPage_path: props.navLink_playerPage_path,
        navLink_detailsPage_path: props.navLink_detailsPage_path
    };

    return(
        <div className={css.content}>
            <BackgorundImg img_path={props.big_img_path}/>
            <InformationBlock props={information_props} />
            <Links props={links_props} />

            <div className={css.convas_More_Recommendation}>
                <SwitcherBlock
                    state={state} 
                    set_recommendation_block={set_recommendation_block}
                />
            </div>
        </div>
    )
};

export default Rec_Blocks;
