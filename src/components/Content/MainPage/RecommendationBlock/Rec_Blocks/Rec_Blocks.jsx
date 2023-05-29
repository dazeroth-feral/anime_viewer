import css from "./Rec_Blocks.module.css";

import React from 'react';
import { NavLink } from 'react-router-dom';

const Rec_Blocks = ({props}) => {
    return(
        <div className={css.content}>
            <img src={props.img_Path} className={css.anime_Image} />

            <div className={css.anime_Raiting}>
                {props.anime_Raiting}
            </div>

            <div className={css.anime_Name}>
                {props.anime_Name}
            </div>

            <div className={css.anime_Description}>
                {props.anime_Description}
            </div>

            <div className={css.Link_and_Litle_Info}>
                <div className={css.container_for_Link_to_Anime}>
                    <NavLink to={props.nav_Link_Path} className={css.link_to_Anime}>Перегляд ▶</NavLink>
                </div>
                <div className={css.litle_Info}>
                    <span className={css.gray}>{props.date_Present}</span>                    
                    {props.anime_Type}
                </div>
            </div>

            <div className={css.convas_More_Recommendation}>
                <div className={css.circle} />
                <div className={css.circle} />
                <div className={css.circle} />
                <div className={css.circle} />
            </div>            
        </div>
    )
};

export default Rec_Blocks;
