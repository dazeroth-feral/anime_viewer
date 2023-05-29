import css from "./NA_Blocks.module.css";
import { NavLink } from 'react-router-dom';

const NA_Blocks = ({props}) => {
    return(
        <div className={css.content}>
            <img className={css.anime_Img} src={props.img_Path} alt="img" />
            <div className={css.text_Block}>
                <NavLink className={css.NavLink_AnimePage} to={props.nav_Link_Path}>{props.anime_Name}</NavLink>
                <div className={css.anime_Descroptions}>{props.anime_Description}</div>
            </div>
        </div>
    )
};

export default NA_Blocks;