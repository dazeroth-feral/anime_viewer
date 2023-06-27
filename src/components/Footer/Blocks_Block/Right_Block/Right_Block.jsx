import React from 'react';

import css from "./Right_Block.module.css"
import Site_Description_Block from './Site_Description_Block/Site_Description_Block';
import Links_Block from './Links_Block/Links_Block';

const Right_Block = ({ state, site_description_style }) => {


    return (
        <div className={css.content}>
            <Site_Description_Block site_description_style={site_description_style}/>
            <Links_Block state={state} />
        </div>
    );
};

export default Right_Block;