import React from 'react';

import css from "./Links_Block.module.css"
import { NavLink } from 'react-router-dom';
import Contacts_Block from './Contacts_Block/Contacts_Block';

const Links_Block = ({ state }) => {


    return (
            <div className={css.content}>
                <NavLink className={css.site_name} to={state.site_main_page_link}>
                    <span style={{ color: "white" }}>Domosid</span>
                    <span style={{ color: "#0094FF" }}>T</span>
                    <span style={{ color: "#FFF500" }}>V</span>
                </NavLink>
                <Contacts_Block state={state} />
            </div>
    );
};

export default Links_Block;