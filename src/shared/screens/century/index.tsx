import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import Navbar from '../../../widgets/navbar'

const CenturyScreen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.meta}>
                    <p>
                        В XXI ВЕК <br /> ВМЕСТЕ С
                    </p>
                    <img src='./number.svg' alt='' />
                </div>
                <div className={styles.buttons}>
                    <Link to='/history'>
                        от аптеки для больных <br /> к сообществу <br /> здоровых людей
                    </Link>
                    <Link to='/first'>36,6 сделали это первыми</Link>
                    <Link to='/interesting'>ИНТЕРЕСНЫЕ ФАКТЫ о 36,6</Link>
                </div>
            </div>
            <div className={styles.navbarWrapper}>
                <Navbar prev='/soviet' next='/facts' />
            </div>
        </div>
    )
}

export default CenturyScreen
