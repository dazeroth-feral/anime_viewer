import css from "./BackgorundImg.module.css";

import React from 'react';

const BackgorundImg = ({ img_path, background_image_style }) => {


    return(
        <div className={css.content}>
            <img src={img_path} className={background_image_style} />
            <div className={css.image_overlay}></div>          
        </div>
    )
};

export default BackgorundImg;
