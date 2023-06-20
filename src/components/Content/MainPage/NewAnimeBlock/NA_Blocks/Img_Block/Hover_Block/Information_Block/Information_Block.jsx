import React from "react";

import css from "./Information_Block.module.css";

const star_gold = "media/icons/star_gold.svg";

const series_counter = "media/icons/series_counter.svg";
const voice_dub_count = "media/icons/voice_dub_count.svg";

const Information_Block = ({ props }) => {
	return (
		<div className={css.content}>
			<div className={css.left_block}>
				<div className={css.raiting}>
					<img src={star_gold} width={16} height={16} />
					<div>{props.raiting}</div>
				</div>
				<div className={css.counters_block}>
					<div className={css.series_counter_block}>
						<div className={css.series_counter}>
							{props.done_series_count}/{props.full_series_count}
						</div>
						<img src={series_counter} width={11} height={10} />
					</div>
					<div className={css.voice_dub_count_block}>
						<div className={css.voice_dub_count}>
							{props.voice_dub_count}
						</div>
						<img src={voice_dub_count} width={6} height={9} />
					</div>
					<div className={css.quality}>{props.quality}</div>
					<div className={css.view_type}>{props.view_type}</div>
				</div>
			</div>
			<div className={css.old_raiting}>
				{props.old_raiting}
			</div>
		</div>
	);
};

export default Information_Block;
