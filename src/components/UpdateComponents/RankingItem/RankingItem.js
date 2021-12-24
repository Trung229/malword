import styles from './style.module.scss';
import iconHot from '../../../assets/iconHostest.svg'
import {memo} from 'react'


function RankingItem(props) {
    const { authorName, nameManga, thumbnail, views } = props.data;
    const { iconTop, count } = props;
    return (
        <div className={styles.container}>
            <div className={styles.containerRanking}>
                <img src={thumbnail} height={105} />
                <div className={styles.circle}>
                    <div>
                        {iconTop ? <img className={styles.rankingReward} src={iconTop} /> : count + 1}
                    </div>
                </div>
            </div>
            <div className={styles.containerInfo}>
                <p className={styles.nameManga}>{nameManga}</p>
                <p className={styles.authorName}>{authorName}</p>
                <p className={styles.containerViews}><img className={styles.iconHot} src={iconHot}/><span>{views}</span></p>
            </div>
        </div>
    )
}


export default memo(RankingItem);