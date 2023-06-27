import React from 'react';

import css from "./Blocks_Block.module.css"
import Left_Block from './Left_Block/Left_Block';
import Right_Block from './Right_Block/Right_Block';

const Blocks_Block = ({ state, site_description_style }) => {


    return (
        <div className={css.content}>
            <Left_Block state={state} />
            <Right_Block state={state} site_description_style={site_description_style} />
        </div>
    );
};

export default Blocks_Block;