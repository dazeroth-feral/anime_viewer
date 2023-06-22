import React from 'react';

import css from "./Footer.module.css"
import { NavLink } from 'react-router-dom';

const Footer = ({state}) => {
    return(
        <div className={css.content}>
            <div className={css.gradient_line} />
            <div className={css.blocks}>
                <div className={css.left_block}>
                    <img className={css.left_block} src={state.left_block.left_block.img_path} width={250} height={200} />
                    <div className={css.right_block}>
                        <div className={css.top_block}>
                            {state.left_block.right_block.name}
                        </div>
                        <div className={css.bottom_block}>
                            <NavLink className={css.left_block} to={state.left_block.right_block.nav_link_path}>
                                <span className={css.content}>
                                    Підтримати
                                </span>
                            </NavLink>
                            <div className={css.right_block}>
                                {state.left_block.right_block.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.center_block}>
                    {state.center_block.description}
                </div>
                <div className={css.right_block}>
                    <span style={{color: "white"}}>Domosid</span>
                    <span style={{color: "#0094FF"}}>T</span>
                    <span style={{color: "#FFF500"}}>V</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;