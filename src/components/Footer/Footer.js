import React from 'react';
import { Link } from 'gatsby';
import Headline from '../Headline/Headline';

import * as styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={`${styles.container}`}>
            <Headline
                headline="Weather App"
                tagName="h3"
            />
            <Link 
                className={styles.link}
                to="https://www.linkedin.com/in/matteorascioni/">
                My Linkedin 
            </Link>
            <Link 
                className={styles.link}
                to="https://github.com/matteorascioni">
                My GitHub 
            </Link>
            <span className={styles.copyright}>© powered by Matteo Rascioni</span>
        </div>
    )
}

export default Footer
