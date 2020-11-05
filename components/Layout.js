import Link from 'next/link'
import Navigation from './Navigation'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navigation logo="/android-chrome-192x192.png"/>
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <Link href="https://github.com/mcnnowak">
            github.com/mcnnowak
        </Link>
      </footer>
    </div>
  )
}