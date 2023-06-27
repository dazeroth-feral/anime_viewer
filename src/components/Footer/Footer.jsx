import React, { useState } from 'react';

import css from "./Footer.module.css"
import Blocks_Block from './Blocks_Block/Blocks_Block';

const site_description_visible = [css.site_description, css.active].join(" ");

const Footer = ({ state }) => {
    const [site_description_style, set_site_description_style] = useState(css.site_description)

    const site_description_switch = (bool) => {
        switch(bool){
            case true:
                set_site_description_style(site_description_visible);
                break;
            case false:
                set_site_description_style(css.site_description);
                break;
        }
    };

    return(
        <div 
            onMouseOver={() => site_description_switch(true)}
            onMouseOut={() => site_description_switch(false)}
            className={css.content}
        >
            <div className={css.gradient_line} />
            <Blocks_Block state={state} site_description_style={site_description_style} />
        </div>
    );
};

export default Footer;