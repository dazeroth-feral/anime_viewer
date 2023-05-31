import React from "react";
import { useParams } from 'react-router-dom';

import css from "./PlayerPage.module.css";

const PlayerPage = ({anime_Img}) => {
    const {anime_Name} = useParams();

    const one_piece = <iframe src="https://ashdi.vip/vod/75736" width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>;
    const demon_slayer = <iframe src="https://ashdi.vip/vod/8302" width="100%" height="100%" frameborder="0" allowfullscreen=""></iframe>

    const return_video = () => {
        switch(anime_Name){
            case "demon_slayer":
                return demon_slayer;
            case "one_piece":
                return one_piece;
            default:
                return <div>Відео незнайдено. :c</div>
        }  
    };

    return(
        <div className={css.content}>
            <img src={anime_Img} className={css.anime_Image} />

            {return_video()}
        </div>
    )
};

export default PlayerPage;