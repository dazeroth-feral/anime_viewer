import css from "./RecommendationBlock.module.css";

import Rec_Blocks from "./Rec_Blocks/Rec_Blocks";

const RecommendationBlock = ({state}) => {
    const recommendations_Object = Object.keys(state).map((key) => {
        const { anime_Raiting, anime_Name, anime_Description, nav_Link_Path, date_Present, anime_Type, img_Path } = state[key];
        return { anime_Raiting, anime_Name, anime_Description, nav_Link_Path, date_Present, anime_Type, img_Path };
    });

    let recommendations_Elements = recommendations_Object.map((recommendation) => (
        <Rec_Blocks
            props={recommendation}
            state={state}
        />
    ))

    console.log(recommendations_Elements)

    return(
        <div className={css.content}>
            {recommendations_Elements}
        </div>
    )
}

export default RecommendationBlock;