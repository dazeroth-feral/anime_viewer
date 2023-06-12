import {PLR_PG, DET_PG, P_PATH} from "../../imports/redux_imports";

let initialState = {
    one_piece: {
        name: "Великий куш",
        description: "",

        raiting: "10",
        old_raiting: "12+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "26-го квітня",
        year_present: "2023",
        series_count: "",
        voise_dub_count: "",
        view_type: "TV",
        quality: "HD",

        nav_link_path: `${PLR_PG}/one_piece`,

        img_path: `${P_PATH}/one_piece.jpg`
    },

    black_clover: {
        name: "Чорна конюшина",
        description: "",

        raiting: "10",
        old_raiting: "16+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "5-го лютого",
        year_present: "2023",
        series_count: "",
        voise_dub_count: "",
        view_type: "TV",
        quality: "HD",

        nav_link_path: `${PLR_PG}/one_piece`,

        img_path: `${P_PATH}/black_clover.jpg`
    },

    demon_slayer: {
        name: "Клинок, що знищує демонів",
        description: "",

        raiting: "8.7",
        old_raiting: "18+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "12-го березня",
        year_present: "2023",
        series_count: "",
        voise_dub_count: "",
        view_type: "TV",
        quality: "HD",

        nav_link_path: `${PLR_PG}/demon_slayer`,

        img_path: `${P_PATH}/demon_slayer.jpg`
    },
};

const new_AnimesReducer = (store = initialState, action) => {
    switch (action.type){
        default:
            return store;
    }
};

export default new_AnimesReducer;