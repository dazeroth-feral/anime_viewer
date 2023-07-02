import css from "./Rec_Blocks.module.css";

import React, { useState } from 'react';

import SwitcherBlock from "./SwitcherBlock/SwitcherBlock";
import BackgorundImg from "./BackgorundImg/BackgorundImg";
import InformationBlock from "./InformationBlock/InformationBlock";
import Links from "./Links/Links";

// .recommendation_background_image .switch_animation

const Rec_Blocks = ({props, background_image_style, info_blocks_style, state, change_content}) => {
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
            <BackgorundImg img_path={props.big_img_path} background_image_style={background_image_style} />
            <InformationBlock props={information_props} info_blocks_style={info_blocks_style} />
            <Links props={links_props} info_blocks_style={info_blocks_style} />

            <div className={css.convas_More_Recommendation}>
                <SwitcherBlock
                    state={state} 
                    change_content={change_content}
                />
            </div>
        </div>
    )
};

export default Rec_Blocks;
