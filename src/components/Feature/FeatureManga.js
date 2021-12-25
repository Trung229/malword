import { memo, useRef, useEffect, useState } from 'react'
import styles from './style.module.scss'


function handleMoveRight(element, coordinates, handleCoordinates) {
    if(coordinates > -2400){
        handleCoordinates(coordinates - 400)
    }
}

function handleMoveLeft(element, coordinates, handleCoordinates) {
        if(coordinates !== 0){
            handleCoordinates(coordinates + 400)
        }
}

function FeatureManga({ title, data }) {
    const divRef = useRef();
    const [coordinates, setCoordinates] = useState(0);
    useEffect(() => {        
        divRef.current.style.marginLeft = `${coordinates === -2400 ? -2335 : coordinates}px`
    }, [coordinates])
    return (
        <div>
            <div className={styles.containerHeader}>
                <h1>{title}</h1>
            </div>
            <div className={styles.containerContent}>
                <div onClick={() => divRef.current.getBoundingClientRect().x === 15 ? null : handleMoveLeft(divRef, coordinates, setCoordinates)} className={styles.containerLeftArrow}>
                    <div className={styles.leftArrow}>
                    </div>
                </div>
                <div className={styles.containerManga}>
                    <div ref={divRef} className={styles.itemList}>
                        {data.map((item) => {
                            return (
                                <div key={item.id} className={styles.item}>
                                    <img src={item.thumbnail} width="auto" height={100} />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div onClick={() => divRef.current.getBoundingClientRect().x === -2385? null : handleMoveRight(divRef, coordinates, setCoordinates)} className={styles.containerRightArrow}>
                    <div className={styles.rightArrow}></div>
                </div>
            </div>
        </div>
    )
}


export default memo(FeatureManga);
