import React from 'react';

import css from "./Site_Description_Block.module.css"

const Site_Description_Block = ({ site_description_style }) => {
    return (
        <div className={site_description_style}>
            <div className={css.text_block}>
                <div className={css.label}>
                    Світ україномовного аніме
                </div>
                <div className={css.description}>
                    Ласкаво просимо на наш сайт, де ви зможете зануритися в світ українського аніме. Відкрийте для себе різноманітні жанри та насолоджуйтесь оригінальними українськими озвучками, які створюють повну іммерсію в кожну історію.
                </div>
            </div>
            <div className={css.h_top} />
        </div>
    );
};

export default Site_Description_Block;