import React from "react";

import css from "./Text_Block.module.css";
import Top_Block from "./Top_Block/Top_Block";
import Bottom_Block from "./Bottom_Block/Bottom_Block";

const Text_Block = ({ props }) => {
	return (
		<div className={css.content}>
            <Top_Block props={props} />
            <Bottom_Block props={props} />
		</div>
	);
};

export default Text_Block;
