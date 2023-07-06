import css from "./PlayerPage.module.css";

import React from "react";
import { useParams } from 'react-router-dom';

const PlayerPage = ({state}) => {
    let { anime_name } = useParams();
    let information_object = state.recommendation_List[anime_name];

    return(
        <div className={css.all_content}>
            <div className={css.background_div}>
                <img 
                    className={css.background_image}
                    src={information_object.big_img_path} 
                />
                <div className={css.background_image_overlay} />
            </div>
            <div className={css.page_content}>
                <div className={css.information_block}>
                    <div className={css.left_block}>
                        <img
                            className={css.anime_poster} 
                            src={information_object.mini_img_path} 
                        />
                        <div className={css.bottom_buttons_from_poster}>

                        </div>
                    </div>
                    <div className={css.right_block}>
                        <div className={css.anime_name}>
                            {information_object.name}
                        </div>
                        <div className={css.en_anime_name}>
                            {information_object.name}
                        </div>
                        <div className={css.anime_metadate}>
                            <div className={css.quality}>
                                {information_object.quality} 
                            </div>
                            <div className={css.raiting_from_other_site}>
                                {information_object.raiting} 
                            </div>
                            <div className={
                                information_object.old_rating >= 18 
                                    ? [css.old_rating, css.red].join(" ")
                                    : [css.old_rating, css.white].join(" ")
                                }>
                                {`${information_object.old_rating}+`}
                            </div>
                        </div>
                        <div className={css.anime_bigger_metadate}>
                            <div className={css.BM_texts}>
                                <div>Рік:</div>
                                <div>Жанр:</div>
                                <div>Режисер:</div>
                                <div>В ролях:</div>
                                <div>Тривалість:</div>
                                <div>Озвучки:</div>
                            </div>
                            <div className={css.BM_information}>
                                <div>{`${information_object.year_present}`}</div>
                                <div>{`${information_object.genre}`}</div>
                                <div>{`${information_object.director}`}</div>
                                <div>{`${information_object.in_roles}`}</div>
                                <div>{`${information_object.series_length}`}</div>
                                <div>{`${information_object.voice_actings}`}</div>
                            </div>
                        </div>
                        <div className={css.anime_description_block}>
                            <div className={css.text_before_description}>
                                Про серіал: {information_object.name}
                            </div>
                            <div className={css.solo_description}>
                                {information_object.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.player_block}>
                    <div className={css.text_before_player}>
                        Дивитися серіал «Сага про Вінланд»  2 сезон українською мовою онлайн безкоштовно
                    </div>
                    <div className={css.player} />
                    <div className={css.button_after_player}>
                        <img src="media/icons/change_player_style.svg" />
                    </div>
                </div>
                <div className={css.comments_block}>
                
                </div>
            </div>
        </div>
    )
};

export default PlayerPage;