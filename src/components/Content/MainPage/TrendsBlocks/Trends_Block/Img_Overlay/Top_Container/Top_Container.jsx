import React from "react";

import css from "./Top_Container.module.css";

const star_icon = "media/icons/star_gold.svg";

const Top_Container = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.raiting}>
				<img src={star_icon} className={css.raiting_img} />
				{props.raiting}
			</div>
			<div className={css.raiting_overlay}></div>
		</div>
	);
};

export default Top_Container;
