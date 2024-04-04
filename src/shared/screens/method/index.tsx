import styles from './styles.module.scss'
import Circles from '../../../widgets/circles'
import Container from '../../container'
import Navbar from '../../../widgets/navbar'

const MethodScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1 className={styles.generalHeading}>
                            Как лечили <br /> древние
                        </h1>
                    </div>
                    <Circles />
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <div className={styles.icons}>
                                <img src='./method/1.svg' alt='' />
                                <img src='./method/2.svg' alt='' />
                                <img src='./method/3.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <p>
                                    Первые фармацевты изготовили лекарственные средства в те
                                    времена, когда люди еще не умели писать, и поэтому никаких
                                    записей о них не сохранилось. А вот об античных лекарях есть
                                    множество упоминаний. Эти люди сами изготавливали лекарства из
                                    растительных средств по своим рецептам. Разделение же на врачей
                                    и фармацевтов произошло в Европе лишь в XIII веке.
                                </p>
                                <h3>Лекарства, открытые животными</h3>
                                <ul>
                                    <li>
                                        Туземцы Южной Америки открыли целебные свойства хинного
                                        дерева, наблюдая за пумами, которые поедали его кору и
                                        излечивались от лихорадки.
                                    </li>
                                    <li>
                                        Возбуждающее действие кофе помогли открыть козы. Животные
                                        начинали весело прыгать и активно вести себя, полакомившись
                                        плодами кофейного дерева.
                                    </li>
                                    <li>
                                        В народной медицине Сибири давно применяется растение
                                        левзея, называемое там маральим корнем. Этим корнем
                                        «лечатся» олени (маралы).
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./method/4.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Стандарты качества в Древнем Египте</h3>
                                <p>
                                    Древние Египтяне использовали множество растений и минералов для
                                    приготовления лекарственных средств. Египетские фармацевты были
                                    организованы в гильдии и придерживались определенных стандартов
                                    качества и безопасности при изготовлении лекарств.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./method/5.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Классификация лекарств в Древней Греции</h3>
                                <p>
                                    Греки развили систему классификации лекарственных растений и
                                    описали множество методов их приготовления. Они также основали
                                    фармацевтическую химию, изучая свойства различных веществ и их
                                    взаимодействие с организмом.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./method/6.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Аптекариусы Древнего Рима</h3>
                                <p>
                                    В древнем Риме фармацевты назывались аптекариусами. Они
                                    занимались продажей и приготовлением лекарственных средств.
                                    Римляне также использовали множество растений и минералов для
                                    лечения различных заболеваний.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./method/7.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Лекарствоведение Древнего Китая</h3>
                                <p>
                                    Первые тексты по лекарствоведению древние китайские целители
                                    вырезали на деревянных дощечках, черепаховых панцирях или писали
                                    на шелке около 4 тыс. лет назад. Считая человека мини-моделью
                                    космоса, они представляли, что болезнь или здоровье в организме
                                    определяется соотношением противоположных друг другу начал — инь
                                    и ян.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Navbar prev='/' next='/antiquity' />
                </div>
                <img className={styles.image} src='./method/bg.svg' alt='' />
            </Container>
        </div>
    )
}

export default MethodScreen
