import React, { useState } from "react";

import css from "./Img_Block.module.css";
import { NavLink } from "react-router-dom";
import Hover_Block from "./Hover_Block/Hover_Block";
import Hover_NavLink from "./Hover_NavLink/Hover_NavLink";

const play_circle_black = "media/icons/play_circle_black.svg";

const NA_Blocks = ({ props }) => {
	const [play_circle, set_play_circle] = useState(css.play_circle_img);
	const [visibily_image_overlay, set_visibily_image_overlay] = useState(
		css.image_overlay
	);
	const [hover_block, set_on_hover_block] = useState(css.hover_block);

	const play_circle_active = [css.play_circle_img, css.active].join(" ");
	const visibily_image_overlay_active = [css.image_overlay, css.active].join(
		" "
	);
	const hover_block_active = [css.hover_block, css.active].join(" ");

	const mouse_hover = (bool) => {
		switch (bool) {
			case true:
				set_play_circle(play_circle_active);
				set_visibily_image_overlay(visibily_image_overlay_active);
				set_on_hover_block(hover_block_active);
				break;
			case false:
				set_play_circle(css.play_circle_img);
				set_visibily_image_overlay(css.image_overlay);
				set_on_hover_block(css.hover_block);
		}
	};

	let style_props = {
		play_circle: play_circle,
		visibily_image_overlay: visibily_image_overlay,
		hover_block: hover_block,
	};

	return (
		<div
			onMouseOver={() => mouse_hover(true)}
			onMouseLeave={() => mouse_hover(false)}
			className={css.content}
		>
			<Hover_Block props={props} style_props={style_props} />
			<Hover_NavLink style_props={style_props} props={props} />
			<img className={css.poster_img} src={props.img_path} />
		</div>
	);
};

export default NA_Blocks;
