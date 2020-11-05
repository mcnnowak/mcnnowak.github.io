import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation({ ...props }) {
    return <nav className={styles.navigation}>
        <ul className={styles.menu}>
            <li className={styles.logo}><a href="/"><img src={props.logo} className={styles.logo}/></a></li>
            <li className={styles.item}><a href="/">mcnowak.io</a></li>
            <li className={styles.item}><a href="/blog">Blog</a></li>
            <li className={styles.item}><a href="/projects">Projects</a></li>
            <li className={styles.item}><a href="/about">About</a></li>
        </ul>
    </nav>
}