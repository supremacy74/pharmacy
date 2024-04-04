import styles from './styles.module.scss'
import Circles from '../../../widgets/circles'
import Container from '../../container'
import Navbar from '../../../widgets/navbar'

const ChampionScreen = () => {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <h1 className={styles.generalHeading}>
                            АПТЕЧНОЕ <br /> ПЕРВЕНСТВО
                        </h1>
                    </div>
                    <Circles />
                </div>
                <div className={styles.block}>
                    <div className={styles.info}>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/1.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первое описание лекарств</h3>
                                <p>
                                    Первым составил описание лекарств известный древнегреческий врач
                                    Гиппократ. Он описал около 200 препаратов. На сегодняшний день
                                    существует более 200 000 лекарств.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/2.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первое рукотворное лекарство</h3>
                                <p>
                                    Им признан спирт, полученный в результате перегонки. И мы до сих
                                    пор используем его в числе других медикаментов.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/3.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первая аптека в мире</h3>
                                <p>
                                    Первая в мире зарегистрированная аптека открылась в VIII веке в
                                    столице Арабского халифата Багдаде. Значительно позже, в XI
                                    веке, они появились в Испании, а затем и в других странах.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/4.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первая инструкция к лекарству</h3>
                                <p>
                                    Самая первая инструкция о правилах приема таблеток состояла из
                                    120 слов. В настоящее время в инструкциях к некоторым таблеткам
                                    насчитывается более 6000 слов.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/5.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первая «бензозаправка» в аптеке</h3>
                                <p>
                                    Для первых автомобилей с бензиновыми двигателями, появившихся в
                                    конце XIX века, бензин покупали в аптеках. Он продавался в
                                    небольших бутылочках как лекарство от кожных болезней.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/6.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первые капли «от нервов» из речной воды</h3>
                                <p>
                                    Появились незадолго до революции в Петрограде и были очень
                                    популярны. Это капли барона Вревского — «от нервов». Их даже
                                    рассылали по почте и рекламировали в прессе. Впоследствии
                                    выяснилось, что это была просто вода из Невы.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/7.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первое лекарство от несуществующих болезней</h3>
                                <p>
                                    Выпустили в США под названием Obecalp. Основным его компонентом
                                    является сахар, а назначают эти таблетки детям при
                                    несущественных жалобах на здоровье. Если прочитать название
                                    наоборот, получится «плацебо».
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/8.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первая анестезия в родах</h3>
                                <p>
                                    Анестезия впервые была применена при родах в Шотландии в 1847
                                    году. Один из докторов обратил внимание на анестетический эффект
                                    хлороформа. А первая роженица, на которой его опробовали, в знак
                                    благодарности назвала дочь Анестезией.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/9.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первый антибиотик из плесени</h3>
                                <p>
                                    Был открыт случайно Флемингом. Он просто забыл про пробирку с
                                    бактериями стафилококка, так как в лаборатории всегда был
                                    беспорядок. Когда вновь нашел ее, заметил, что внутри выросла
                                    колония плесневых грибов и стала разрушать бактерии. Так был
                                    изобретен антибиотик.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/10.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первые БАДы из гвоздей</h3>
                                <p>
                                    Первые БАДы появились в США благодаря химику Карлу Ренборгу,
                                    который изучал традиции медицины в Китае. В годы политического
                                    кризиса Ренборг оказался в китайской тюрьме. Чтобы
                                    компенсировать скудное питание, он добавлял в пищу толченые
                                    гвозди, травы и растения, которые ему удавалось собрать.
                                    Окружающие смотрели на него, как на сумасшедшего, но признавали,
                                    что выглядит он лучше остальных заключенных. Вернувшись в США,
                                    Ренборг решил использовать свои знания на пользу людям.
                                </p>
                            </div>
                        </div>
                        <div className={styles.item}>
                            <div className={styles.imageWrapper}>
                                <img src='./champion/11.svg' alt='' />
                            </div>
                            <div className={styles.meta}>
                                <h3>Первый шарлатан — Шарль Латан</h3>
                                <p>
                                    Французский врач XVIII века Шарль Латан искусно лечил болезни
                                    глаз, а конкретно — глаукому, которая вызывает отслоение
                                    сетчатки. Его метод был дорогим и болезненным. Шарль Латан со
                                    всей силы бил пациента кулаком в больной глаз. При этом сетчатка
                                    на некоторое время прижималась к глазному дну, и человек видел
                                    лучше. Радостный клиент рассчитывался с «доктором», но через
                                    несколько дней сетчатка снова отслаивалась, а зрение ухудшалось.
                                    Правда, «врача» уже и след простыл.
                                </p>
                            </div>
                        </div>
                    </div>
                    <Navbar prev='/facts' next='/items' />
                </div>
                <img className={styles.image} src='./champion/bg.svg' alt='' />
            </Container>
        </div>
    )
}

export default ChampionScreen
