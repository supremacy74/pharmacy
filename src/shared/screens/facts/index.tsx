import styles from './styles.module.scss'
import Circles from '../../../widgets/circles'
import Container from '../../container'
import Navbar from '../../../widgets/navbar'

const FactsScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1 className={styles.generalHeading}>
                            ИНТЕРЕСНЫЕ ФАКТЫ <br /> О ФАРМАЦИИ
                        </h1>
                    </div>
                    <Circles />
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/1.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Исцеляющий МАКИЯЖ, или первое солнцезащитное средство</h3>
                                <p>
                                    Женщины и мужчины Древнего Египта использовали макияж зеленого
                                    цвета (из меди) и черного (свинцовый). Считалось, что такая
                                    краска обладает исцеляющей силой. Изначально макияж
                                    использовался для защиты от палящих лучей солнца.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/2.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Кока-Кола ОТ ГОЛОВНОЙ БОЛИ</h3>
                                <p>
                                    Головные боли и боли в желудке в конце XIX века лечили
                                    «Кока-колой», ведь в ее состав входил кокаин, который исключили
                                    из рецепта только в 1913 году.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/3.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Сахар ДЛЯ ВЫПАДЕНИЯ ЗУБОВ</h3>
                                <p>
                                    Лучшим средством от зубной боли во времена Елизаветы Петровны
                                    считали сахар: если его долго есть, зубы просто-напросто
                                    выпадали. Правда, пользоваться этим средством могли только
                                    приближенные императрицы или очень богатые купцы.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/4.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>ДОСКИ ОТ БОЛИ В СПИНЕ</h3>
                                <p>
                                    Чтобы избавиться от болей в спине, средневековые лекари
                                    рекомендовали лежать неподвижно между двумя досками, намертво
                                    привязанными к спине и животу.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/5.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>РТУТЬ ОТ СИФИЛИСА</h3>
                                <p>
                                    Все мы привыкли считать ртуть сильным ядом. А вот в XIX веке ее
                                    прописывали почти при любом заболевании, включая сифилис. На
                                    Руси и в Европе средних веков также часто лечили сулемой, так
                                    называется хлорид ртути.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./facts/6.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>КЕТЧУП ОТ ОБЛЫСЕНИЯ</h3>
                                <p>
                                    Кетчуп в XIX веке продавался в аптеках как средство от облысения
                                    и экземы. Дело в том, что пигмент ликопин, которого в кетчупе
                                    больше, чем в томатах, применяется для лечения этих заболеваний.
                                    Сейчас его можно купить в виде таблеток в аптеках, а соус
                                    употреблять по назначению.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Navbar prev='/century' next='/champion' />
                </div>
                <img className={styles.image} src='./facts/bg.svg' alt='' />
            </Container>
        </div>
    )
}

export default FactsScreen
