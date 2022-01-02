import React from 'react';

import * as styles from './ErrorMessage.module.css';

const ErrorMessage = ({message,}) => {
    return (
        <span className={styles.errorMessage}>
            {message}
        </span>
    );
};

export default ErrorMessage;


