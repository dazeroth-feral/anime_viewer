import css from "./NA_Blocks.module.css";
import { NavLink } from 'react-router-dom';
import Text_Block from "./Text_Block/Text_Block";

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
            <Text_Block props={props} />
        </div>
    )
};

export default NA_Blocks;