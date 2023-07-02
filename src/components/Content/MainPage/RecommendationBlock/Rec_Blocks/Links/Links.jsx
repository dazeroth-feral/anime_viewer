import css from "./Links.module.css";

import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({props, info_blocks_style}) => {
    return(
        <div className={info_blocks_style}>
            <div className={css.content}>
                <div className={css.container_for__Link_to_Anime}>
                    <NavLink to={props.navLink_playerPage_path} className={css.link_to_Anime}>
                        <img src="media/icons/recommendationBlock_icons/play_circle_link_black.svg" width={18} />
                        Перегляд
                    </NavLink>
                </div>

                <div className={css.container_for__link_to_more_details}>
                    <NavLink to={props.navLink_detailsPage_path} className={css.link_to_more_details}>
                    Більше
                    <img src="media/icons/recommendationBlock_icons/link_to_more_details.svg" width={18} />
                    </NavLink>
                </div>
            </div>   
        </div>
    )
};

export default Links;
