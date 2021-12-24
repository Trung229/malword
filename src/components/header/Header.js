import React from 'react';
import styles from './style.module.scss'
import { LOGO_HEADER, ARR_HEADER, LIST_CHARACTER } from '../../utils/constant'
import LOGO_SEARCH from '../../assets/logo_search.svg';


function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.slideShowCharacter}/>
            <div className={styles.containerLeft}>
                <img className={styles['logo_header']} src={LOGO_HEADER} />                
                <ul className={styles.containerNav}>
                    {ARR_HEADER.map((item, index) => {
                        return <li className={styles.itemNav} key={index}>{item}</li>
                    })}
                </ul>
            </div>
            <div className={styles.containerInputSearch}>
                <div className={styles.containerInputPosition}>
                    <input className={styles.inputSearch} type='text' placeholder="Search by title or author" />
                    <img className={styles.logoSearch} src={LOGO_SEARCH} width={20} height={20} />
                </div>
            </div>
        </div>
    )
}

export default Header;