import {PLR_PG, DET_PG, P_PATH} from "../../imports/redux_imports";

let initialState = {
    one_piece: {
        name: "Великий куш",
        description: "\"One Piece\" - це пригодницьке аніме, що розповідає про молодого піратського капітана Манкі Ді Луффі та його команду, які вирушають у шукацтві загадкового скарбу \"One Piece\". У своїй подорожі вони зустрічають небезпеки, сильних ворогів і нових союзників, досліджуючи фантастичний світ океану. Це епічне пригодницьке аніме з багатим світом, захоплюючими боївками та веселими персонажами.",

        raiting: "10",
        old_raiting: "12+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "26-го квітня",
        year_present: "2023",
        done_series_count: "10",
        full_series_count: "13",
        series_length: "24",
        voice_dub_count: "3",
        view_type: "TV",
        quality: "HD",

        nav_link_path: `${PLR_PG}/one_piece`,

        img_path: `${P_PATH}/one_piece.jpg`
    },

    black_clover: {
        name: "Чорна конюшина",
        description: "\"Black Clover\" - це фентезійне аніме, розташоване у світі, де магія є всеохоплюючою силою. Головний герой Аста, який народився без магічних здібностей, мріє стати Магом-Королем, найвищим рангом мага, щоб захистити своїх друзів і свій світ. За допомогою своєї надзвичайної фізичної сили та безкінечної вольової сили, Аста приєднується до магічного ордену \"Чорний Трилистник\" і стає учасником захоплюючих битв і пригод.",

        raiting: "10",
        old_raiting: "16+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "5-го лютого",
        year_present: "2023",
        done_series_count: "10",
        full_series_count: "13",
        series_length: "24",
        voice_dub_count: "3",
        view_type: "TV",
        quality: "HD",

        nav_link_path: `${PLR_PG}/one_piece`,

        img_path: `${P_PATH}/black_clover.jpg`
    },

    demon_slayer: {
        name: "Клинок, що знищує демонів",
        description: "\"Demon Slayer\" (також відомий як \"Kimetsu no Yaiba\") - це темне фентезійне аніме, що розповідає історію Танжіро Камадо, юнака, який стає відомим як \"Вбивця демонів\". Після того, як його родина була знищена і його сестра стала демоном, Танжіро приєднується до організації \"Компанія Вбивць Демонів\", щоб знайти лік для своєї сестри і помститися. Захоплюючі бої, чудова анімація та розкриття характерів роблять це аніме вражаючим і емоційно заворожуючим.",

        raiting: "8.7",
        old_raiting: "18+",
        genre: "Романтика, Драма, Комедія",
        translate_type: "Онґоінґ",
        date_present: "12-го березня",
        year_present: "2023",
        done_series_count: "10",
        full_series_count: "13",
        series_length: "24",
        voice_dub_count: "3",
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