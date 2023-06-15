import React from "react";

import css from "./Bottom_Block.module.css";

const Bottom_Block = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.previve_year_present}>{props.year_present}</div>
			<div className={css.previve_genre}>Жанр: {props.genre}</div>
			<div className={css.previve_raiting}>
				<img src="media/icons/star_gold.svg" width={10} />
				{props.raiting}
			</div>
		</div>
	);
};

export default Bottom_Block;
