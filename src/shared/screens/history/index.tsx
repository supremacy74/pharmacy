import styles from './styles.module.scss'
import Navbar from '../../../widgets/navbar'

const HistoryScreen = () => {
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
                        <span>от аптеки для больных</span> <br /> к сообществу <br /> здоровых людей
                    </p>
                </div>
            </div>
            <div className={styles.navbarWrapper}>
                <div className={styles.list}>
                    <p>· 1991 год — открыла двери первая аптека 36,6.</p>
                    <p>
                        · 1998 год — первыми в России превратили классическую аптеку в центр красоты
                        и здоровья с приветливым персоналом и красивым интерьером, внедрив открытый
                        формат торговли товарами для здоровья и красоты, как в супермаркете.
                    </p>
                    <p>
                        · 2000 год — впервые представили знаменитые международные бренды лечебной
                        косметики в аптеках.
                    </p>
                    <p>
                        · 2004 год — компания 36,6 первой среди аптек выпустила товары под
                        собственной торговой маркой.
                    </p>
                    <p>
                        · 2006 год — первая российская компания, вступившая в Национальную федерацию
                        предприятий розничной торговли (National Retail Federation).
                    </p>
                    <p>
                        · 2006–2015 год — компания 36,6 развивает бренды аптек «ГОРЗДРАВ», «A.V.E.»,
                        «А5», «Старый Лекарь», «03».
                    </p>
                    <p>· 2016 год — становится крупнейшей аптечной сетью страны.</p>
                    <p>· 2017 год — запуск глобального онлайн-проекта – интернет-аптеки 36,6.</p>
                    <p>
                        · 2019 год — компания 36,6 берет в управление крупнейшую новгородскую
                        аптечную сеть «Калина Фарм» и расширяет присутствие в регионах.
                    </p>
                    <p>
                        · Аптеки 36,6 названы брендом выбора номер 1 (по данным исследовательского
                        холдинга «Ромир») и заняли лидирующие позиции по узнаваемости и
                        посещаемости.
                    </p>
                    <p>
                        · 2020 год — к программе лояльности сети присоединился 5-миллионный
                        покупатель.
                    </p>
                    <p>
                        · 2021 год — Аптечная сеть 36,6 в десятый раз получила звание
                        «Привлекательный работодатель» портала SuperJob.
                    </p>
                    <p>
                        · 2023 год — участник пилотного проекта по доставке рецептурных препаратов.
                    </p>
                </div>
                <Navbar prev='/century' next='/first' />
            </div>
        </div>
    )
}

export default HistoryScreen
