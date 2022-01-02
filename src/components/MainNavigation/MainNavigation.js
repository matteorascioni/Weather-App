import * as React from 'react';
import {useState} from 'react';
import {Link} from 'gatsby';

//@ts-ignore
import {classNames} from '../../helpers/classes';

// @ts-ignore
import * as styles from './MainNavigation.module.css';

const MainNavigation = () => {
    const [toggle, setToggle,] = useState(false);
    return (
        <header className={styles.container}>
            {/* Mobile & Desktop Menu Icon Container */}
            <div
                className={
                    toggle
                        ? `${styles.menuIconContainer}`
                        : `${styles.menuIconContainer} ${styles.borderRightMenuIconContainer} `
                }
                onClick={() => {
                    return setToggle(!toggle);
                }}
            >
                {/* Mobile Menu Icon Content */}
                <div className={styles.menuIconContent}>
                    {/* Hamburger & Cross */}
                    <div className={toggle ? `${styles.cross}` : `${styles.hamburger}`}>
                        <div />
                    </div>
                </div>
            </div>

            {/* Menu Label */}
            <span className={styles.menuLabel}>Weather App</span>

            {/* Mobile & Desktop Nav */}
            <div
                className={classNames({
                    'grid-12--desktop': true,
                    [styles.mobileNav]: toggle,
                    [styles.desktopNav]: !toggle,
                })}
            >
                {/* List */}
                <ul className={styles.list}>
                    <li
                        className={classNames({
                            [styles.listItems]: true,
                            [styles.active]: 'undefined' !== typeof window && '/' === window.location.pathname,
                        })}
                    >
                        <Link
                            className={styles.listLinks}
                            to="/"
                        >
                            Home
                        </Link>
                    </li>

                {/* Usually I'd map like this here, but I don't have data :D */}
                {/* {items.map(item => {(
                    return(
                        <li
                            key={item.id}
                            className={classNames({
                                [styles.listItems]: true,
                                [styles.active]: 'undefined' !== typeof window && `${item.url}` === window.location.pathname,
                            })}
                        >
                            <Link
                                className={styles.listLinks}
                                to={item.url}
                            >
                                {item.label}
                            </Link>
                        </li>
                    )
                )})} */}
                </ul>
            </div>
        </header>
    );
};

export default MainNavigation;
