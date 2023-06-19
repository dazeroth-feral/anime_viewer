import React from "react";

import css from "./Hover_Block.module.css";
import { NavLink } from "react-router-dom";

const star_gold = "media/icons/star_gold.svg";
const play_circle_black = "media/icons/play_circle_black.svg";

const series_counter = "media/icons/series_counter.svg";
const voice_dub_count = "media/icons/voice_dub_count.svg";

const Hover_Block = ({ props, style_props }) => {
	return (
		<div className={style_props.hover_block}>
		<div className={css.name}>
			{props.name}
		</div>
		<div className={[css.translate_type, css.gold].join(" ")}>
			{props.translate_type}
		</div>
		<div className={css.information_block}>
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
						<img src={series_counter} width={11} height={10}/>
					</div>
					<div className={css.voice_dub_count_block}>
						<div className={css.voice_dub_count}>
							{props.voice_dub_count}
						</div>
						<img src={voice_dub_count} width={6} height={9} />
					</div>
					<div className={css.quality}>
						{props.quality}
					</div>
					<div className={css.view_type}>
						{props.view_type}
					</div>
				</div>
			</div>
			<div className={css.old_raiting}>
				{props.old_raiting}
			</div>
		</div>
		<div className={css.description}>
			{props.description}
		</div>
		<div className={css.bottom_block}>
			<div className={css.genre}>
				Жанр: {props.genre}.
			</div>
			<div className={css.date_present}>
				Коли: {props.date_present}, {props.year_present} р.
			</div>
			<div className={css.series_length}>
				Тривалість: {props.series_length} хв.
			</div>
			<NavLink className={css.trailer_link} to={props.nav_link_path}>
				Трейлер <img src={play_circle_black} width={12} height={12} />
			</NavLink>
		</div>
	</div>
	);
};

export default Hover_Block;
