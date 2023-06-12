import React from "react";

import css from "./TrendsBlocks.module.css";
import Trends_Block from "./Trends_Block/Trends_Block";

const TrendsBlocks = ({state}) => {
	const trends_object = Object.keys(state).map(key => {
		const {
			name,

			navLink_playerPage_path,

			raiting,

			img_path,
		} = state[key];

		return {
			name,

			navLink_playerPage_path,

			raiting,

			img_path,
		}
	});

	let trends_elements = trends_object.map((trend_block, index) => (
		<Trends_Block props={trend_block} key={index}></Trends_Block>
	));

	return <div className={css.content}>{trends_elements}</div>;
};

export default TrendsBlocks;
