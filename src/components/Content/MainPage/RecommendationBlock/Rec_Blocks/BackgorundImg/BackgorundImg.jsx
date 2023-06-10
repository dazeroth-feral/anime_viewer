import css from "./BackgorundImg.module.css";

import React from 'react';

const BackgorundImg = ({img_path}) => {


    return(
        <div className={css.content}>
            <img src={img_path} className={css.anime_Image} />
            <div className={css.image_overlay}></div>          
        </div>
    )
};

export default BackgorundImg;
