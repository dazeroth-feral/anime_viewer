import React, { useState } from "react";

import css from "./Img_Overlay.module.css";
import Top_Container from "./Top_Container/Top_Container";
import Bottom_Container from "./Bottom_Container/Bottom_Container";
import Hover_block from "./Hover_block/Hover_block";
import { NavLink } from "react-router-dom";

const play_circle_black = "media/icons/play_circle_black.svg";

const Img_Overlay = ({ props }) => {
	const [hover_block_style, set_hover_block_style] = useState(css.hover_block);
	const [play_circle, set_play_circle] = useState(css.play_circle);

	const hover_block_active = [css.hover_block, css.active].join(" ");
	const play_circle_active = [css.play_circle, css.active].join(" ");

	const show_hover_block = (bool) => {
		switch(bool){
			case true:
				set_hover_block_style(hover_block_active);
				set_play_circle(play_circle_active);
				break;
			case false:
				set_hover_block_style(css.hover_block);
				set_play_circle(css.play_circle);
				break;
		};
	};

	return (
		<div onMouseOver={() => show_hover_block(true)} onMouseLeave={() => show_hover_block(false)} className={css.content}>
			<NavLink to={props.navLink_playerPage_path} className={hover_block_style}>
				<img className={play_circle} src={play_circle_black} />
			</NavLink>
			{/* <Hover_block props={props}/> */}
            <Top_Container props={props} />
            <Bottom_Container props={props} />
		</div>
	);
};

export default Img_Overlay;
