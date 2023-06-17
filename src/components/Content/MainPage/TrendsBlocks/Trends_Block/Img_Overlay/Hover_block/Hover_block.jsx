import React, { useState } from "react";

import css from "./Hover_block.module.css";

const Hover_block = ({ props, set_visible }) => {
	const hover_block_active = [css.content, css.active].join(" ");

	const show_hover_block = (bool) => {
		switch(bool){
			case true:
				set_visible(hover_block_active);
				break;
			case false:
				set_visible(css.content)
		};
	};

	return (
		<div className={css.content}>
			
		</div>
	);
};

export default Hover_block;
