import clsx from 'clsx';
import styles from './styles.module.scss'
import {memo} from 'react'

function ButtonViewAll({title}) {
    return (
        <div className={clsx(styles.allUpdatesButton)}>
            <p>{title}</p>
        </div>
    )
}

export default memo(ButtonViewAll);