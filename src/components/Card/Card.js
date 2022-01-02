import React from 'react';

import * as styles from './Card.module.css';

const Card = ({ children, }) => {
    return(
        <div className={`
            ${styles.container}
            grid-2--mobile
            grid-8--tablet
            grid-12--desktop
        `}>
           { children } 
        </div>
    );
};

export default Card;