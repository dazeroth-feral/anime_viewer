import React from "react";

import css from "./Top_Block.module.css";

const Top_Block = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.previve_name}>{props.name}</div>
			<div className={css.previve_old_raiting}>{props.old_raiting}</div>
		</div>
	);
};

export default Top_Block;
