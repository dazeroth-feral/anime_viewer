import React from "react";

import css from "./Hover_Block.module.css";
import Information_Block from "./Information_Block/Information_Block";
import Bottom_Block from "./Bottom_Block/Bottom_Block";
import Top_Block from "./Top_Block/Top_Block";

const Hover_Block = ({ props, style_props }) => {
	return (
		<div className={style_props.hover_block}>
			<Top_Block props={props} />
			<Information_Block props={props} />
			<div className={css.description}>{props.description}</div>
			<Bottom_Block props={props} />
		</div>
	);
};

export default Hover_Block;
