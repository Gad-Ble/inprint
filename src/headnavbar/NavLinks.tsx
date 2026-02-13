import styles from './NavLinks.module.css'


export function NavLinks() {
    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.navLinks}>
                        <a href="#">Широкоформатная печать</a>
                        <a href="#">Полиграфия</a>
                        <a href="#">Сувенирная печать</a>
                        <a href="#">Наружная реклама</a>
                        <a href="#">Галерея работ</a>
                    </div>
            </div>
        </div>
    )
}
