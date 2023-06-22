import React, { useState } from "react";

import css from "./base_css/App.module.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import RoutesBlock from "./components/Routes/RoutesBlock";

function App({ state }) {
	return (
		<div className={css.content}>
			<Header />

			<main className={css.main}>
				<RoutesBlock state={state} />
			</main>

  		<Footer state={state.footer_list} />
		</div>
	);
}

export default App;
