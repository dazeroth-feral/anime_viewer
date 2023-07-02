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

	// На диво - одноразовий виклик анімації.
	const [background_image_style, set_background_image_style] = useState(css.recommendation_background_image);
	const [background_image_number, set_background_image_number] = useState(0);

	const [info_blocks_style, set_info_blocks_style] = useState(css.info_blocks);

	// .information_content.switch_animation_start, .information_name.switch_animation_start, .information_description.switch_animation_start
	const change_content = (block_number) => {
		set_background_image_style([css.recommendation_background_image, css.switch_animation_start].join(" "));
		set_info_blocks_style([css.info_blocks, css.switch_animation_start].join(" "));
		setTimeout(() => {
			set_background_image_number(block_number);
			set_background_image_style([css.recommendation_background_image, css.switch_animation_end].join(" "));
			set_info_blocks_style([css.info_blocks, css.switch_animation_end].join(" "));
		}, 1000)
	};
	
	const recommendations_Elements = recommendations_Object.map(
		(recommendation, index) => (
			<Rec_Blocks
				key={index}
				props={recommendation}
				background_image_style={background_image_style}
				info_blocks_style={info_blocks_style}
				state={state}
				change_content={change_content}
			/>
		)
	);

	return (
		<div className={css.content}>
			{recommendations_Elements[background_image_number]}
		</div>
	);
};

export default RecommendationBlock;
