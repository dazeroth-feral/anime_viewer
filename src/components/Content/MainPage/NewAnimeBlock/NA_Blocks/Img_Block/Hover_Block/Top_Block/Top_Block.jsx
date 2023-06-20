import React from "react";

import css from "./Top_Block.module.css";

const Top_Block = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.name}>{props.name}</div>
			<div className={[css.translate_type, css.gold].join(" ")}>
				{props.translate_type}
			</div>
		</div>
	);
};

export default Top_Block;
