import css from "./NA_Blocks.module.css";
import { NavLink } from 'react-router-dom';

// name,
// description,

// raiting,
// old_raiting,
// genre,
// translate_type,
// date_present,
// year_present,
// series_count,
// voise_dub_count,
// view_type,
// quality,

// nav_link_path,

// img_path,

const NA_Blocks = ({props}) => {
    return(
        <div className={css.content}>
            <img className={css.poster_img} src={props.img_path} alt="img" />

            <div className={css.text_block}>
                <div className={css.top_text_block}>
                    <div className={css.previve_name}>
                        {props.name}
                    </div>
                    <div className={css.previve_old_raiting}>
                        {props.old_raiting}
                    </div>
                </div>
                <div className={css.bottom_text_block}>
                    <div className={css.previve_year_present}>
                        {props.year_present}
                    </div>
                    <div className={css.previve_genre}>
                        Жанр: {props.genre}
                    </div>
                    <div className={css.previve_raiting}>
                        <img src="media/icons/star_gold.svg" width={10}/>
                        {props.raiting}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NA_Blocks;