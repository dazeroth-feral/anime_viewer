import css from "./NewAnimeBlock.module.css";

import NA_Blocks from "./NA_Blocks/NA_Blocks";

const NewAnimeBlock = ({state}) => {
    const newAnimes_Object = Object.keys(state).map((key) => {
        const { anime_Name, anime_Description, nav_Link_Path, img_Path } = state[key];
        return { anime_Name, anime_Description, nav_Link_Path, img_Path };
    });

    let newAnimes_Elements = newAnimes_Object.map((newAnime) => (
        <NA_Blocks
            props={newAnime}
        />
    ))

    return(
        <div className={css.content}>
            {newAnimes_Elements}
        </div>
    )
}

export default NewAnimeBlock;