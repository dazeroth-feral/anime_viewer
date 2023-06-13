import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from "./Header.module.css"
import Search from './Search/Search';

const Header = (props) => {
    return(
        <div className={css.content}>
            <NavLink className={css.nav_link_site_name} to="/">
                Domosid<span className={css.blue}>T</span><span className={css.yellow}>V</span>
            </NavLink>
            <div className={css.nav_links_block}>
                
                <NavLink className={css.genre_link}>
                    Жанри
                </NavLink>

                <NavLink className={css.news_link}>
                    Новинки
                </NavLink>

                <NavLink className={css.announcements_link}>
                    Анонси
                </NavLink>

                <NavLink className={css.chat_link}>
                    Чат
                </NavLink>

                <NavLink className={css.nav_link_personal_cabinet} to="/">
                    <img src='media/icons/header_icons/user_not_logged_in_white.svg' />
                </NavLink>

                <Search />
            </div>
        </div>
    );
};

export default Header;