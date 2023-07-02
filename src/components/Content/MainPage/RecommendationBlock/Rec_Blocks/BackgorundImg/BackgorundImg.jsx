import css from "./BackgorundImg.module.css";

import React from 'react';

const start_animation = [css.recommendation_background_image, css.switch_animation_start].join(" ");
const end_animation = [css.recommendation_background_image, css.switch_animation_end].join(" ");

const BackgorundImg = ({ img_path, background_animated }) => {


    return(
        <div className={css.content}>
            <img src={img_path} className={
                background_animated ? start_animation : end_animation
            } />
            <div className={css.image_overlay}></div>          
        </div>
    )
};

export default BackgorundImg;
