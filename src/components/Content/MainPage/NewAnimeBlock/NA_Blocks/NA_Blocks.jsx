import React from "react";

import css from "./NA_Blocks.module.css";

import Img_Block from "./Img_Block/Img_Block";
import Text_Block from "./Text_Block/Text_Block";
import On_Hover_Window from "./On_Hover_Window/On_Hover_Window";

const NA_Blocks = ({props}) => {
    

    return(
        <div className={css.content}>
            <Img_Block props={props}/>
            <Text_Block props={props} />
            {/* <On_Hover_Window /> */}
        </div>
    )
};

export default NA_Blocks;