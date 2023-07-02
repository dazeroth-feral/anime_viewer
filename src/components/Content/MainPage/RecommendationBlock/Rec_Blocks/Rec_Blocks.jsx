import css from "./Rec_Blocks.module.css";

import React, { useState } from 'react';

import SwitcherBlock from "./SwitcherBlock/SwitcherBlock";
import BackgorundImg from "./BackgorundImg/BackgorundImg";
import InformationBlock from "./InformationBlock/InformationBlock";
import Links from "./Links/Links";

// .recommendation_background_image .switch_animation

const Rec_Blocks = ({props, info_blocks_style, state, circles_animated, change_content, content_array_number, background_animated}) => {
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

    const button_click = (type) => {
        switch (type){
            case "+":
                if((content_array_number + 1) > (Object.keys(state).length - 1)){
                    change_content(0);
                } else{
                    change_content(content_array_number + 1);
                }
                break;
            case "-":
                if ((content_array_number - 1) == -1){
                    change_content(Object.keys(state).length - 1);
                } else{
                    change_content(content_array_number - 1);
                }
                break;
        }
    };

    const circles_count = Object.keys(state).length;
    let array_of_circles = [];

    for(let i = 0; i < circles_count; i++){
        array_of_circles.push(
            <div className={
                content_array_number == i ? [css.circle, css.active].join(" ") : css.circle
            } key={i}></div>
            );
        };

    return(
        <div className={css.content}>
            <BackgorundImg img_path={props.big_img_path} background_animated={background_animated} />
            <InformationBlock props={information_props} info_blocks_style={info_blocks_style} />
            <Links props={links_props} info_blocks_style={info_blocks_style} />

            <div className={css.switchers}>
                <button onClick={() => button_click("-")} className={css.minus}>◀</button>
                <button onClick={() => button_click("+")} className={css.plus}>▶</button>
            </div>

            <div className={
                circles_animated ? [css.bottom_rec_counter, css.animation_start].join(" ") : [css.bottom_rec_counter, css.animation_end].join(" ")
            }>
                {array_of_circles}
                {/* <SwitcherBlock
                    state={state} 
                    change_content={change_content}
                /> */}
            </div>
        </div>
    )
};

export default Rec_Blocks;
