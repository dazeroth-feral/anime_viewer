import css from "./RecommendationBlock.module.css";

import React, { useState } from "react";

import Rec_Blocks from "./Rec_Blocks/Rec_Blocks";

const RecommendationBlock = ({ state }) => {
	const [recommendation_block_number, setRecommendation_block_number] =
		useState(0);

	const recommendations_Object = Object.keys(state).map((key) => {
		const {
			raiting,

			name,
			description,

			navLink_playerPage_path,
			navLink_detailsPage_path,

			date_present,
			genre,
			view_type,
			series_length,
			quality,

			big_img_path,
			mini_img_path,
		} = state[key];

		return {
			raiting,

			name,
			description,

			navLink_playerPage_path,
			navLink_detailsPage_path,

			date_present,
			genre,
			view_type,
			series_length,
			quality,

			big_img_path,
			mini_img_path,
		};
	});

	let recommendations_Elements = recommendations_Object.map(
		(recommendation, index) => (
			<Rec_Blocks
				key={index}
				props={recommendation}
				state={state}
				set_recommendation_block={setRecommendation_block_number}
			/>
		)
	);

	return (
		<div className={css.content}>
			{recommendations_Elements[recommendation_block_number]}
		</div>
	);
};

export default RecommendationBlock;
