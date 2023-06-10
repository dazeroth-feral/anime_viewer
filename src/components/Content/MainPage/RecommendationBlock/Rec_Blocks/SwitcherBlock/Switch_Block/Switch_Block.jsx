import React from "react";

import css from "./Switch_Block.module.css";

const Switch_Block = ({props, set_recommendation_block, block_number}) => {
    return(
        <div className={css.content}>
            <img className={css.switch_img} src={props.mini_img_path} />
            <div onClick={() => set_recommendation_block(block_number)} className={css.img_overlay}>
                <span className={css.card_text}>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

export default Switch_Block;