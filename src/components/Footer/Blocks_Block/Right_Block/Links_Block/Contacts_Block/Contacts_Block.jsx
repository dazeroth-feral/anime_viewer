import React from 'react';

import css from "./Contacts_Block.module.css"
import { NavLink } from 'react-router-dom';

const TIKTOK_IMG = "media/footer/tiktok.svg";
const DISCORD_IMG = "media/footer/discord.svg";
const TELEGRAM_IMG = "media/footer/telegram.svg";
const INSTAGRAM_IMG = "media/footer/instagram.svg";

const Contacts_Block = ({ state }) => {


    return (

        <div className={css.content}>
            <NavLink className={css.tiktok} to={state.nav_links.tiktok_link}>
                <img src={TIKTOK_IMG} />
            </NavLink>
            <NavLink className={css.discord} to={state.nav_links.discord_link}>
                <img src={DISCORD_IMG} />
            </NavLink>
            <NavLink className={css.telegram} to={state.nav_links.telegram_link}>
                <img src={TELEGRAM_IMG} />
            </NavLink>
            <NavLink className={css.instagram} to={state.nav_links.instagram_link}>
                <img src={INSTAGRAM_IMG} />
            </NavLink>
        </div>

    );
};

export default Contacts_Block;