import styles from './styles.module.scss'
import Circles from '../../../widgets/circles'
import Container from '../../container'
import Navbar from '../../../widgets/navbar'
import cn from 'classnames'

const SovietScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1 className={styles.generalHeading}>
                            АПТЕКИ <br /> СОВЕТСКОГО ВРЕМЕНИ
                        </h1>
                    </div>
                    <Circles />
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/1.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Аптеки СССР сравнивали с храмом медицины; полы из мрамора, все
                                    идеально чисто, в воздухе витает легкий запах лекарств.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/2.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Советские аптеки не были коммерческими, в них не было одних и
                                    тех же лекарств под разными наименованиями. Цены были едины, а
                                    многие препараты делали в самой аптеке.
                                </p>
                            </div>
                        </div>
                        <div className={cn(styles.item, styles.specified)}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/3.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Вот цены из советской аптеки: гематоген — 11 копеек, таблетки от
                                    кашля — 1 копейка, а витамин С с глюкозой — 5 копеек.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/4.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Обычные граждане могли принять участие в изготовлении
                                    лекарственных сборов, дети собирали крапиву, бессмертник и
                                    подорожник. А на заработанные 11 копеек можно было купить
                                    Эскимо!
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/5.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Несмотря на то что простые дешевые лекарства были во всех
                                    аптеках, за редкими и качественными препаратами приходилось
                                    охотиться — ездить в большие города или доставать «по
                                    знакомству».
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./soviet/6.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Смешные случаи в практике советских аптекарей чаще всего были
                                    связаны с пожилыми людьми. Они просили то капли Анисимовых
                                    (анисовые капли), то дормидонту (димедрол), то воду от лихоты.
                                    Некоторые жаловались, что не горят ректальные свечи, что вместо
                                    капель для носа дали для глаз (галазолин). А кто-то просил
                                    комфортный спирт (камфорный).
                                </p>
                            </div>
                        </div>
                    </div>
                    <Navbar prev='/antiquity' next='/century' />
                </div>
                <img className={styles.image} src='./soviet/bg.svg' alt='' />
            </Container>
        </div>
    )
}

export default SovietScreen
