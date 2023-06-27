import React, { useState } from 'react';

import css from "./Footer.module.css"
import { NavLink } from 'react-router-dom';

const UK_BUTTON_IMG = "media/footer/uk_button.svg";

const TIKTOK_IMG = "media/footer/tiktok.svg";
const DISCORD_IMG = "media/footer/discord.svg";
const TELEGRAM_IMG = "media/footer/telegram.svg";
const INSTAGRAM_IMG = "media/footer/instagram.svg";

const site_description_visible = [css.site_description, css.active].join(" ");

const Footer = ({state}) => {
    const [site_description_style, set_site_description_style] = useState(css.site_description)

    const site_description_switch = (bool) => {
        switch(bool){
            case true:
                set_site_description_style(site_description_visible);
                break;
            case false:
                set_site_description_style(css.site_description);
                break;
        }
    };

    return(
        <div 
            onMouseOver={() => site_description_switch(true)}
            onMouseOut={() => site_description_switch(false)}
            className={css.content}
        >
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
                    <div className={site_description_style}>
                        <div className={css.text_block}>
                            <div className={css.label}>
                                Світ україномовного аніме
                            </div>
                            <div className={css.description}>
                                Ласкаво просимо на наш сайт, де ви зможете зануритися в світ українського аніме. Відкрийте для себе різноманітні жанри та насолоджуйтесь оригінальними українськими озвучками, які створюють повну іммерсію в кожну історію.
                            </div>
                        </div>
                        <div className={css.h_top}/>
                    </div>
                    <div className={css.links_block}>
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
        </div>
    );
};

export default Footer;