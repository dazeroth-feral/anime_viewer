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

    return(
        <div className={css.content}>
            <NavLink className={css.NavLink_SiteName} to="/">
                Domosid<span className={css.blue}>T</span><span className={css.yellow}>V</span>
            </NavLink>
            <div className={css.NavLinks}>

                <NavLink className={css.NavLink_Search} onClick={openModal}>
                    <img src='media/icons/header_icons/search_white.svg' />
                </NavLink>

                <MyModal isActive={modalActive} close={closeModal}>
                    <input type="text" style={{height: "auto", width: "1430px", borderRadius: "8px"}} />
                </MyModal>

                <NavLink className={css.NavLink_PO} to="/">
                    <img src='media/icons/header_icons/user_not_logged_in_white.svg' />
                </NavLink>
            </div>
        </div>
    );
};

export default Header;