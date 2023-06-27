import React from 'react';

import css from "./Left_Block.module.css"
import { NavLink } from 'react-router-dom';

const UK_BUTTON_IMG = "media/footer/uk_button.svg";

const Left_Block = ({ state }) => {


    return (
        <div className={css.content}>
            <img className={css.img_block} src="media/footer/anime_tyan.png" width={250} height={200} />
            <div className={css.text_block}>
                <div className={css.top_block}>
                    <div>Підтримати</div>
                    <div>Збройні Сили Україні</div>
                </div>
                <div className={css.bottom_block}>
                    <NavLink className={css.button_block} to={state.donate}>
                        <img src={UK_BUTTON_IMG} />
                        <span className={css.support_button_text}>Підтримати</span>
                    </NavLink>
                    <div className={css.description}>
                        <div>Вони забезпечують мир, а ми</div>
                        <div>можемо забезпечити їхні потреби.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left_Block;