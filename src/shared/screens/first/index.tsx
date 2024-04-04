import styles from './styles.module.scss'
import Navbar from '../../../widgets/navbar'

const FirstScreen = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <div className={styles.meta}>
                        <p>
                            В XXI ВЕК <br /> ВМЕСТЕ С
                        </p>
                        <img src='./number.svg' alt='' />
                    </div>
                    <p>
                        <span>36,6 сделали это</span> <br /> первыми людей
                    </p>
                </div>
            </div>
            <div className={styles.navbarWrapper}>
                <div className={styles.list}>
                    <p>
                        · Первыми создали аптеки с открытой формой торговли по принципу супермаркета
                    </p>
                    <p>
                        · Впервые на аптечном рынке выпустили товары под собственной торговой маркой
                    </p>
                    <p>
                        · Стали первой и единственной в России публичной компанией торговли товарами
                        для красоты и здоровья
                    </p>
                    <p>
                        · В десятый раз получили звание «Привлекательный работодатель» портала
                        SuperJob
                    </p>
                    <p>· Названы брендом выбора номер 1 по узнаваемости и посещаемости</p>
                    <p>
                        · Первая российская компания, вступившая в Национальную федерацию
                        предприятий розничной торговли (National Retail Federation)
                    </p>
                </div>
                <Navbar prev='/history' next='/interesting' />
            </div>
        </div>
    )
}

export default FirstScreen
