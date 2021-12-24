import Banner from "../../../components/UpdateComponents/Banner/Banner";
import {BANNER_1, BANNER_2} from '../../../utils/constant'
import styles from './styles.module.scss'
import {forwardRef, memo} from 'react'

function SlideImg(props, ref){
    return(
        <div ref={ref} className={styles.container}>
            <Banner img={BANNER_1}/>
            <Banner img={BANNER_2}/>
            <Banner img={BANNER_1}/>
        </div>
    )
}

const refHOC = forwardRef(SlideImg);
const memoHOC = memo(refHOC)

export default memoHOC;