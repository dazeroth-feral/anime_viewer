const GET_RECOMMENDATION = "GET_RECOMMENDATION_FROM_STORE";

let initialState = {
    demon_slayer: {
        anime_Raiting: "8.7",
        anime_Name: "Клинок, що знищує демонів",
        anime_Description: "Після важкої битви з демонами, Танзіро Камадо потребує нового меча і разом зі своєю сестрою-демоном вирушає в село ковалів. Проте їх мирне життя порушує з'явлення небезпечних демонів, і вони повинні знову зіткнутися з ними, щоб вижити та покласти край демонічній загрозі, що тероризує їх країну століттями. Чи зможуть вони зберегти свої життя та перемогти цю страшну силу?",
        nav_Link_Path: "player_page/demon_slayer",
        date_Present: "9-го Квітеня, 2023 року",
        anime_Type: "Онґоінґ",
        img_Path: "media/recommendation_background/demon_slayer.png",
    }
};

const recommendationsReducer = (store = initialState, action) => {
    switch (action.type){
        default:
            return store;
    }

};

export default recommendationsReducer;