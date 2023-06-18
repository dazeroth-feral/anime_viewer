import React, { useState } from "react";

import css from "./Hover_block.module.css";

import { NavLink } from "react-router-dom";

const play_circle_black = "media/icons/play_circle_black.svg";

const Hover_block = ({ props, hover_block_style, play_circle }) => {
	return (
		<NavLink to={props.navLink_playerPage_path} className={hover_block_style}>
			<img className={play_circle} src={play_circle_black} />
		</NavLink>
	);
};

export default Hover_block;
