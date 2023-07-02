import React from "react";

import css from "./Switch_Block.module.css";

const Switch_Block = ({props, change_content, block_number}) => {
    const handle_click = () => {
        change_content(block_number);
    };
    
    return(
        <div className={css.content}>
            <img className={css.switch_img} src={props.mini_img_path} />
            <div onClick={handle_click} className={css.img_overlay}>
                <span className={css.card_text}>
                    {props.name}
                </span>
            </div>
        </div>
    )
}

export default Switch_Block;