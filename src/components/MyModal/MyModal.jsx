import React from "react";

import css from "./MyModal.module.css";

const MyModal = ({close, isActive, children}) => {
    if(!isActive) return null;

    return(
        <div className={[css.modal, css.active].join(" ")} onClick={close}>
            <div className={css.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default MyModal;