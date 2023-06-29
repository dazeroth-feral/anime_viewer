import css from "./NewAnimeBlock.module.css";

import NA_Blocks from "./NA_Blocks/NA_Blocks";

const NewAnimeBlock = ({ state }) => {
	const newAnimes_Object = Object.keys(state).map((key) => {
		const {
            name,
            description,

            raiting,
            old_raiting,
            genre,
            translate_type,
            date_present,
            year_present,
            done_series_count,
            full_series_count,
            series_length,
            voice_dub_count,
            view_type,
            quality,

            nav_link_path,

            img_path,
		} = state[key];
		return {
            name,
            description,

            raiting,
            old_raiting,
            genre,
            translate_type,
            date_present,
            year_present,
            done_series_count,
            full_series_count,
            voice_dub_count,
            series_length,
            view_type,
            quality,

            nav_link_path,

            img_path,
		};
	});

	let newAnimes_Elements = newAnimes_Object.map((newAnime, index) => (
		<NA_Blocks key={index} props={newAnime} index={index} />
	));

	return (
        <div className={css.content}>
            <div className={css.title}>
                Нові аніме:
            </div>
            <div className={css.flex_block}>
                {newAnimes_Elements}
            </div>
        </div>
    );
};

export default NewAnimeBlock;
