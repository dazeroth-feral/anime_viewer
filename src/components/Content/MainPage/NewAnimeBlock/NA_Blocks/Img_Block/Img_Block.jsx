import React, { useState } from "react";

import css from "./Img_Block.module.css";
import { NavLink } from "react-router-dom";

const play_circle_black = "media/icons/play_circle_black.svg";
const star_gold = "media/icons/star_gold.svg";

const series_counter = "media/icons/series_counter.svg";
const voice_dub_count = "media/icons/voice_dub_count.svg";

const NA_Blocks = ({props}) => {
    const [play_circle, set_play_circle] = useState(css.play_circle_img);
    const [visibily_image_overlay, set_visibily_image_overlay] = useState(css.image_overlay);
    const [on_hover_block, set_on_hover_block] = useState(css.on_hover_block);

    const play_circle_active = [css.play_circle_img, css.active].join(" ");
    const visibily_image_overlay_active = [css.image_overlay, css.active].join(" ");
    const on_hover_block_active = [css.on_hover_block, css.active].join(" ");

    const mouse_hover = (bool) => {
        switch(bool){
            case true:
                set_play_circle(play_circle_active);
                set_visibily_image_overlay(visibily_image_overlay_active);
                set_on_hover_block(on_hover_block_active);
                break;
            case false:
                set_play_circle(css.play_circle_img);
                set_visibily_image_overlay(css.image_overlay);
                set_on_hover_block(css.on_hover_block);
        }
    };

    return(
        <div 
            onMouseOver={() => mouse_hover(true)}
            onMouseLeave={() => mouse_hover(false)}
            className={css.content}
        >
            <div className={on_hover_block}>
                <div className={css.name}>
                    {props.name}
                </div>
                <div className={[css.translate_type, css.gold].join(" ")}>
                    {props.translate_type}
                </div>
                <div className={css.information_block}>
                    <div className={css.left_block}>
                        <div className={css.raiting}>
                            <img src={star_gold} width={16} height={16} />
                            <div>{props.raiting}</div>
                        </div>
                        <div className={css.counters_block}>
                            <div className={css.series_counter_block}>
                                <div className={css.series_counter}>
                                    {props.done_series_count}/{props.full_series_count}
                                </div>
                                <img src={series_counter} width={11} height={10}/>
                            </div>
                            <div className={css.voice_dub_count_block}>
                                <div className={css.voice_dub_count}>
                                    {props.voice_dub_count}
                                </div>
                                <img src={voice_dub_count} width={6} height={9} />
                            </div>
                            <div className={css.quality}>
                                {props.quality}
                            </div>
                            <div className={css.view_type}>
                                {props.view_type}
                            </div>
                        </div>
                    </div>
                    <div className={css.old_raiting}>
                        {props.old_raiting}
                    </div>
                </div>
                <div className={css.description}>
                    {props.description}
                </div>
                <div className={css.bottom_block}>
                    <div className={css.genre}>
                        Жанр: {props.genre}.
                    </div>
                    <div className={css.date_present}>
                        Коли: {props.date_present}, {props.year_present} р.
                    </div>
                    <div className={css.series_length}>
                        Тривалість: {props.series_length} хв.
                    </div>
                    <NavLink className={css.trailer_link} to={props.nav_link_path}>
                        Трейлер <img src={play_circle_black} width={12} height={12} />
                    </NavLink>
                </div>
            </div>
            <NavLink 
                className={visibily_image_overlay}
                onMouseOver={() => mouse_hover(true)}
                onMouseLeave={() => mouse_hover(false)}
                to={props.nav_link_path}>
                <img className={play_circle} src={play_circle_black} />
            </NavLink>
            <img className={css.poster_img} src={props.img_path}/>
        </div>
    )
};

export default NA_Blocks;