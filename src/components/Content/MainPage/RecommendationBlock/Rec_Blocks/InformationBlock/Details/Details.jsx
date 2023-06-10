import css from "./Details.module.css";

import React from 'react';

const Details = ({props}) => {
    return(
        <div className={css.content}>
            <div className={css.view_type}>
                <img src="media/icons/recommendationBlock_icons/play_circle_details_white.svg" />
                <span className={css. view_type__text}>
                    {props.view_type}
                </span>
            </div>
            <div className={css.series_length}>
                <img src="media/icons/recommendationBlock_icons/clock.svg" />
                <span className={css.series_length__text}>
                    {props.series_length}
                </span>
            </div>
            <div className={css.date_present}>
                <img src="media/icons/recommendationBlock_icons/calendar.svg" />
                <span className={css.date_present__text}>
                            {props.date_present}
                </span>
            </div>

            <div className={css.raiting}>
                <img src="media/icons/recommendationBlock_icons/raiting2.svg" />
                {props.raiting}
            </div>

            <div className={css.quality}>
                <span className={css.quality__text}>
                       {props.quality}
                </span>
            </div>
        </div>
    )
};

export default Details;
