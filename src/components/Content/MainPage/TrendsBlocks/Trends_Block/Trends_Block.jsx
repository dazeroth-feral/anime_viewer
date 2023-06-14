import React, { useState } from 'react';

import css from "./Trends_Block.module.css";
import Img_Overlay from './Img_Overlay/Img_Overlay';

const Trends_Block = ({props}) => {
    return (
        <div className={css.content}>
            <img src={props.img_path} className={css.img} />
            <Img_Overlay props={props} />
        </div>
    );
}

export default Trends_Block;
