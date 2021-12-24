import styles from './style.module.scss'

function Banner({img}){
    return(
        <div className={styles.ContainerBanner}>
            <img src={img} className={styles.banner}/>
        </div>
    )
}

export default Banner;