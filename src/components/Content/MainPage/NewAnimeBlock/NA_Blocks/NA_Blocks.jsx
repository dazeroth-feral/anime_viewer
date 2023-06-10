import css from "./NA_Blocks.module.css";
import { NavLink } from 'react-router-dom';

const NA_Blocks = ({props}) => {
    return(
        <div className={css.content}>
            <img className={css.anime_Img} src={props.img_Path} alt="img" />

            <div className={css.text_Block}>
                <div className={css.main_information}>
                    <NavLink className={css.NavLink_AnimePage} to={props.nav_Link_Path}>
                        {props.anime_Name}
                    </NavLink>
                    
                    <div className={css.anime_Raiting}>
                        <span style={{color:"white", fontSize: 16}}>Рейтинг аніме:</span> <span style={{fontSize: 18, marginRight: 16}}>{props.anime_Raiting}</span>
                    </div>

                    <div className={css.anime_Type}>
                        <span style={{color:"white", fontSize: 16}}>Жанр:</span> <span style={{fontSize: 18,  marginRight: 16}}>{props.anime_Type}</span>
                    </div>
                </div>

                <div className={css.anime_Descroptions}>
                    <span style={{color:"white", fontSize: 16}}>Опис:</span> <span style={{paddingRight: 8}}>{props.anime_Description}</span>
                </div>
            </div>
        </div>
    )
};

export default NA_Blocks;