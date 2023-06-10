import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import css from "./Header.module.css"
import MyModal from '../MyModal/MyModal';

const Header = (props) => {
    const [modalActive, setModalActive] = useState(false);

    const openModal = () => {
      setModalActive(true);
    };
  
    const closeModal = () => {
      setModalActive(false);
    };

    const [input_text, set_input_text] = useState("");

    return(
        <div className={css.content}>
            <NavLink className={css.NavLink_SiteName} to="/">
                Domosid<span className={css.blue}>T</span><span className={css.yellow}>V</span>
            </NavLink>
            <div className={css.NavLinks}>
                
                <NavLink>
                    Жанри
                </NavLink>

                <NavLink>
                    Новинки
                </NavLink>

                <NavLink>
                    Анонси
                </NavLink>

                <NavLink>
                    Чат
                </NavLink>

                <NavLink className={css.NavLink_Search} onClick={openModal}>
                    <img src='media/icons/header_icons/search_white.svg' />
                </NavLink>

                <NavLink className={css.NavLink_PO} to="/">
                    <img src='media/icons/header_icons/user_not_logged_in_white.svg' />
                </NavLink>

                <MyModal isActive={modalActive} close={closeModal}>
                    <input value={input_text} onChange={e => set_input_text(e.target.value)} />
                    <button><NavLink
                        className={css.more_search_optional}
                        to="/"   
                    >Розширений пошук</NavLink></button>
                </MyModal>
            </div>
        </div>
    );
};

export default Header;