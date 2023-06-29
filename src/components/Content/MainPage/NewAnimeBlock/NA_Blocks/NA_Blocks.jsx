import React from "react";

import css from "./NA_Blocks.module.css";

import Img_Block from "./Img_Block/Img_Block";
import Text_Block from "./Text_Block/Text_Block";

const NA_Blocks = ({props, index}) => {
    return(
        <div className={css.content}>
            <Img_Block props={props} index={index} />
            <Text_Block props={props} />
        </div>
    )
};

export default NA_Blocks;