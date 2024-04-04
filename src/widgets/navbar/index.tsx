import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

const Navbar = ({ prev, next }: { prev: string; next: string }) => {
    return (
        <div className={styles.buttons}>
            <Link className={styles.button} to={prev}>
                <img className={styles.left} src='./arrow.svg' />
            </Link>
            <Link className={styles.button} to={'/'}>
                <img className={styles.forward} src='./arrow.svg' />
            </Link>
            <Link className={styles.button} to={next}>
                <img className={styles.right} src='./arrow.svg' />
            </Link>
        </div>
    )
}

export default Navbar
