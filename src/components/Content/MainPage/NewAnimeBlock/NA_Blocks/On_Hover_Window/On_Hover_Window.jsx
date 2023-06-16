import React, { useState, useRef } from "react";
import css from "./On_Hover_Window.module.css";

const On_Hover_Window = () => {
	const [isTooltipVisible, setTooltipVisible] = useState(false);
	const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
	const elementRef = useRef(null);

	const handleMouseEnter = () => {
		const element = elementRef.current;
		if (element) {
			const { top, left } = element.getBoundingClientRect();
			setTooltipPosition({ top, left });
		}
		setTooltipVisible(true);
	};

	const handleMouseLeave = () => {
		setTooltipVisible(false);
	};

	return (
		<div className={css.tooltip_container}>
			<div
				ref={elementRef}
				className={css.element}
				onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
			>
				Hover over me
			</div>
			{isTooltipVisible && (
				<div
					style={{
						top: (tooltipPosition.top + 1000),
						left: tooltipPosition.left,
            position: "absolute",
            visibility: "visible",
					}}
				>
					<div className={css.tooltip_content}>
						<h3>Tooltip Title</h3>
						<p>Tooltip content goes here</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default On_Hover_Window;
