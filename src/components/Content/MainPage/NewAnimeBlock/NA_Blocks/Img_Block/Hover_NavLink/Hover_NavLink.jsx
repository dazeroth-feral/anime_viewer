import React, { useState } from "react";

import css from "./Hover_NavLink.module.css";
import { NavLink } from "react-router-dom";

const play_circle_black = "media/icons/play_circle_black.svg";

const Hover_NavLink = ({ props, style_props }) => {
	return (
		<NavLink
			className={style_props.visibily_image_overlay}
			to={props.nav_link_path}
		>
			<img className={style_props.play_circle} src={play_circle_black} />
		</NavLink>
	);
};

export default Hover_NavLink;
