import React from 'react';
import MainNavigation from '../MainNavigation/MainNavigation';
import Footer from '../Footer/Footer';

//@ts-ignore
import * as styles from './Layout.module.css';

const Layout = ({ children, }) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.mainContainer}>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
