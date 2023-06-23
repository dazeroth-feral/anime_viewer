import React from 'react';

import css from "./Footer.module.css"
import { NavLink } from 'react-router-dom';

const UK_BUTTON_IMG = "media/footer/uk_button.svg";

const TIKTOK_IMG = "media/footer/tiktok.svg";
const DISCORD_IMG = "media/footer/discord.svg";
const TELEGRAM_IMG = "media/footer/telegram.svg";
const INSTAGRAM_IMG = "media/footer/instagram.svg";

const Footer = ({state}) => {
    return(
        <div className={css.content}>
            <div className={css.gradient_line} />
            <div className={css.blocks}>
                <div className={css.left_block}>
                    <img className={css.left_block} src="media/footer/anime_tyan.png" width={250} height={200} />
                    <div className={css.right_block}>
                        <div className={css.top_block}>
                            <div>Підтримати</div>
                            <div>Збройні Сили Україні</div>
                        </div>
                        <div className={css.bottom_block}>
                            <NavLink className={css.left_block} to="/donate">
                                <img src={UK_BUTTON_IMG} />
                                <span className={css.support_button_text}>Підтримати</span>
                            </NavLink>
                            <div className={css.right_block}>
                                <div>Вони забезпечують мир, а ми</div>
                                <div>можемо забезпечити їхні потреби.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.right_block}>
                    <div className={css.site_name}>
                        <span style={{color: "white"}}>Domosid</span>
                        <span style={{color: "#0094FF"}}>T</span>
                        <span style={{color: "#FFF500"}}>V</span>
                    </div>
                    <div className={css.contacts}>
                        <NavLink className={css.tiktok}>
                            <img src={TIKTOK_IMG} />
                        </NavLink>
                        <NavLink className={css.discord}>
                            <img src={DISCORD_IMG} />
                        </NavLink>
                        <NavLink className={css.telegram}>
                            <img src={TELEGRAM_IMG} />
                        </NavLink>
                        <NavLink className={css.instagram}>
                            <img src={INSTAGRAM_IMG} />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;