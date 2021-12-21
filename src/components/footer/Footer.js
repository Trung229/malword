import React from 'react';
import { LOGO_HEADER, ARR_FOOTER, COPYRIGHT,LOGO_APP,CH_PLAY, TEXT_COPYRIGHT, AUTHOR } from '../../utils/constant'
import styles from './style.module.scss'
import APPLE_STORE from '../../assets/appleStore.svg';


function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.boxLeft}>
                <img className={styles.imgLogo} src={LOGO_HEADER} width="100%" />
                <span >©︎2021 {AUTHOR} <div>All rights reserved.</div></span>
            </div>
            <div className={styles.boxCenter}>
                <ul className={styles.listNav}>
                    {ARR_FOOTER.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className={styles.copyRight}>
                    <img src={COPYRIGHT} width={72} height={59} />
                    <p>{TEXT_COPYRIGHT}</p>
                </div>
            </div>
            <div className={styles.boxRight}>
                <img src={LOGO_APP} width={80} height={80}/>
                <div className={styles.containerIconDown}>
                    <p>Download the app and read it anytime!</p>
                    <div className={styles.containerImg}>
                        <img src={APPLE_STORE} width="10%"/>
                        <img src={CH_PLAY} width="10%"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;