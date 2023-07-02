import React from "react";

import css from "./SwitcherBlock.module.css";
import Switch_Block from "./Switch_Block/Switch_Block";

const SwitcherBlock = ({ state, change_content }) => {
	const switchers_Object = Object.keys(state).map((key) => {
		const {
			name,

			mini_img_path,
		} = state[key];

		return {
			name,

			mini_img_path,
		};
	});

	let switchers_elements = switchers_Object.map((switchers, index) => (
		<Switch_Block
			key={index}
			props={switchers}
			change_content={change_content}
			block_number={index}
		/>
	));

	return <div className={css.content}>{switchers_elements}</div>;
};

export default SwitcherBlock;