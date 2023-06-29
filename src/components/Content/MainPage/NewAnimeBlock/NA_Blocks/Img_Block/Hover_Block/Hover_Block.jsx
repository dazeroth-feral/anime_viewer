import React from "react";

import css from "./Hover_Block.module.css";
import Information_Block from "./Information_Block/Information_Block";
import Bottom_Block from "./Bottom_Block/Bottom_Block";
import Top_Block from "./Top_Block/Top_Block";

const Hover_Block = ({ props, style_props, index }) => {
	if((index + 1) % 5 === 0){
		return (
			<div className={[style_props.hover_block, style_props.hover_block_lefted].join(" ")}>
				<Top_Block props={props} />
				<Information_Block props={props} />
				<div className={css.description}>{props.description}</div>
				<Bottom_Block props={props} />
			</div>
		);
	}
	else{
		return (
			<div className={style_props.hover_block}>
				<Top_Block props={props} />
				<Information_Block props={props} />
				<div className={css.description}>{props.description}</div>
				<Bottom_Block props={props} />
			</div>
		);		
	}
};

export default Hover_Block;
