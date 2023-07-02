import css from "./RecommendationBlock.module.css";

import React, { useState } from "react";

import Rec_Blocks from "./Rec_Blocks/Rec_Blocks";

const background_image_style_animated = [css.recommendation_background_image, css.switch_animation].join(" ");

const RecommendationBlock = ({ state }) => {
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

	const [content_array_number, set_content_array_number] = useState(0);
	const [background_animated, set_background_animated] = useState(false);
	const [info_blocks_style, set_info_blocks_style] = useState(css.info_blocks);

	// .information_content.switch_animation_start, .information_name.switch_animation_start, .information_description.switch_animation_start
	const change_content = (block_number) => {
		set_background_animated(true);
		set_info_blocks_style([css.info_blocks, css.switch_animation_start].join(" "));
		setTimeout(() => {
			set_content_array_number(block_number);
			set_info_blocks_style([css.info_blocks, css.switch_animation_end].join(" "));
			set_background_animated(false);
		}, 1000)
	};
	
	const recommendations_Elements = recommendations_Object.map(
		(recommendation, index) => (
			<Rec_Blocks
				key={index}
				props={recommendation}
				info_blocks_style={info_blocks_style}
				state={state}
				change_content={change_content}

				background_animated={background_animated}
			/>
		)
	);

	return (
		<div className={css.content}>
			{recommendations_Elements[content_array_number]}
		</div>
	);
};

export default RecommendationBlock;
