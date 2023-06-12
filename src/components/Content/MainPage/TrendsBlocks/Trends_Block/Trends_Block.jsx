import React, { useState } from 'react';

import css from "./Trends_Block.module.css";
import { NavLink } from 'react-router-dom';

const play_icon = "media/icons/recommendationBlock_icons/play_circle_details_white.svg";
const like_icon = "media/icons/like_icon.svg";
const star_icon = "media/icons/star_gold.svg"

const Trends_Block = ({props}) => {
    const [liked, set_liked] = useState(css.button_like);
    const active_like_class = [css.button_like, css.active].join(" ");

    const like_click = () => {
        switch(liked){
            case css.button_like:
                set_liked(active_like_class);
                break;
            case active_like_class:
                set_liked(css.button_like);
                break;
        }
    };

    return (
        <div className={css.content}>
            <img src={props.img_path} className={css.img} />
            <div className={css.img_overlay}>
                <div className={css.top_container}>
                    <div className={css.raiting_overlay}></div>
                    <div className={css.raiting}>
                        <img src={star_icon} className={css.raiting_img}/>
                        {props.raiting}
                    </div>
                </div>
                <div className={css.bottom_container}>
                    <div className={css.card_text}>{props.name}</div>
                    <div className={css.button_container}>
                    <svg className={liked} onClick={() => like_click()} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8933 2.07333C13.5528 1.73267 13.1485 1.46243 12.7036 1.27805C12.2586 1.09368 11.7817 0.998779 11.3 0.998779C10.8183 0.998779 10.3414 1.09368 9.89643 1.27805C9.45146 1.46243 9.04717 1.73267 8.70667 2.07333L8 2.78L7.29333 2.07333C6.60554 1.38553 5.67269 0.999136 4.7 0.999136C3.72731 0.999136 2.79446 1.38553 2.10666 2.07333C1.41887 2.76112 1.03247 3.69397 1.03247 4.66666C1.03247 5.63935 1.41887 6.5722 2.10666 7.26L2.81333 7.96666L8 13.1533L13.1867 7.96666L13.8933 7.26C14.234 6.91949 14.5042 6.51521 14.6886 6.07023C14.873 5.62526 14.9679 5.14832 14.9679 4.66666C14.9679 4.185 14.873 3.70807 14.6886 3.26309C14.5042 2.81812 14.234 2.41383 13.8933 2.07333" />
                    </svg>

                        <NavLink to={props.navLink_playerPage_path}>
                            <img 
                                src={play_icon}
                                className={css.button_play}
                                style={{fill: "gold"}}
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trends_Block;
