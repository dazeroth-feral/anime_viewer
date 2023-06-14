import React, { useState } from "react";

import css from "./Img_Overlay.module.css";
import { NavLink } from "react-router-dom";
import Top_Container from "./Top_Container/Top_Container";
import Bottom_Container from "./Bottom_Container/Bottom_Container";

const play_icon =
	"media/icons/recommendationBlock_icons/play_circle_details_white.svg";
const like_icon = "media/icons/like_icon.svg";
const star_icon = "media/icons/star_gold.svg";

const Img_Overlay = ({ props }) => {
	return (
		<div className={css.content}>
            <Top_Container props={props} />
            <Bottom_Container props={props} />
		</div>
	);
};

export default Img_Overlay;
