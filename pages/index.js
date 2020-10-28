import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>mcnowak.io</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <main className={styles.main}>
        <aside className={styles.menu}>
          <img src="/android-chrome-192x192.png" className={styles.icon}/>
        </aside>
        <h1 className={styles.title}>mcnowak.io</h1>

        <p className={styles.description}>
          A place to post all my dumb projects
        </p>

        <section>
          <h2 className={styles.heading}>Posts</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, date, title }) => (
              <Link href={`/posts/${encodeURIComponent(id)}`} key={id}>
                <div className={styles.card} key={id}>
                  <h3>{title}</h3>
                  <p>{date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Link href="https://github.com/mcnnowak">
          github.com/mcnnowak
        </Link>
      </footer>
    </div>
  )
}
