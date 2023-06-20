import React from "react";

import css from "./Bottom_Block.module.css";
import { NavLink } from "react-router-dom";

const play_circle_black = "media/icons/play_circle_black.svg";

const Bottom_Block = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.genre}>
				Жанр: {props.genre}.
			</div>
			<div className={css.date_present}>
				Коли: {props.date_present}, {props.year_present} р.
			</div>
			<div className={css.series_length}>
				Тривалість: {props.series_length} хв.
			</div>
			<NavLink className={css.trailer_link} to={props.nav_link_path}>
				Трейлер <img src={play_circle_black} width={12} height={12} />
			</NavLink>
		</div>
	);
};

export default Bottom_Block;
