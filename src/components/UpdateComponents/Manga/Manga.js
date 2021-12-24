import {memo} from 'react'
import styles from './styles.module.scss'


function Manga(props) {
    const {authorName,mangaName, nameChap, numberChap, thumbnail} = props.data
    return(
        <div className={styles.container}>
            <div className={styles.containerInfoManga}>
                <img className={styles.thumbnail} src={thumbnail} width="100%" height="100%"/>
                <div className={styles.containerInfoText}>
                    <p className={styles.mangaName}>{mangaName}</p>
                    <p className={styles.mangaAuthor}>{authorName}</p>
                </div>
            </div>
            <div className={styles.containerInfoChap}>
                <div>
                    <p>{numberChap > 100 ? `#${numberChap}` : `#0${numberChap}`}</p>
                </div>
                <p className={styles.nameChap}>{nameChap}</p>
            </div>
        </div>
    )
}

export default memo(Manga);