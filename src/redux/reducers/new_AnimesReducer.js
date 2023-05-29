let initialState = {
    one_piece: {
        anime_Name: "One Piece",
        anime_Description: "Text",
        nav_Link_Path: "/one_piece",
        img_Path: "media/anime_poster/one_piece.jpg"
    }
};

const new_AnimesReducer = (store = initialState, action) => {
    switch (action.type){
        default:
            return store;
    }
};

export default new_AnimesReducer;