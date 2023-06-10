const PLR_PG = "player_page";
const DET_PG = "details_page";

const BP_PATH = "media/recommendation_background/big_pictures";
const SWP_PATH = "media/recommendation_background/switcher_posters";

let initialState = {
	demon_slayer: {
		raiting: "8.7",

		name: "Клинок, що знищує демонів",
		description:
			"Після важкої битви з демонами, Танзіро Камадо потребує нового меча і разом зі своєю сестрою-демоном вирушає в село ковалів. Проте їх мирне життя порушує з'явлення небезпечних демонів, і вони повинні знову зіткнутися з ними, щоб вижити та покласти край демонічній загрозі, що тероризує їх країну століттями. Чи зможуть вони зберегти свої життя та перемогти цю страшну силу?",

		navLink_playerPage_path: `${PLR_PG}/demon_slayer`,
		navLink_detailsPage_path: `${DET_PG}/demon_slayer`,

		date_present: "9-го квітня, 2023 року",
		genre: "Онґоінґ",
		view_type: "TV",
		series_length: "24m",
		quality: "HD",

		big_img_path: `${BP_PATH}/demon_slayer.png`,
		mini_img_path: `${SWP_PATH}/demon_slayer.jpg`,

		number: 0,
	},

	one_piece: {
		raiting: "10",

		name: "Великий куш",
		description:
			'"One Piece" - це японське аніме, засноване на манзі Ейічіро Оди. Воно розповідає про захопливі пригоди Гол D. Роджера, Луффі, мандрівника, який шукає великий скарб "One Piece", збираючи команду піратів та борючись з потужними противниками, у світі повному фантастичних істот і політичних інтриг.',

		navLink_playerPage_path: `${PLR_PG}/one_piece`,
		navLink_detailsPage_path: `${DET_PG}/one_piece`,

		date_present: "26-го травня, 2023 року",
		genre: "Онґоінґ",
		view_type: "TV",
		series_length: "24m",
		quality: "HD",

		big_img_path: `${BP_PATH}/one_piece.jpg`,
		mini_img_path: `${SWP_PATH}/one_piece.jpg`,

		number: 1,
	},

    black_clover: {
		raiting: "9.1",

		name: "Чорна конюшина",
		description:
			'"Black Clover" - захоплююче аніме про хлопця на ім\'я Аста, який живе в світі, де магія є повсякденним. Хоча Аста не має магічних здібностей, він мріє стати Магом-Королем, найсильнішим магом у королівстві. Разом зі своїм другом Юною вони приєднуються до Блискавичної Братерства та зустрічають нових друзів та ворогів.',

		navLink_playerPage_path: `${PLR_PG}/black_clover`,
		navLink_detailsPage_path: `${DET_PG}/black_clover`,

		date_present: "9-го лютого, 2024 року",
		genre: "Онґоінґ",
		view_type: "TV",
		series_length: "24m",
		quality: "HD",

		big_img_path: `${BP_PATH}/black_clover.png`,
		mini_img_path: `${SWP_PATH}/black_clover.jpg`,

		number: 1,
	},
	
};

const recommendationsReducer = (store = initialState, action) => {
	switch (action.type) {
		default:
			return store;
	}
};

export default recommendationsReducer;
