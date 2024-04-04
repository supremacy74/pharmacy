import Logo from '../../icons/logo.tsx'
import styles from './styles.module.scss'
import Pharmacy from '../../icons/pharmacy.tsx'
import Vessel from '../../icons/vessel.tsx'
import { Link } from 'react-router-dom'
import Circles from '../../../widgets/circles'
import Container from '../../container'

const HomeScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <Logo />
                        <div className={styles.items}>
                            <div className={styles.item}>
                                <Pharmacy />
                                <div className={styles.info}>
                                    <h2 className={styles.heading}>ОТКУДА ЕСТЬ ПОШЛА АПТЕКА</h2>
                                    <p className={styles.text}>
                                        Слово «аптека» произошло от греческого «apotheke», что
                                        означает «склад», «кладовая». Когда-то в больницах при
                                        Храмах отводились специальные помещения для приготовления
                                        лекарств.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <Vessel />
                                <div className={styles.info}>
                                    <h2 className={styles.heading}>ЧТО В ЧАШЕ СО ЗМЕЕЙ?</h2>
                                    <p className={styles.text}>
                                        Змея и чаша были атрибутами древнегреческой богини здоровья
                                        Гигиеи (именно от ее имени образовано слово «гигиена»),
                                        дочери бога-врачевателя Асклепия. Гигиею изображали со
                                        змеей, которую она кормила из чаши. Затем чашу, обвитую
                                        змеей, назвали сосудом Гигиеи, и сегодня это
                                        интернациональный символ фармацевтики.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Circles />
                </div>
                <div className={styles.bottom}>
                    <Link className={styles.link} to='/method'>
                        КАК ЛЕЧИЛИ ДРЕВНИЕ
                    </Link>
                    <Link className={styles.link} to='/antiquity'>
                        ПЕРВЫЕ АПТЕКИ <br /> НА РУСИ
                    </Link>
                    <Link className={styles.link} to='/soviet'>
                        АПТЕКИ <br /> СОВЕТСКОГО ВРЕМЕНИ
                    </Link>
                    <Link className={styles.link} to='/century'>
                        В XXI ВЕК ВМЕСТЕ С 36,6
                    </Link>
                    <Link className={styles.link} to='/facts'>
                        ИНТЕРЕСНЫЕ ФАКТЫ <br /> О ФАРМАЦИИ
                    </Link>
                    <Link className={styles.link} to='/champion'>
                        АПТЕЧНОЕ ПЕРВЕНСТВО
                    </Link>
                    <Link className={styles.link} to='/items'>
                        ПРЕДМЕТЫ, КОТОРЫМИ МЫ <br /> ОБЯЗАНЫ ФАРМАЦЕВТАМ
                    </Link>
                    <Link className={styles.link} to='/legendary'>
                        ЛЕГЕНДАРНЫЕ СОВЕТСКИЕ <br /> ИЗОБРЕТЕНИЯ В ФАРМАЦИИ
                    </Link>
                </div>
            </Container>
        </div>
    )
}

export default HomeScreen
