let initialState = {
    one_piece: {
        anime_Raiting: "9.5",
        anime_Name: "One Piece",
        anime_Description: "Манкі Д. Луффі та його команда піратів шукають найбільший скарб у світі, 'One Piece', перетинаючи безліч пригод та битв.",
        nav_Link_Path: "player_page/one_piece",
        anime_Type: "Пригоди, Бойовик, Фентезі",
        img_Path: "media/anime_posters/one_piece.jpg"
    },
    
    demon_slayer: {
        anime_Raiting: "9",
        anime_Name: "Demon Slayer",
        anime_Description: "Танжіро, останній виживший з родини, стає мисливцем на демонів, щоб врятувати свою сестру та віддати шану своїм родичам.",
        nav_Link_Path: "player_page/demon_slayer",
        anime_Type: "Фентезі, Бойовик, Надприродне",
        img_Path: "media/anime_posters/demon_slayer.jpg"
    },
    
    naruto: {
        anime_Raiting: "9.2",
        anime_Name: "Naruto",
        anime_Description: "Наруто Узумакі мріє стати найвеличнішим ніндзя свого села, він збирає команду та бореться проти загроз для свого світу.",
        nav_Link_Path: "player_page/naruto",
        anime_Type: "Бойовик, Комедія, Фентезі",
        img_Path: "media/anime_posters/naruto.jpg"
    },
    
    attack_on_titan: {
        anime_Raiting: "9.5",
        anime_Name: "Attack on Titan",
        anime_Description: "У світі, де люди живуть, оточені гігантськими істотами, Ерен Єгер та його друзі приєднуються до боротьби проти загрози, щоб знайти свободу.",
        nav_Link_Path: "player_page/attack_on_titan",
        anime_Type: "Бойовик, Драма, Фантастика",
        img_Path: "media/anime_posters/attack_on_titan.jpg"
    },
    
    death_note: {
        anime_Raiting: "9.3",
        anime_Name: "Death Note",
        anime_Description: "Коли студент отримує ноутбук, що може вбивати людей, він вирішує використати його, щоб очистити світ від злочинців.",
        nav_Link_Path: "player_page/death_note",
        anime_Type: "Детектив, Фентезі, Трилер",
        img_Path: "media/anime_posters/death_note.jpg"
    },
    
    my_hero_academia: {
        anime_Raiting: "9",
        anime_Name: "My Hero Academia",
        anime_Description: "У світі, де майже всі мають суперсили, хлопець на ім'я Ізуку Мідорія мріє стати героєм та вступає до академії героїв.",
        nav_Link_Path: "player_page/my_hero_academia",
        anime_Type: "Бойовик, Комедія, Фентезі",
        img_Path: "media/anime_posters/my_hero_academia.jpg"
    },
    
    hunter_x_hunter: {
        anime_Raiting: "9.1",
        anime_Name: "Hunter x Hunter",
        anime_Description: "Гон, юний хлопець, вступає до Гончого Екзамену, щоб стати мисливцем на злочинців та знайти свого зниклого батька.",
        nav_Link_Path: "player_page/hunter_x_hunter",
        anime_Type: "Пригоди, Бойовик, Фентезі",
        img_Path: "media/anime_posters/hunter_x_hunter.jpg"
    },
    
    fullmetal_alchemist: {
        anime_Raiting: "9.2",
        anime_Name: "Fullmetal Alchemist: Brotherhood",
        anime_Description: "У світі алхімії, брати Ед та Альфонс вирушають у пошуках філософського каменю, щоб відновити свої тіла.",
        nav_Link_Path: "player_page/fullmetal_alchemist",
        anime_Type: "Бойовик, Фентезі, Драма",
        img_Path: "media/anime_posters/fullmetal_alchemist.jpg"
    },
    
    sword_art_online: {
        anime_Raiting: "8.5",
        anime_Name: "Sword Art Online",
        anime_Description: "У віртуальній реальності MMORPG тисячі гравців зачаровані у грі, а головний герой бореться за їх визволення.",
        nav_Link_Path: "player_page/sword_art_online",
        anime_Type: "Пригоди, Бойовик, Романтика",
        img_Path: "media/anime_posters/sword_art_online.jpg"
    },
    
    haikyu: {
        anime_Raiting: "9",
        anime_Name: "Haikyu!!",
        anime_Description: "Шою Хіната збирає команду волейболу, щоб змагатися на національному рівні та здолати сильних суперників.",
        nav_Link_Path: "player_page/haikyu",
        anime_Type: "Спорт, Комедія, Драма",
        img_Path: "media/anime_posters/haikyu.jpg"
    },
    
    tokyo_ghoul: {
        anime_Raiting: "8.7",
        anime_Name: "Tokyo Ghoul",
        anime_Description: "Кен Канекі, який перетворився на напів-людину, напів-гуля, бореться з іншими гулями та шукає своє місце у світі.",
        nav_Link_Path: "player_page/tokyo_ghoul",
        anime_Type: "Бойовик, Жахи, Фантастика",
        img_Path: "media/anime_posters/tokyo_ghoul.jpg"
    },
    
    black_clover: {
        anime_Raiting: "8.3",
        anime_Name: "Black Clover",
        anime_Description: "Аста, хлопець без магічних здібностей, мріє стати магом-королем та захищати своє царство від злочинців.",
        nav_Link_Path: "player_page/black_clover",
        anime_Type: "Пригоди, Бойовик, Фентезі",
        img_Path: "media/anime_posters/black_clover.jpg"
    },
    
    one_punch_man: {
        anime_Raiting: "9.3",
        anime_Name: "One-Punch Man",
        anime_Description: "Сайтама, герой, який може перемогти ворога одним ударом, шукає справжнього виклику у світі, де все здається надто простим.",
        nav_Link_Path: "player_page/one_punch_man",
        anime_Type: "Бойовик, Комедія, Фантастика",
        img_Path: "media/anime_posters/one_punch_man.jpg"
    },
    
    cowboy_bebop: {
        anime_Raiting: "9.1",
        anime_Name: "Cowboy Bebop",
        anime_Description: "На космічному кораблі 'Бібоп' група мисливців на злочинців шукає небезпечних злочинців та стикається зі своїми минулими.",
        nav_Link_Path: "player_page/cowboy_bebop",
        anime_Type: "Бойовик, Детектив, Нуар",
        img_Path: "media/anime_posters/cowboy_bebop.jpg"
    },

    fairy_tail: {
        anime_Raiting: "8.4",
        anime_Name: "Fairy Tail",
        anime_Description: "У світі, повному магії, молодий маг на ім'я Нацу та його команда гільдії 'Fairy Tail' зіткнуться з різними пригодами та ворогами.",
        nav_Link_Path: "player_page/fairy_tail",
        anime_Type: "Пригоди, Бойовик, Фентезі",
        img_Path: "media/anime_posters/fairy_tail.jpg"
    }
    
    
};

const new_AnimesReducer = (store = initialState, action) => {
    switch (action.type){
        default:
            return store;
    }
};

export default new_AnimesReducer;