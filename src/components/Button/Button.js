import React from 'react'

import * as styles from './Button.module.css';

const Button = ({label, onClick}) => {
    return (
        <button 
            className={styles.container}
            onClick={onClick}
        >
            {label}           
        </button>
    );
};

export default Button;
