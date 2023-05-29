import React from 'react';
import { NavLink } from 'react-router-dom';

import css from "./Header.module.css"

const Header = (props) => {
    return(
        <div className={css.content}>
            <NavLink className={css.NavLink_SiteName} to="/">
                Domosid<span className={css.blue}>T</span><span className={css.yellow}>V</span>
            </NavLink>
            <div className={css.NavLinks}>
                <NavLink className={css.NavLink_Genres} to="/">Жанри</NavLink>
                <NavLink className={css.NavLink_Chat} to="/">Чат</NavLink>
                <NavLink className={css.NavLink_Search} to="/">Пошук</NavLink>
                <NavLink className={css.NavLink_PO} to="/">Особистий Кабінет</NavLink>
            </div>
        </div>
    );
};

export default Header;