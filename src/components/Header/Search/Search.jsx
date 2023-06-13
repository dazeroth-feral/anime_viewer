import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import css from "./Search.module.css";
import MyModal from "../../MyModal/MyModal";

const Search = ({ props }) => {
	const [modalActive, setModalActive] = useState(false);

	const openModal = () => {
		setModalActive(true);
	};

	const closeModal = () => {
		setModalActive(false);
	};

	const [input_text, set_input_text] = useState("");

	return (
		<div className={css.content}>
			<NavLink className={css.nav_link_search} onClick={openModal}>
				<img src="media/icons/header_icons/search_white.svg" />
			</NavLink>

			<MyModal isActive={modalActive} close={closeModal}>
				<div className={css.my_modal_content}>
					<input
                        className={css.search_input}
						value={input_text}
						onChange={(e) => set_input_text(e.target.value)}
					/>
					<button className={css.more_search_optional_block}>
						<NavLink className={css.more_search_optional_link} to="/">
							Розширений пошук
						</NavLink>
					</button>
				</div>
			</MyModal>
		</div>
	);
};

export default Search;
