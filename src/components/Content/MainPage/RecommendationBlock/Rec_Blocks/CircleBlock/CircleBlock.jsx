import React from "react";

import css from "./CircleBlock.module.css";

const CircleBlock = ({state}) => {
    let slide_number = 1;

    return(
        <div className={css.content}>
            <div className={
                slide_number == 1 ? css.circle_active : css.circle
            } />
            <div className={
                slide_number == 2 ? css.circle_active : css.circle
            } />
            <div className={
                slide_number == 3 ? css.circle_active : css.circle
            } />
            <div className={
                slide_number == 4 ? css.circle_active : css.circle
            } />         
        </div>
    )
}

export default CircleBlock;