import SlideImg from "./SlideImg/SlideImg";
import styles from './styles.module.scss'
import React, { useRef, useEffect, useState } from 'react'
import { Row, Col } from 'antd';
import ButtonViewAll from '../../components/UpdateComponents/ButtonViewAll/ButtonViewAll'
import Manga from '../../components/UpdateComponents/Manga/Manga'
import { DATA, DATA_RANKING, TOP, DATA_WEEKLY_MANGA, JUMP_PLUS } from '../../utils/constant'
import RankingItem from "../../components/UpdateComponents/RankingItem/RankingItem";
import FeatureManga from "../../components/Feature/FeatureManga";


function handleActiveDot(dot1, dot2, itemPicture, number) {
    dot1.current.classList.toggle('dotActive');
    dot2.current.classList.toggle('dotActive');
    number % 2 !== 0 ? itemPicture.current.style.marginLeft = '30px' : itemPicture.current.style.marginLeft = '-690px'
}

function UpdatePage() {
    const dot1 = useRef();
    const dot2 = useRef();
    const itemPicture = useRef();
    const [count, setCount] = useState(2)
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prev => prev + 1);
            handleActiveDot(dot1, dot2, itemPicture, count);
        }, 8000)
        return () => {
            clearInterval(timerId)
        }
    }, [count])

    useEffect(() => {
        const handleScroll = () => {
            setIsShow(window.scrollY > 383);
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <div className={styles.containerHeader}>
                <SlideImg ref={itemPicture} />
                <div className={styles.containerButton}>
                    <div>
                        <button onClick={() => {
                            setCount(0)
                            return dot1.current.classList.contains('dotActive') ? null : handleActiveDot(dot1, dot2, itemPicture, count)
                        }} ref={dot1} className={`${styles.dot} dotActive`}></button>
                        <button onClick={() => {
                            setCount(1)
                            return dot2.current.classList.contains('dotActive') ? null : handleActiveDot(dot1, dot2, itemPicture, count)
                        }} ref={dot2} className={styles.dot}></button>
                    </div>
                </div>
            </div>
            <div className={styles.marginTop4}>
                <Row>
                    <Col span={18}>
                        <div className={styles.containerUpdates}>
                            <div className={styles.headerUpdates}>
                                <p className={styles.headerTitle}>Daily Updates</p>
                                <ButtonViewAll title="All Updates" />
                            </div>
                            <div className={styles.paddingUpdate}>
                                <Row gutter={[8, 10]}>
                                    {DATA.map((item) => {
                                        return (
                                            <Col key={item.id} span={4}>
                                                <Manga data={item} />
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </div>
                            <FeatureManga data={DATA_WEEKLY_MANGA} title="WEEKLY SHONEN JUMP" />
                            <FeatureManga data={JUMP_PLUS} title="JUMP PLUS" />
                            <FeatureManga data={DATA_WEEKLY_MANGA} title="OTHERS" />
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className={styles.containerSocial}>
                            <a>Discord</a>
                            <a>Facebook</a>
                        </div>
                        <div className={styles.containerRanking}>
                            <div className={styles.containerHeaderRanking}>
                                <div className={styles.containerHeaderInRanking}>
                                    <h1 className={styles.rankingTitle}>Hottest</h1>
                                </div>
                                <ButtonViewAll title="View All" />
                            </div>
                            {
                                DATA_RANKING.map((item, index) => {
                                    return <RankingItem key={item.id} data={item} iconTop={TOP[index]} count={index} />
                                })
                            }
                            <div className={styles.viewAllStyles}>View All</div>
                        </div>
                    </Col>
                </Row>
                <div onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })} className={isShow ? styles.containerNavigateToTop : null}>
                    <div className={styles.iconMoveToTop}></div>
                </div>
            </div>
        </div>
    )
}

export default UpdatePage;