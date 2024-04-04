import styles from './styles.module.scss'
import cn from 'classnames'
import Number from '../../shared/icons/number.tsx'

const Circles = () => {
    return (
        <div className={styles.circles}>
            <div className={cn(styles.circle, styles.big)}></div>
            <div className={cn(styles.circle, styles.small)}>
                <Number />
            </div>
        </div>
    )
}

export default Circles
